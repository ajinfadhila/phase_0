var tgl = 31;
var bln	= 1;
var thn = 2000;
 if (tgl >= 1 && tgl <= 31) {
 	if (bln > 0 && bln <= 12) {

 		switch(bln){
 			case 1: bln 	= "January"; break;
 			case 2: bln 	= "February"; break;
 			case 3: bln 	= "Maret";break;
 			case 4: bln 	= "April";break;
 			case 5: bln 	= "Mei";break;
 			case 6: bln 	= "Juni";break;
 			case 7: bln 	= "Juli";break;
 			case 8: bln 	= "Agustus";break;
 			case 9: bln 	= "September";break;
 			case 10: bln 	= "Oktober";break;
 			case 11: bln 	= "November";break;
 			case 12: bln 	= "Desember";break;
 		}
 		if(thn >= 1900 && thn <= 2200){
 			console.log(tgl +" "+bln +" "+ thn);
 		}else{
 			console.log("salah tahun")
 		}
 	}else{
 		console.log('bulan salah');
 	}
 }else{
 	console.log("salah tanggal");
 }
