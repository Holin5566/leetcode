// 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）：
// 实现 MyQueue 类：
// void push(int x) 将元素 x 推到队列的末尾
// int pop() 从队列的开头移除并返回元素
// int peek() 返回队列开头的元素
// boolean empty() 如果队列为空，返回 true ；否则，返回 false
// 说明：
// 你 只能 使用标准的栈操作 —— 也就是只有 push to top, peek/pop from top, size, 和 is empty 操作是合法的。
// 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。

// Runtime: 87 ms, faster than 31.99% of JavaScript online submissions for Implement Queue using Stacks.
// Memory Usage: 42 MB, less than 61.68% of JavaScript online submissions for Implement Queue using Stacks.

var MyQueue = function () {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  return this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.stack.shift();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack.at(0);
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack.length < 1;
};

const que = new MyQueue();
que.push("a");
que.push("hi");
que.pop();
console.log(que.empty());
