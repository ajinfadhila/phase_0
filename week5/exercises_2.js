// Logic Challenge - Naik Angkot
// Problem
//
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.
//
// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.
//
// Contoh: gifts: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
// Code

function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var harga = 2000
  var arr = []
    for (var j = 0; j < arrPenumpang.length; j++) {
     var obj = {}
     obj.Penumpang = arrPenumpang[j][0]
     obj.naikDari = arrPenumpang[j][1]
     obj.tujuan = arrPenumpang[j][2]
     obj.bayar = harga *(rute.indexOf(obj.tujuan)-rute.indexOf(obj.naikDari))
     arr.push(obj)
  }
  console.log(arr)

}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

//console.log(naikAngkot([])); //[]
