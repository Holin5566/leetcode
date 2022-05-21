// 给定一个链表的头节点  head ，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
// 不允许修改 链表

let circle = {
  val: 1,
  next: {
    val: 2,
    next: null,
  },
};

circle.next = circle;
let head = {
  val: 5,
  next: null,
};
head.next = circle;

var detectCycle = function (head) {
  if (!head) return null;
  let slow = head,
    fast = head,
    loop = false;
  while (fast.next != null && fast.next.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      loop = true;
      fast = head;
      break;
    }
  }
  if (loop) {
    while (fast != slow) {
      fast = fast.next;
      slow = slow.next;
    }
    return slow;
  }
  return null;
};

// Hint:
// loop = a____b__c
//             |__|
// a 為 起點
// b 為 loop 進入點
// c 為 slow & fast 相遇點

// A = a~b
// B = b~c
// C = c~b

// slow's path => (A + B)
// fast's path => A + B + C + B
//             => (A + 2B + C)
// fast = slow*2 => (A + 2B + C) = (A + B)*2
//               => A + 2B + C = 2A + 2B
//               => 得證 C = A
