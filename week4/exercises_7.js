function digitPerkalianMinimum(angka) {
  var hasil = [];
  for(var i = 0; i <= angka; i++){
    for (var j = 0; j <= angka; j++) {
    if ((i * j)=== angka ) {
      var gabung = (String(i)+String(j));
      hasil.push(gabung);
      }
    }
  }
  var hasil_sementara = hasil[0].length;
  for (var k = 0; k < hasil.length; k++) {
    if(hasil[k].length < hasil_sementara){
      hasil_sementara = hasil[k].length;
    }
  }
  return hasil_sementara;
}

// TEST CASES
 console.log(digitPerkalianMinimum(6)); // 2
 console.log(digitPerkalianMinimum(90)); // 3
 console.log(digitPerkalianMinimum(20)); // 2
 console.log(digitPerkalianMinimum(179)); // 4
 console.log(digitPerkalianMinimum(1)); // 2
