"use strict";

//let  catsGroupGenerate = require('./catsGroupGenerate'); 
//let list = catsGroupGenerate(15);

function nameStats( list ) {
 
 let k = 0, j = 0, x = 0;
 
 for ( let i = 0; i < list.length; i++) {
  
     if(list[i].name == "Murka")
         k += 1;

     if(list[i].name == "Murzik")
         j++;

     if(list[i].name == "Vasily")
         x++;
     }

     let stats = {
        Murka: k,
        Murzik: j,
        Vasily: x
     };
    
 
return stats;
}

module.exports = nameStats;