function groupAnimals(hewan) {
    var result=[];
    for (var i=0; i<hewan.length; i++){
        var hasil=[];
        var awal= hewan[i][0];

        var urutan=hewan[i];
        for(var j=hewan.length-1; j>i; j--){
          if(awal===hewan[j][0]){
            urutan=urutan+','+hewan[j]
            hewan.splice(j,1);
          }
        }

        hasil.push(urutan)
        result.push(hasil)
    }
      return result.sort()
    }

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
