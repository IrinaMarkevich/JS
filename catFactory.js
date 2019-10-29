"use strict";

let  pick = require('./pick');

function catFactory() {

 let name = ["Murka", "Vasily", "Murzik"];
 let age = [3, 4, 5, 6, 7];
 let gender = ["m", "f"];
 let legsCount = [3, 4];
 let tailLength = [5, 10, 15];
 
 
 let cat = {
     name: pick(name),
     age: pick(age),
     gender: pick(gender),
     legsCount: pick(legsCount),
     tailLength: pick(tailLength)  
 };
  
 return cat;
}
module.exports = catFactory;