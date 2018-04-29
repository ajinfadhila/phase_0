console.log("Tugas 1");
function shoutOut(){
	output = "Halo Function!";
	return output;
}
console.log(shoutOut());
console.log();
console.log("Tugas 2");
	function calculateMultiply(hasil){

		hasil = num1*num2;
		return hasil;
	}

	var num1 = 5;
	var num2 = 6;

	var hasilperkalian = calculateMultiply(num1,num2);
	console.log(hasilperkalian);

console.log();
console.log("Tugas 3");

function processSentence(hasil){
	hasil = "Nama saya "+name +" umur saya "+ age +" tahun, alamat saya di "+ address + ", dan saya punya hobby "+ hobby;
	return hasil;
}
var name = "Agus";
var age = 30;
var address = "Jln.Malioboro, Yogyakarta";
var hobby = "gaming!";

var fullSetence =processSentence(name,age,address,hobby);
console.log(fullSetence);