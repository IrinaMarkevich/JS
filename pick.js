"use strict";

function pick(list) {
 let i = Math.trunc(Math.random() * (list.length));
 return list[i];
}
module.exports = pick;