

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