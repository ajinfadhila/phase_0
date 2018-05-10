// function balikkata(nama){
//
//  var tampung ="";
//  for(var b = nama.length -1; b >= 0; b--){
// 	 tampung = tampung + nama[b];
//  }
//  return tampung;
// }
//
// function palindrome(nama){
//
// 	if(nama[0] === nama[nama.length -1] && nama === balikkata(nama)){
// 		return true;
// 	}else{
// 		return false;
// 	}
//
// }

function palindrome(nama){

 for(var b = nama.length -1; b >= 0; b--){
   if(nama[0] === nama[b]){
 		return true;
 	}else{
 		return false;
 	}
 }

}

console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
