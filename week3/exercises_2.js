


// function balikkata(kata){
// 	var huruf = kata;
// 	var tampung ="";
// 	for(var b = huruf.length -1; b >= 0; b--){
// 		tampung+= kata[b];
// 	}
// 	return tampung;
// }



function Balikkata(kata){
	let [balik] = kata;
	let tmp  = [];
	for(let a = balik.length -1; a >= 0; a--){
		tmp = tmp + balik[a]

	}

	return tmp;
}

	console.log(Balikkata(['Hello World!'])); // "!dlrow olleh"

// 	function BalikAngka(angka){
// 		let balik = angka
// 		let tmp = "";
// 		for(let a =0; a < angka.length; a++ ){
// 			if (a === angka.length-1) {
// 				tmp =tmp + angka[a]
// 			}else {
// 				tmp = tmp +angka[a] +","
// 			}
// 		}
// 		return tmp
// 	}
// 
// console.log(BalikAngka([1,2,3,4,5]));

