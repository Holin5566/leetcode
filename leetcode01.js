// 給定一個整數數組和一個目標值，找出數組中和為目標值的兩個數。
// 你可以假設每個輸入只對應一種答案，且同樣的元素不能被重複利用。

let nums = [3, 3];

// Runtime: 161 ms, faster than 27.38% of JavaScript online submissions for Two Sum.
// Memory Usage: 42.2 MB, less than 84.65% of JavaScript online submissions for Two Sum.
function solution(nums, target) {
  let size = nums.length;
  for (let i = 0; i < size; i++) {
    let minus = target - nums[i];
    let minusIndex = nums.indexOf(minus);
    if (minusIndex != -1 && minusIndex != i) {
      return [i, minusIndex];
    }
  }
}
console.log(solution(nums, 6));
