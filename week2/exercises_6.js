console.log("LOOPING PERTAMA");
var a = 1;
var b = 20;
       while( a <= b ){
   		if(a% 2 == 0)
   		{
   			console.log(a+" - I love coding" );
   		} 
   		a++;
   	}
console.log();

console.log("LOOPING KEDUA");
var c = 1;
var d = 20;
       while( d >= c ){
   		if(c% 2 == 0)
   		{
   			console.log(c+" - I will become fullstack developer" );
   		} 
   		c++;
   	}
console.log();
// 2. Melakukan Looping Menggunakan For
console.log("2. Melakukan Looping Menggunakan For");
console.log("LOOPING PERTAMA");

var a = 20;
for(var b = 1; b <= a; b++){
	console.log(b+" - I love coding")
}
console.log();

console.log("LOOPING KEDUA");

var a = 20;
for(var b = 1; b <= a; a--){
	console.log(a+" - I will become fullstack developer")
}

console.log();
console.log("3. Angka Ganjil Genap");
console.log("ganjil genap");

var a = 100
  for (var b = 1; b <= a ; b ++){ 
    if(b % 2 == 0){
      console.log ( b + ' - genap') 
    }else if (b % 2 != 0 ){
      console.log (b + ' - ganjil')
    }  
  }

console.log("counter +3");
var a = 100
  for (var b = 1; b <= a; b+= 2){
   if (b % 3 == 0){
     console.log (b + ' counter ' + 3) 
   }else{   
     console.log(b);
   }
 
  }

console.log("counter +6");
var a = 100;
for (var b = 1; b <= a; b+= 5){
  
   if (b % 6 == 0){
   
   console.log (b + ' counter ' + 6)
   
 } else {
   
   console.log(b);
 }
 
}

console.log("counter +10");

for (var i = 1; i <=100; i+= 9){
  
 if (i % 10 === 0){
   
   console.log (i + ' counter ' + 10)
   
 } else {
   
   console.log(i)
 }
 
}
