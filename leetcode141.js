// 給一個連結陣列，判斷裡面是不是包含一個循環連結。
// 進階： 你能不使用額外的空間來解這題嗎?
// 範例:
// [1,2,3,2,3,2.....]，[1]的next是[2]
// [2]的next是[3]
// [3]的next是[2]，從上一步我們知道2的next是[3]，所以這是一個循環連結
// 假如[1,2,3,2,3]，那就不是一個連結陣列迴圈，因為最後的[3]next並不是[2]，所以循環連結不成立。

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

let circle = {
  val: 1,
  next: null,
};

circle.next = circle;
let head = {
  val: 5,
  next: null,
};
head.next = circle;

// wtf
// Runtime: 86 ms, faster than 68.01% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 44.8 MB, less than 68.21% of JavaScript online submissions for Linked List Cycle.
// var hasCycle = function (head) {
//     let current = head;
//     while (current && current !== null) {
//       if (current.val === "done") return true;
//       current.val = "done";
//       current = current.next;
//     }
//     return false;
//   };

// bad
// Runtime: 238 ms, faster than 5.04% of JavaScript online submissions for Linked List Cycle.
// Memory Usage: 46.2 MB, less than 6.07% of JavaScript online submissions for Linked List Cycle.
var hasCycle = function (head) {
  try {
    JSON.stringify(head);
  } catch {
    return true;
  }
  return false;
};

//快慢指針
// var hasCycle = function (head) {
//   let fast = head;
//   let slow = head;
//   while (fast && fast.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//     if (fast == slow) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(hasCycle(head));
console.log(hasCycle(head));
