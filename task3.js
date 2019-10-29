"use strict";

let  catsGroupGenerate = require('./catsGroupGenerate');
let n = 5;
let group = [];

group = catsGroupGenerate(n);

//group.forEach(console.log);

for (let i = 0; i < group.length; i++) {
 console.log( group[i] );
 }