function tentukanDeretGeometri(arr) {
   for (var a = 0; a < arr.length-1; a++) {
       var rasio = arr[a + 1] / arr[a]
   }
   for (var b = 0; b < arr.length - 1; b++) {
       var c = b + 1
       if (rasio === arr[c] / arr[b]) {
           return true;
       }
       else {
           return false;
       }
   }
}console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false
