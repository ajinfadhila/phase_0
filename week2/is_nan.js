var res = "";
    res = res + isNaN("abcdefgh") + ": huruf \n";
    res = res + ! isNaN(123) + ": angka";

    console.log(res);
    console.log();

var row = 5;
for( var i = row; i >= 1; i--)
{
var tampung = '';
  for( var j = 1; j <= i; j++){
    tampung += j
  }
  console.log(tampung);

}
console.log();

//  setengah piramid 5 mendatar ke bawah
var a = 5;
var t="";

for (var b = 1; b <= a; b++) {
  console.log(t += b);
}
console.log()

console.log('setengah piramid 5 mendatar ke bawah')
var row = 5;
for( var i = 1; i <= row; i++)
{
  var num = '';
  for( var j = row; j >= i; j--){
    num += j
  }
  console.log(num);
}
console.log();

var row = 5;
for( var i = row; i >= 1; i--)
{
  var num = '';
  for( var j = row; j >= i; j--){
    num += j
  }
  console.log(num);
}
console.log();

// setengah piramid terbalik 12345 ke samping
console.log("setengah piramid terbalik");
var a = 5;
var keluar = "";

for(var b = 1; b <= a; b++){
  for(var c = b; c <= a; c++){
    keluar+= c;
  }
  console.log(keluar);
  keluar= "";
}
console.log();

var a = 5;
var keluar = "";

for(var b = a; b >= 1; b--){
  for(var c = b; c <= a; c++){
    keluar+= c;
  }
  console.log(keluar);
  keluar= "";
}
console.log();

console.log("setengah piramid terbalik 1 dari belakang");
var a = 1;
var keluar = "";

for(var b = 5; b >= a; b--){
  for(var c = b; c >= a; c--){
    keluar+= c;
  }
  console.log(keluar);
  keluar= "";
}
console.log();

var row = 5;
var num = '';
for( var i = 1; i <= row; i++)
{
  for( var j = row; j >= 1; j--){
    num += j
  }
  console.log(num);

}
console.log();


var a = 5;

for(var b = a; b >= 1; b--){
  var keluar = "";
  for(var c = a; c >= b; c--){
    if (b % 2 !== 0) {
      keluar += 'x'
    } else {
      keluar += 'o'
    }
  }
  console.log(keluar);
}
console.log();


1
21
321
4321
54321
