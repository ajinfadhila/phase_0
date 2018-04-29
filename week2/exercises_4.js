var tgl = 31;
var bln	= "";
var thn = 2000;
 if (tgl >= 1 && tgl <= 31) {
 	if (bln > 0 && bln <= 12) {

 		switch(bln){
 			case 1: bln 	= "January";
 			case 2: bln 	= "February";
 			case 3: bln 	= "Maret";
 			case 4: bln 	= "April";
 			case 5: bln 	= "Mei";
 			case 6: bln 	= "Juni";
 			case 7: bln 	= "Juli";
 			case 8: bln 	= "Agustus";
 			case 9: bln 	= "September";
 			case 10: bln 	= "Oktober";
 			case 11: bln 	= "November";
 			case 12: bln 	= "Desember";
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


