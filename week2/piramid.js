
    var a = 5;
    var output ="";
    
    for (var i = 1; i <= a; i++){
        for (var j = 1; j <= i; j++){
            output+= j; 
        }
        console.log(output);
        output = ""; 
    }
    console.log();

    // setengah piramid terbalik
    console.log("setengah piramid terbalik");
    var a = 5;
    var keluar = "";

    for(var b = 1; b <= a; b++){
    	for(var c = a; c >= b; c--){
    		keluar+= c;
    	}
    	console.log(keluar);
    	keluar= "";
    }
    console.log();

// segitiga
console.log("segitiga berdiri");
    var a = 5;
    var output="";
    for (var i = 1; i <= a; i++) {
        for (var j = i; j <= a; j++) {
            output+=  " ";
        }for(var k=1;k<=i;k++){
        	output+=  "*";
        }for(var l = 1; l<= i -1;l++){
        	output+=  "*";
        }
        console.log(output);
        output="";
    }

 // segitiga kebalik
 console.log("segitiga terbalik");
    var a = 5;
    var output="";
    for (var i = 1; i <= a; i++) {
        for (var j = 1; j <= i; j++) {
            output+=  " ";
        }for(var k=i;k<=a; k++){
        	output+=  "*";
        }for(var l = i+1; l<= a; l++){
        	output+=  "*";
        }
        console.log(output);
        output="";
    }

 var a = 5;
   
    for (var i = 1; i <= a; i++) {       
        console.log("*");      
    }
   


