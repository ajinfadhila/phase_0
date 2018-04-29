
function xo(str) {
  var sumX = checkSumChar(str,'x');
  var sum0 = checkSumChar(str,'o');
  return (sumX === sum0);
  function checkSumChar(kalimat,huruf) {
      var jumlah = 0;
      for (var i=0; i < kalimat.length; i++) {
          if (kalimat.charAt(i) === huruf) {
               jumlah++;
          }
      }
      return jumlah;
  }
}

console.log(xo('xo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true