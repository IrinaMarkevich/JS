"use strict";

function getGender(list) {
 
 let mcats = [];

 for(let i = 0; i < list.length; i++) 
 {
     if (list[i].gender == "m")
         { 
          mcats.push( list[i] );
         }
     }
 
 return mcats;
}
module.exports = getGender;  
