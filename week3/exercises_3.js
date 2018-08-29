


// const input = [	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//                 	["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//                 	["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//                 	["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//             ];

// input.forEach(function(element) {
//     console.log("Nomor ID : "+element[0]+"\n"+"Nama Lengkap : "+element[1]+"\n"+"TTL : "+element[2]+"\n"+"Hobby : "+element[3]);
// });

// var input = [	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//                 	["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//                 	["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//                 	["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//             ];

	var input = [	["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                	["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                	["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                	["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ];
function dataHandling(b){

  var strings = ''
	for(var a = 0 ; a <= b.length -1 ; a++){

		strings = strings + "Nomor ID : "+b[a][0]+"\n"+'Nama Lengkap : ' + b[a][1]+"\n"+'TTL : ' + b[a][2]+" "+b[a][3]+"\n"+'Hobby : ' + b[a][4] + '\n\n';

	}
  return strings
}

console.log(dataHandling(input));




 // function dataHandling(a){
 // 	var input = [
 //                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
 //                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
 //                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
 //                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
 //            ]

 // 		tmp = "Nomor ID : "+input[0][0]+"\n"+"Nama Lengkap : "+input[0][1]+"\n"+"TTL : "+input[0][2]+"\n"+"Hobby : "+input[0][3];
 // 		tmp1 = "Nomor ID : "+input[1][0]+"\n"+"Nama Lengkap : "+input[1][1]+"\n"+"TTL : "+input[1][2]+"\n"+"Hobby : "+input[1][3];
 // 		tmp2 = "Nomor ID : "+input[2][0]+"\n"+"Nama Lengkap : "+input[2][1]+"\n"+"TTL : "+input[2][2]+"\n"+"Hobby : "+input[2][3];
 // 		tmp3 = "Nomor ID : "+input[3][0]+"\n"+"Nama Lengkap : "+input[3][1]+"\n"+"TTL : "+input[3][2]+"\n"+"Hobby : "+input[3][3];

 // 		var a = tmp+"\n"+"\n"+tmp1+"\n"+"\n"+tmp2+"\n"+"\n"+tmp3;
 //     	return a;
 // }
 // console.log(dataHandling());
