function groupAnimals(studentsArr) {
    var result=[];
    for (var i=0; i<studentsArr.length; i++){
        var hasil=[];
        var awal= studentsArr[i][0];

        var urutan=studentsArr[i];
        for(var j=studentsArr.length-1; j>i; j--){
          if(awal===studentsArr[j][0]){
            urutan=urutan+','+studentsArr[j]
            studentsArr.splice(j,1);
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
