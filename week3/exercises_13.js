function targetTerdekat(arr) {
	var result = 0
	var stepCounter = 0
	var tempCharacter
	for(var i=0;i<arr.length;i++){
		if(arr[i]==='o' || arr[i]==='x'){
			if(tempCharacter===undefined){
				tempCharacter = arr[i]
			} else if(arr[i]===tempCharacter) {
				stepCounter = 0
			} else {
				stepCounter++ 
				if(result<stepCounter){
					result=stepCounter
				}
				tempCharacter=arr[i]
				stepCounter = 0
			}
		} else if(tempCharacter!==undefined){
			stepCounter++
		}
	}
	return result
}

console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
