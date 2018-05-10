
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

// var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];



var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(){
  var a = input;
  input.splice(1,1,"Roman Alamsyah Elsharawy");
  input.splice(2,1,"Provinsi Bandar Lampung");
  input.splice(4,0,"Pria");
  input.splice(5,1,"SMA Internasional Metro");
  return a;
  function test_case(input){
    let hasil = input[3].split("/");
  	let bln = Number(hasil[1]);
  	// let bln = Number(pecah[1]);

    return bln;
  }
  // console.log(test_case(input));
  console.log();

  function bulan(blan){
    var bln = test_case(input);
    if (bln > 0 && bln <= 12) {

   		switch(bln){
   			case 1: bln 	= "January"; break;
   			case 2: bln 	= "February"; break;
   			case 3: bln 	= "Maret";break;
   			case 4: bln 	= "April";break;
   			case 5: bln 	= "Mei";break;
   			case 6: bln 	= "Juni";break;
   			case 7: bln 	= "Juli";break;
   			case 8: bln 	= "Agustus";break;
   			case 9: bln 	= "September";break;
   			case 10: bln 	= "Oktober";break;
   			case 11: bln 	= "November";break;
   			case 12: bln 	= "Desember";break;
   		}
    }
    return bln;
  }
  console.log(bulan(5));
}
console.log(dataHandling2(input));


// function test_case(input){
//   let hasil = input[3].split("/");
// 	let bln = Number(hasil[1]);
// 	// let bln = Number(pecah[1]);
//
//   return bln;
// }
// // console.log(test_case(input));
// console.log();
//
// function bulan(blan){
//   var bln = test_case(input);
//   if (bln > 0 && bln <= 12) {
//
//  		switch(bln){
//  			case 1: bln 	= "January"; break;
//  			case 2: bln 	= "February"; break;
//  			case 3: bln 	= "Maret";break;
//  			case 4: bln 	= "April";break;
//  			case 5: bln 	= "Mei";break;
//  			case 6: bln 	= "Juni";break;
//  			case 7: bln 	= "Juli";break;
//  			case 8: bln 	= "Agustus";break;
//  			case 9: bln 	= "September";break;
//  			case 10: bln 	= "Oktober";break;
//  			case 11: bln 	= "November";break;
//  			case 12: bln 	= "Desember";break;
//  		}
//   }
//   return bln;
// }
// console.log(bulan(5));
console.log();

function insertionSort() {


  let hasil =input[3].split("/");
  let coba = [Number(hasil[0]),(hasil[1]),(hasil[2])];
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


//
// function tgl(){
//   let hasil = input[3].split("/");
//
//   hasil.sort(function(value1, value2) {
//
//      return value1[1] < value2[2]
//    });
//   return hasil;
// }
// console.log(tgl());
console.log();

function obj(input){
  let nama = input[1][0];
  let hasil = input[3].split("/");
  let butuh = hasil.join('-');

	// let bln = Number(pecah[1]);

  return butuh;
}
console.log(obj(input));
console.log();


var irisan1 = input.slice(1,2);
var irisan2 = irisan1[0];
var irisan3 = irisan2.slice(0,15);
console.log(irisan3);


var arr = [1, 2, 15];
arr.sort(function(value1, value2) { return value1 < value2 });
console.log(arr); // 15, 2, 1
