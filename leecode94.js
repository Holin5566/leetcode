// 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
// 中序遍歷 https://ithelp.ithome.com.tw/articles/10205571
const helper = require("./helper");
const { makeTree, TreeNode } = helper;

const list = [1, 2, 3, 4, 5, null, 6, 7, 8, null, null, null, null, 9, 10];
const tree = makeTree(list);

// NOTE 遞迴解
// Runtime: 86 ms, faster than 36.26% of JavaScript online submissions for Binary Tree Inorder Traversal.
// Memory Usage: 42.7 MB, less than 6.21% of JavaScript online submissions for Binary Tree Inorder Traversal.
var inorderTraversal = function (root) {
  const result = [];
  function sort(node, result) {
    const { val, left, right } = node;
    left && sort(left, result);
    val !== null && result.push(val);
    right && sort(right, result);
  }
  root && sort(root, result);
  return result;
};

// NOTE Morris 中序遍历
var inorderTraversalMorris = function (root) {};
