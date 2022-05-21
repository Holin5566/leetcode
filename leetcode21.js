// 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
// 示例 1：
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]
// 示例 2：
// 输入：l1 = [], l2 = []
// 输出：[]
// 示例 3：
// 输入：l1 = [], l2 = [0]
// 输出：[0]

// 提示：
// 两个链表的节点数目范围是 [0, 50]
// -100 <= Node.val <= 100
// l1 和 l2 均按 非递减顺序 排列

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let result = new ListNode(0);
  let current = result;

  // 不斷執行直到 l1 or l2 到尾端
  while (l1 !== null && l2 !== null) {
    if (l1.val > l2.val) {
      // current 接上 l2
      current.next = l2;
      // l2 前進一格
      l2 = l2.next;
    } else {
      // current 接上 l1
      current.next = l1;
      // l1 前進一格
      l1 = l1.next;
    }
    // current 前進一格
    current = current.next;
  }

  // current 串上剩餘部分
  if (l1 !== null) {
    current.next = l1;
  }
  if (l2 !== null) {
    current.next = l2;
  }
  return result.next;
};
