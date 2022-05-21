// 假設你正在爬樓梯，需n階才能到達樓頂，
// 每次一次可以爬一階或兩階。有多少種方法可以到達樓頂?

// hint : n-1階的爬法 + n-2階的爬法 = n 有幾個爬法
// f(n)=f(n-1)+f(n-2);

function howMany(n) {
  if (n <= 2) {
    if (n == 2) return 2;
    if (n == 1) return 1;
  } else {
    //拆解
    return howMany(n - 1) + howMany(n - 2);
  }
}
// 網路解 //ver.for()
// var climbStairs = function (n) {
//   if (n <= 1) {
//     return 1;
//   }

//   var prev = 1;
//   var cur = 1;
//   // 費氏數列 f(n) = f(n-1) + f(n-2)
//   for (var i = 2; i <= n; i++) {
//     var temp = cur;
//     cur = cur + prev;
//     prev = temp;
//   }
//   return cur;
// };
