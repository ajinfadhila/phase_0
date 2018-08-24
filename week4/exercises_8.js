function urutkanAbjad(str) {
  // you can only write your code here!
  var tmp_awal = []
  var tmp_akhir = ""
  for (var i = 0; i < str.length; i++) {
       tmp_awal[i] =str[i] // dijadikan array perhuruf
  }
  // console.log(tmp_awal)
  tmp_awal.sort(function(value1,value2) {return value1>value2}); //di sort berdasarkan huruf terkecil
  for (var i = 0; i < tmp_awal.length; i++) {
    tmp_akhir = tmp_akhir + tmp_awal[i] // di jadikan string
  }
  return tmp_akhir

  // return str.toString().split('').sort().join('');
}

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'
