// 給一個單向的連結陣列，判斷他是不是一個回文連結陣列。
// 進階：你能使用O(n)的時間與O(1)的空間來處理這個題目嗎?
let node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 1,
        next: null,
      },
    },
  },
};

// Runtime: 204 ms, faster than 50.82% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 78.6 MB, less than 33.36% of JavaScript online submissions for Palindrome Linked List.
var MY_isPalindrome = function (head) {
  if (!head) return false;
  let cur = head;
  let sort = [cur.val];
  while (cur.next !== null) {
    cur = cur.next;
    sort.push(cur.val);
  }
  let size = sort.length;
  let half = parseInt(size / 2);
  for (let i = 0; i < half; i++) {
    if (sort[i] != sort[size - i - 1]) {
      return false;
    }
  }
  return true;
};

// Runtime: 155 ms, faster than 89.14% of JavaScript online submissions for Palindrome Linked List.
// Memory Usage: 64.1 MB, less than 91.47% of JavaScript online submissions for Palindrome Linked List.
var isPalindrome = function (head) {
  if (!head) return false;
  if (!head.next) return true;
  let cur = head;
  let newNode = null;
  let fast = head;

  //快指標到底時，慢指標位在中心
  while (fast) {
    // 若 fast.next == null
    if (fast.next === null) {
      cur = cur.next;
      break;
    }
    fast = fast.next.next;

    //慢指標沿路反轉傳列
    let nextNode = cur.next;
    cur.next = newNode;
    newNode = cur;
    cur = nextNode;
  }
  //慢指標繼續遍歷，比對反轉的串列
  while (cur) {
    if (cur.val !== newNode.val) return false;
    cur = cur.next;
    newNode = newNode.next;
  }
  return true;
};

console.log(isPalindrome(node));
