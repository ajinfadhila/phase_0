// //no fuction
	var nama = "bebas";
	var peran = "ksatria";

	if(nama  === "")
      {
          console.log("Nama wajin di isi");
  }else{
		if(nama !=="" && peran ==="ksatria"){
			console.log("Selamat datang di Dunia Proxytia,"+ nama);
			console.log("Halo "+peran+" "+nama+", kamu dapat menyerang dengan senjatamu!");
		}else if(nama !=="" && peran =="tabib"){
			console.log("Selamat datang di Dunia Proxytia,"+ nama);
			console.log("Halo "+peran+" "+nama+", kamu akan membantu temanmu yang terluka.");
		}else if(nama !=="" && peran == "penyihir"){
			console.log("Selamat datang di Dunia Proxytia,"+ nama);
			console.log("Halo "+peran+" "+nama+", ciptakan keajaiban yang membantu kemenanganmu!");
		}else{
      	console.log("Silahkan Isi peran");
    }
	}


 // with function
// function test(nama,peran){
//  let hasil = ""
//       if(nama  == "")
//       {
//             hasil = "Nama wajin di isi";
//       }else{
//                   if(nama == "ajin" && peran == "ksatria"){
//                      hasil = "Selamat datang di Dunia Proxytia,"+ nama;
//                      hasil = "Halo "+peran+" "+nama+", kamu dapat menyerang dengan senjatamu!";
//                   }else if(nama == "bryan" && peran == "tabib"){
//                      hasil = "Selamat datang di Dunia Proxytia,"+ nama;
//                      hasil = "Halo "+peran+" "+nama+", kamu akan membantu temanmu yang terluka.";
//                   }else if(nama == "dita" && peran == "penyihir"){
//                      hasil = "Selamat datang di Dunia Proxytia,"+nama;
//                      hasil = "Halo "+peran+" "+nama+", ciptakan keajaiban yang membantu kemenanganmu!";
//                   }else{
//                         hasil = "Silahkan Isi peran";
//             }
//       }
//       return hasil;
//       }
// console.log(test('ajin','ksatria'));
