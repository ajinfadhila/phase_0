
console.log("3. Angka Ganjil Genap");
console.log();
console.log("ganjil ganjil");

var a = 100
  for (var b = 1; b <= a +1; b ++){
    if(b % 2 != 0){
      console.log ( b + ' - ganjil')
    }
  }
console.log();
console.log("ganjil genap");

  var a = 100
    for (var b = 1; b <= a +1; b ++){
      if(b % 2 == 0){
        console.log ( b + ' - genap')
      }
    }

console.log("counter +3");
var a = 100
  for (var b = 1; b <= a; b+= 2){
   if (b % 3 == 0){
     console.log (b + ' counter ' + 3)
   }else{
     console.log(b +" --");
   }

  }

console.log("counter +6");
var a = 100;
for (var b = 1; b <= a; b+= 5){

   if (b % 6 == 0){

   console.log (b + ' counter ' + 6)

 } else {

   console.log(b + " --");
 }

}

console.log("counter +10");

for (var i = 1; i <=100; i+= 9){

 if (i % 10 === 0){

   console.log (i + ' counter ' + 10)

 } else {

   console.log(i + " --")
 }

}
