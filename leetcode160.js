// 寫一支程式找出兩個連結陣列的第一個交集的節點。
// 注意：
// 如果兩個連結陣列沒有交集，回傳null
// 連結陣列必須保持他們的原始結構
// 可以假設不會出現迴圈連結陣列
// 程式只能在O(n)的時間跑完而且只能使用O(1)的空間

// Runtime: 120 ms, faster than 53.00% of JavaScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 49.8 MB, less than 62.99% of JavaScript online submissions for Intersection of Two Linked Lists.
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }
  let pointA = headA,
    pointB = headB;
  while (pointA !== pointB) {
    pointA = pointA === null ? headB : pointA.next;
    pointB = pointB === null ? headA : pointB.next;
  }
  return pointA;
};
// 用 pointA pointB 遍歷串列直到尾端
// 到尾端後接上對方串列，繼續遍歷
// 如果 pointA pointB 相等，則重疊, 回傳 val
// 如果不重疊，兩串列相接後長度相等，所以同時為 null 跳出 while

// Runtime: 164 ms, faster than 18.01% of JavaScript online submissions for Intersection of Two Linked Lists.
// Memory Usage: 50.2 MB, less than 44.05% of JavaScript online submissions for Intersection of Two Linked Lists.
var getIntersectionNode = function (headA, headB) {
  // 判斷headA, headB 哪個比較長
  var diff = getDiff(headA, headB);

  // headA比較長，跳過前面多出的部分
  if (diff > 0) {
    while (diff > 0) {
      headA = headA.next;
      diff--;
    }
  } else {
    // headB比較長，跳過前面多出的部分
    while (diff < 0) {
      headB = headB.next;
      diff++;
    }
  }

  // 毎個節點進行比較
  while (headA != null) {
    if (headA == headB) {
      return headA;
    }
    headA = headA.next;
    headB = headB.next;
  }

  return null;

  // 取得兩個linked list長度差異
  function getDiff(nodeA, nodeB) {
    var aLength = 0;
    var bLength = 0;

    while (nodeA != null) {
      aLength++;
      nodeA = nodeA.next;
    }
    while (nodeB != null) {
      bLength++;
      nodeB = nodeB.next;
    }

    return aLength - bLength;
  }
};
