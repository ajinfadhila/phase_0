function bandingkanAngka(angka1,angka2){

var hasil =""
	if(angka1 == angka2){
		 hasil += -1;
	}else if(angka1 < angka2)
	{
		hasil += angka1 +" lebih kecil "+ angka2;
		return hasil+" "+ true;
	}else if(angka1 > angka2)
	{
		hasil += angka1 +" lebih kecil "+ angka2;
		return hasil +" "+false;
	}
	return hasil;
}


console.log(bandingkanAngka(5,8));
console.log(bandingkanAngka(5,3));
console.log(bandingkanAngka(4,4));
console.log(bandingkanAngka(3,3));
console.log(bandingkanAngka(17,2));
