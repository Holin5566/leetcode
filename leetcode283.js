// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
//
// 示例 1:
// 输入: nums = [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 示例 2:
// 输入: nums = [0]
// 输出: [0]

// Runtime: 101 ms, faster than 75.83% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 46.5 MB, less than 73.16% of JavaScript online submissions for Move Zeroes.
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;
  for (i; i < nums.length; i++) {
    if (nums[i]) {
      nums[j] = nums[i];
      if (i != j) {
        nums[i] = 0;
      }
      j++;
    }
  }
  return nums;
};
let nums = [0, 0, 1];

console.log(moveZeroes(nums));
