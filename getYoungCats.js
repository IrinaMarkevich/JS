"use strict";
let  getGender = require('./getGender');
let  getName = require('./getName');

function getYoungCats(list, n) {
 
 let ageCats = getGender( list ); 

 ageCats.sort( function(a, b) {
     return a.age - b.age
 })
  for (let i = ageCats.length - 1 ; i >= n; i--){
     ageCats.splice(i, 1);
  }
 let name = getName(ageCats);

  return name;
 
}
module.exports = getYoungCats;  