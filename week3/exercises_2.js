



// Mengakses Nilai Dalam Array
//
// Tahukah kamu jika string adalah sebuah array? Kamu dapat mengakses karakter-karakter pada sebuah string layaknya mengakses nilai pada sebuah array. Untuk membuktikannya, kerjakanlah tantangan ini!
// Objectives
//
//     Mengetahui properties Pada Array
//     Mengerti Cara Mengakses Nilai Dalam Array
//
// Directions
//
// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
// Example
//
// //input "hello world!"
// //output
// "!dlrow olleh"
//
// Hints
//
// Untuk membantumu mengerjakan tantangan ini, gunakanlah properti length pada sebuah array yang akan memberikan panjang dari array-nya. Ingat, indeks sebuah array pada JavaScript dimulai dari 0. Untuk tugas ini, kamu wajib menggunakan looping dan dilarang menggunakan sintaks .reverse!


function balikString(kata){
	var huruf = kata;
	var tampung ="";
	for(var b = huruf.length -1; b >= 0; b--){
		tampung+= kata[b];
	}
	return tampung;
}
console.log(balikString("hello world!"))
