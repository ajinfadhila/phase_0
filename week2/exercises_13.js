function xo(str) {
  var X = check(str,'x');
  var Y = check(str,'o');
  return (X === Y);
  function check(kata,input) {
      var a = 0;
      for (var b = 0; b < kata.length; b++) {
          if (kata.charAt(b) === input) {
               a++;
          }
      }
      return a;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
console.log();

//true dari angka paling akhir jika x
// function x(str) {
//   var X = check_aja(str,'o');
//   var Y = check_aja(str,'x');
//   return (X === Y);
//
// function check_aja(k,i) {
//     var a = 0;
//     for (var b = k.length; b > 0; b--) {
//         if (k.charAt(b) === i) {
//              a--;
//         }
//     }
//     return a;
// }
// }
//
// // TEST CASES
// console.log(x('xoxoxoxoxox')); // true
// console.log(x('xoxoxoxo')); // false
// console.log(x('xoxoxoxox')); // true


// //  true dari belakang jika o
// function x(str) {
//   var X = check_aja(str,'o');
//   var Y = check_aja(str,'x');
//   return (X != Y);
//
// function check_aja(k,i) {
//     var a = 0;
//     for (var b = k.length; b > 0; b--) {
//         if (k.charAt(b) === i) {
//              a--;
//         }
//     }
//     return a;
// }
// }
//
// // TEST CASES
// console.log(x('xoxoxoxoxoxo')); // true
// console.log(x('xoxoxoxox')); // false
// console.log(x('xoxoxoxox')); // false
