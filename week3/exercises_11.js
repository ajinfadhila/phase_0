function tentukanDeretAritmatika(arr){
  var test = arr;
  var selisih_1 = test[1] - test[0]
  for( let a = 1; a < test.length; a++){
    if(test[a] !== test[a-1]+selisih_1){
        return false
    }
  }
    return true
}

console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
