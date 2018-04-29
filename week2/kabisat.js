
   function cek() 
   {
      var tahun = document.getElementById("tahun").value;
      var hasil;
 
      if(tahun % 4 == 0){
         if(tahun % 100 == 0){
           if(tahun % 400 == 0){
              hasil = "Tahun " + tahun + " : kabisat";
           }else
           {
              hasil = "Tahun " + tahun + " : bukan kabisat";
           }
         }else
         {
             hasil = "Tahun " + tahun + " : kabisat";   
         }
      }else
      {
         hasil = "Tahun " + tahun + " : bukan kabisat";
      }
      document.getElementById("output").innerHTML = hasil;
   }

thn = 488;

   if(thn % 4 == 0){
         if(thn % 100 == 0){
           if(thn % 400 == 0){
              hsl = "Tahun " + thn + " : kabisat";
           }else
           {
              hsl = "Tahun " + thn + " : bukan kabisat";
           }
         }else
         {
             hsl = "Tahun " + thn + " : kabisat";   
         }
      }else
      {
         hsl = "Tahun " + thn  + " : bukan kabisat";
      }
      
   
   console.log(hsl);
