function hitungHuruf(kata) {
  // you can only write your code here!
  var kataSplit = kata.split(' ');
  // console.log(kataSplit); //kalimat menjadi perkata
  var banding = 0;
   var simpan = '';

  for (var i = 0; i < kataSplit.length; i++) {
     var kata_akhir = kataSplit[i]
    var count =0;
  var  perhuruf_array = kataSplit[i].split("")
    // console.log(perhuruf_array)
    for (var j = 0; j < perhuruf_array.length; j++) {
       //console.log(perhuruf_array)
      for (var k = 0; k < perhuruf_array.length; k++) {
        if (perhuruf_array[k] === perhuruf_array[j] && j !== k) {
          count++ // hasil ketemu dan membentuk index baru
        }
      }
    }
    if (count > banding) {
      banding = count;
      simpan = kata_akhir //kataSplit[i]
    }else{
      -1
    }
  }
  return simpan
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau
