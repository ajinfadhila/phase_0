
console.log("1. Menyusun Barisan Bintang"); 
var a = 5;

	for( var b = 1; b <= a; b++){
		console.log("*");
	}

console.log("2. Menyusun Barisan Bintang Dengan Nested Looping"); 
var a = 5;
var d ="";

for (var b=1 ; b<=a ; b++){
  for (var c=1 ; c<=a ; c++){
      d += "*";
  }
  console.log(d);
  d="";
}


console.log("3. Menyusun Barisan Tangga Bintang Dengan Nested Looping"); 
var a = 5;
var k = "";
	for( var b = 1; b <= a; b++){
		console.log(k+="*");
		
	}
