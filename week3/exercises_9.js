// function cariMean(arr) {
//
//     let total = 0, i;
//     for (i = 0; i < arr.length; i ++ ) {
//         total += arr[i];
//
//     }
//     let hasil = total / arr.length;
//     //return Math.round(hasil);
//      return Number(hasil.toFixed());
// }
// console.log(cariMean([1, 2, 3, 4, 5])); // 3
// console.log(cariMean([3, 5, 7, 5, 3])); // 5
// console.log(cariMean([6, 5, 4, 7, 3])); // 5
// console.log(cariMean([1, 3, 3])); // 2
// console.log(cariMean([7, 7, 7, 7, 7])); // 7
//
// function kali(arr) {

    let total = 0, i;
    for (i = 0; i < arr.length; i ++ ) {
        total += arr[i];
    }
    let hasil = total * arr.length;
    //return Math.round(hasil);
     return Number(hasil.toFixed());
}
console.log(kali([1, 2, 3, 4, 5])); // 3
console.log(kali([3, 5, 7, 5, 3])); // 5
console.log(kali([6, 5, 4, 7, 3])); // 5
console.log(kali([1, 3, 3])); // 2
console.log(kali([7, 7, 7, 7, 7])); // 7
