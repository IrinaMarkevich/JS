"use strict";

let  catFactory = require('./catFactory');

function catsGroupGenerate(n) {

 let catsGroup = [];

 for (let i = 0; i < n; i++) {
 
 catsGroup [i] = catFactory();
 }

 return catsGroup;
 }
module.exports = catsGroupGenerate;