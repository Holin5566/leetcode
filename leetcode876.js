// 给定一个头结点为 head 的非空单链表，返回链表的中间结点。
// 如果有两个中间结点，则返回第二个中间结点。
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const node = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null,
        },
      },
    },
  },
};
// Runtime: 89 ms, faster than 30.50% of JavaScript online submissions for Middle of the Linked List.
// Memory Usage: 42.2 MB, less than 32.91% of JavaScript online submissions for Middle of the Linked List.
var middleNode = function (head) {
  if (!head || !head.next) return head;
  let cur = (fast = head);
  while (fast && fast.next) {
    console.log(fast);
    cur = cur.next;
    fast = fast.next.next;
  }
  return cur;
};
// var middleNode = function (head) {
//     let cur = (fast = head);
//     while (fast && fast.next) {
//       cur = cur.next;
//       fast = fast.next.next;
//     }
//     return cur;
//   };

console.log(middleNode(node));
