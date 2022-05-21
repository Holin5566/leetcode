// 改一個排序過的連結陣列，刪除重複的節點。

// 範例：
// [1,1,2] -> return [1,2]
// [1,1,2,3,3] -> return [1,2,3]

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
let head = {
  val: 1,
  next: {
    val: 1,
    next: {
      val: 2,
      next: null,
    },
  },
};

var deleteDuplicates = function (head) {
  const uni = (current) => {
    if (current === null) {
      return head;
    }
    if (current.next && current.val === current.next.val) {
      current.next = current.next.next;
      return uni(current);
    } else {
      return uni(current.next);
    }
  };
  uni(head);
  return head;
};

console.log(deleteDuplicates(head));
