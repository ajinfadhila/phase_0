function balikkata(a){

	var tampung ="";
	for(var b = a.length -1; b >= 0; b--){
		tampung+= a[b];
	}
	return tampung;
}

	console.log(balikkata('Hello World and Coders')); // sredoC dna dlroW olleH
	console.log(balikkata('John Doe')); // eoD nhoJ
	console.log(balikkata('I am a bookworm')); // mrowkoob a ma I
	console.log(balikkata('Coding is my hobby')); // ybboh ym si gnidoC
	console.log(balikkata('Super')); // repuS

	


// perbandingan witout function
// var a ='super';
// var tampung ="";
// for(var b = a.length -1; b >= 0; b--){
// 	tampung+= a.charAt(b);
// }
// 	console.log(tampung);
