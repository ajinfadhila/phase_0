// var coba = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

// function dataHandling2(aja){


// 	 coba.splice(1,1,"Roman Alamsyah Elsharawy");
// 	 coba.splice(2,1,"Provinsi Bandar Lampung");
// 	 coba.splice(4,0,"Pria");
// 	 coba.splice(5,1,"SMA Internasional Metro");

// 	return coba;
// }
// console.log(dataHandling2());

// console.log();

// var gifts = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];



var gifts = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(){
  var a = gifts;
  gifts.splice(1,1,"Roman Alamsyah Elsharawy");
  gifts.splice(2,1,"Provinsi Bandar Lampung");
  gifts.splice(4,0,"Pria");
  gifts.splice(5,1,"SMA Internasional Metro");
  return a;
  function test_case(gifts){
    let hasil = gifts[3].split("/");
  	let bln = Number(hasil[1]);
  	// let bln = Number(pecah[1]);

    return bln;
  }
  // console.log(test_case(gifts));
  console.log();

}
console.log(dataHandling2(gifts));
function bulan(blan){
  // var blan = test_case(gifts);
  if (blan > 0 && blan <= 12) {

    switch(blan){
      case 1: blan 	= "January"; break;
      case 2: blan 	= "February"; break;
      case 3: blan 	= "Maret";break;
      case 4: blan 	= "April";break;
      case 5: blan 	= "Mei";break;
      case 6: blan 	= "Juni";break;
      case 7: blan 	= "Juli";break;
      case 8: blan 	= "Agustus";break;
      case 9: blan 	= "September";break;
      case 10: blan 	= "Oktober";break;
      case 11: blan 	= "November";break;
      case 12: blan 	= "Desember";break;
    }
  }
  // console.log(blan)
  return blan;
}
console.log(bulan(5));
console.log();

function insertionSort() {


  let hasil =gifts[3].split("/");
  let coba = [Number(hasil[0]),(hasil[1]),Number(hasil[2])];
  // console.log(coba)
  var temp;

  for(var i = 0; i < coba.length; i++){
     var min = i;

     for(var j = i + 1; j < coba.length; j++) {
       if(coba[j] > coba[min]) {
         min = j;
       }
     }
     temp = String(coba[i]);
     coba[i] = String(coba[min]);
     coba[min] = temp;
 }


  return coba;
}
console.log(insertionSort());


console.log();

function obj(gifts){
  let nama = gifts[1][0];
  let hasil = gifts[3].split("/");
  let butuh = hasil.join('-');

	// let bln = Number(pecah[1]);

  return butuh;
}
console.log(obj(gifts));
console.log();


var irisan1 = gifts.slice(1,2);
var irisan2 = irisan1[0];
var irisan3 = irisan2.slice(0,15);
console.log(irisan3);
