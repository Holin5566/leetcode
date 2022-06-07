/**
 * @param {string} s
 * @return {string}
 */

// 拆解括號
// 字串乘數量

var decodeString = function (s) {
  let num = 0;
  let result = "";
  const numStack = [];
  const strStack = [];
  for (const char of s) {
    if (!isNaN(char)) {
      num = num * 10 + Number(char);
    } else if (char === "[") {
      strStack.push(result);
      result = "";
      numStack.push(num);
      num = 0;
    } else if (char === "]") {
      let times = numStack.pop();
      result = strStack.pop() + result.repeat(times);
    } else {
      result += char;
    }
  }
  console.log(result);
  return result;
};

const test = "3[ab2[c]]4[d]";
decodeString(test);
