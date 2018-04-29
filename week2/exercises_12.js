function konversiMenit(Menit) {
  
	var jam = Math.floor(Menit/60);
	var menit = Menit % 60;
	hasil = menit < 10 ? '0' + menit : menit;
	return jam + ':' + hasil;
}


console.log(konversiMenit(63)); 
console.log(konversiMenit(124)); 
console.log(konversiMenit(53)); 
console.log(konversiMenit(88)); 
console.log(konversiMenit(120))
