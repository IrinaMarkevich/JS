"use strict";

function getName(list) {
 
 let nameCats = [];

 for(let i = 0; i < list.length; i++) {
    nameCats[i] = list[i].name;
     }
 
 return nameCats;
}
module.exports = getName;  