const makeTree = (arr, cur = 0) => {
  const middle = Math.ceil(arr.length / 2);
  if (cur > middle) return arr[cur] ? new TreeNode(arr[cur]) : null;
  const left = makeTree(arr, cur * 2 + 1);
  const right = makeTree(arr, cur * 2 + 2);
  return new TreeNode(arr[cur], left, right);
};

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
module.exports = { TreeNode, makeTree };
