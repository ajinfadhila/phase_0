function checkAB(num) {
    // you can only write your code here!
    var arr = num.split('') // merubah string ke array menjadi array perhuruf
    var arr2=[];
    for(var i=0;i<arr.length;i++){ //mebuat arr menjadi string
        if(arr[i]!==' '){ //jika arr[i] tidak sama dengan spasi
            arr2.push(arr[i]); //push array perhuruf
        }
    }
    for(var j=0; j<arr2.length;j++){ // arr2 menjadi string
        if(arr2[j]==='a'){ // jika arr2[j] === 'a' true
             for(var b=j;b<=(j+3);b++){ // looping j jarak 3 huruf
               //console.log(j+3)
                 if(arr2[b]==='b'){ // jika arr2[b] === 'b' true
                     return true
                 }
             }
       }
     }
    return false;
  }


// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false
