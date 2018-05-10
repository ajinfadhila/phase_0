// function hitungJumlahKata(content){
//
//
// 	var numberofwords = 1;
//
// 	for(let i = 0; i <= content.length; i++){
// 		if(content[i]== " "){
// 			numberofwords++;
//
// 		}
//
//
// 	}
// 	return numberofwords;
// }
// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5

function hitungJumlahKata(tmp){

	var tampung = 1; //jumlah spasi akan di tambah 1
	for(var a =1; a <= tmp.length -1; a++){

		if(tmp[a] === " "){
			tampung++
		}

	}
	return tampung;
}

console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
