"use strict";

let  catsGroupGenerate = require('./catsGroupGenerate'); 
let  getGender = require('./getGender');
let  getName = require('./getName');
let  getOldCats = require('./getOldCats');
let  getYoungCats = require('./getYoungCats');



let list = catsGroupGenerate(15);

for (let i = 0; i < list.length; i++) {
    console.log( list[i] );
}



let mcats = getGender( list ); 
let nameCats = getName( list ); 
let oldCats = getOldCats( list, 5);
let youngCats = getYoungCats( list, 5);




for (let i = 0; i < mcats.length; i++) {
 console.log( mcats[i] );
}


for (let i = 0; i < nameCats.length; i++) {
 console.log( nameCats[i] );
}


for (let i = 0; i < oldCats.length; i++ ) {
 console.log( oldCats[i] );
}

for (let i = 0; i < youngCats.length; i++ ) {
    console.log( youngCats[i] );
}

