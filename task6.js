"use strict";

let  catsGroupGenerate = require('./catsGroupGenerate'); 
let  getGender = require('./getGender');
let  getName = require('./getName');
let  getOldCats = require('./getOldCats');
let  getYoungCats = require('./getYoungCats');
let  nameStats = require('./nameStats');
let  catFactoryMod = require('./catFactoryMod');
let  catsGroupGenerateMod = require('./catsGroupGenerateMod');


let prop = "age";
let value = 7;

let cat = catFactoryMod ( prop, value );
console.log(cat);

/*
let groupMod = catsGroupGenerateMod(15, prop, value);
for (let i = 0; i < groupMod.length; i++) {
    console.log( groupMod[i] );
}
*/