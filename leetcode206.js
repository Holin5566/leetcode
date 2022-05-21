// 反轉一個連結串列。
// 範例： { val:1, next: {val:2, next:null} } }
// 反轉： { val:2, next: {val:1, next:null} } }

let node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      },
    },
  },
};

// Runtime: 87 ms, faster than 45.71% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44.2 MB, less than 54.36% of JavaScript online submissions for Reverse Linked List.
// var reverseList = function (head) {
//   if (!head || !head.next) return head;
//   let current = head;
//   let sort = [];
//   let next;
//   while (current.next !== null) {
//     next = current.next;
//     current.next = null;
//     sort.push(current);
//     current = next;
//   }
//   sort.push(next);
//   let size = sort.length - 1;
//   for (let i = size; i > 0; i--) {
//     sort[i].next = sort[i - 1];
//   }
//   return sort[size];
// };

//超時
// var reverseList = function (head) {
//   if (!head) return null;
//   let cur = head;
//   let newNode = null;
//   let nextNode;
//   while (cur) {
//     nextNode = cur.next;
//     cur.next = newNode;
//     newNode = cur;
//     console.log(cur);
//     cur = nextNode;
//   }
//   return newNode;
// };

//遞迴解
// Runtime: 95 ms, faster than 33.41% of JavaScript online submissions for Reverse Linked List.
// Memory Usage: 44.6 MB, less than 24.59% of JavaScript online submissions for Reverse Linked List.
var reverseList = function (cur) {
  return reverse(null, cur);
};
function reverse(newNode, cur) {
  if (!cur) return newNode;
  let nextNode = cur.next;
  cur.next = newNode;
  return reverse(cur, nextNode);
}

console.log(reverseList(node));
