function bandingkanAngka(angka1,angka2){

var hasil =""
	if(angka1 == angka2){
		 hasil += -1;
	}else if(angka1 < angka2)
	{
		// hasil += angka1 +" lebih kecil "+ angka2;
		return true;
	}else if(angka1 > angka2)
	{
		// hasil += angka1 +" lebih kecil "+ angka2;
		return false;
	}
	return hasil;
}


console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false
