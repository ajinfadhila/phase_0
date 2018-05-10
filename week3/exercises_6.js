// function angkaPalindrome(num) {
//   var jalan = true
//   while (jalan) {
//     num++;
//     var str = String(num);
//     var strReverse = str.split('').reverse().join('');
//     console.log('palindrome?', num)
//     if (str === strReverse) {
//       jalan = false
//       return Number(str);
//     } else {
//       jalan = true
//       console.log('angka ini belum palindrome', num)
//     }
//   }
// }

// TEST CASES
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
//console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001

// function palindrom(num) {
//   var jalan = true
//   while (jalan) {
//     num++;
//     //console.log( num +' belum palindrom')
//     var str = String(num);
//     //console.log(str+ "jmlh digit")
//     var strReverse = ''
//
//     for (var i = str.length-1; i >= 0; i--) {
//       strReverse = strReverse + str[i]
//     }
//       console.log('palindrome?', num)
//     if (str === strReverse) {
//       jalan = false
//       console.log(num, "angka ini sudah palindrom")
//       return Number(str);
//     } else {
//       jalan = true
//       console.log('angka ini belum palindrome', num)
//     }
//   }
// }
// // TEST CASES
// // console.log(palindrom(8)); // 9
// // console.log(palindrom(10)); // 11
// //console.log(palindrom(117)); // 121
// console.log(palindrom(175)); // 181
// // console.log(palindrom(1000)); // 1001

function palindrom(num){
 var cek = true
   while(cek){
     num++
     console.log(num, "start");
     let tmp = String(num);
     let kosong =""
       for(let a = tmp.length -1; a >= 0; a--){
         kosong = kosong + tmp[a];
         console.log(kosong, "mencoba cek");
       }
       if(tmp === kosong){
         cek = false;
         console.log(cek +" hasil dari pencarian");
         return Number(tmp);
       }else{
         cek = true
         console.log(cek, "mencari kebenaran")
       }
   }
}
console.log(palindrom(119));
