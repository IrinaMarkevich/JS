"use strict";

let  catsGroupGenerate = require('./catsGroupGenerate'); 
let  getGender = require('./getGender');
let  getName = require('./getName');
let  getOldCats = require('./getOldCats');
let  getYoungCats = require('./getYoungCats');
let  nameStats = require('./nameStats');
let  catFactoryMod = require('./catFactoryMod');
let  catsGroupGenerateMod = require('./catsGroupGenerateMod');

let list = catsGroupGenerate(5);

for (let i = 0; i < list.length; i++) {
    console.log( list[i] );
}
console.log( " " );


let mcats = getGender( list ); 
let nameCats = getName( list ); 

let Stats = nameStats ( list );


console.log( Stats );
