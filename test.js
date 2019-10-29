let pick = require('./pick.js');

describe('tests', function() {
 describe('pick', function() {
   it('pick', function(){
   let list = [1, 2, 3, 4, 5];
   let total;
   let result = pick(list);

   for ( i = 0; i < list.length; i++) {
      if (result == list[i]){
       total = true;
      }
    }
   if (total != true) {
     throw new Error(`No such result on array`);
    }
  });
 });
});

let catFactory = require('./catFactory');
describe('tests', function() {
 describe('catFactory', function() {
   it('catFactory', function(){
   let result = catFactory();
   if (result.hasOwnProperty('name') != true){
     throw new Error(`No name`);
    }
   if (result.hasOwnProperty('age') != true){
     throw new Error(`No age `);
    }
   if (result.hasOwnProperty('gender') != true){
     throw new Error(`No gender`);
    }
   if (result.hasOwnProperty('legsCount') != true){
     throw new Error(`No legsCount`);
    }
   if (result.hasOwnProperty('tailLength') != true){
     throw new Error(`No tailLength`);
    }
  });
 });
});

let catsGroupGenerate = require('./catsGroupGenerate');
describe('tests', function() {
 describe('catsGroupGenerate', function() {
   it('catsGroupGenerate', function(){
     let n = 15;
     let rezulte = catsGroupGenerate(n);
     if (n != rezulte.length){
       throw new Error(`No count n`);
      }
    });
  });
});

let getGender = require('./getGender');
describe('tests', function() {
 describe('getGender', function() {
   it('getGender', function(){
     let list = catsGroupGenerate(15);
     let result = getGender(list);
     for(let i=0; i<result.length; i++){
       if(result[i].gender != "m"){
         throw new Error(`No "m"`);
        }
      }
    });
  });
});

let getName = require('./getName');
describe('tests', function() {
 describe('getName', function() {
   it('getName', function(){
     let list = catsGroupGenerate(15);
     let result = getName(list);
     for(let i = 0; i < result.length; i++) {
       if(result[i] != "Murka" && result[i] != "Murzik" && result[i] != "Vasily"){
         throw new Error(`No name`);
        }
      }

    });
  });
});

let getOldCats = require('./getOldCats');
describe('tests', function() {
 describe('getOldCats', function() {
   it('getOldCats', function(){
     let n = 5;
     let list = catsGroupGenerate(15);
     let rezulte = getOldCats(list, n);
     if (n != rezulte.length){
       throw new Error(`No Oldov`);
      }
    });
  });
})

let getYoungCats = require('./getYoungCats');
describe('tests', function() {
 describe('getYoungCats ', function() {
   it('getYoungCats', function(){
     let n = 5;
     let list = catsGroupGenerate(15);
     let rezulte = getYoungCats(list, n);
     if (n != rezulte.length){
       throw new Error(`No YoungCats`);
      }
    });
  });
})

let nameStats = require('./nameStats');
describe('tests', function() {
 describe('nameStats' , function() {
   it('nameStats', function(){
     let list = catsGroupGenerate(15);
     let result = nameStats(list);

     if (result.hasOwnProperty('Murzik') != true){
       throw new Error(`No Murzik`);
      }
     if (result.hasOwnProperty('Murka') != true){
       throw new Error(`No Murka `);
      }
     if (result.hasOwnProperty('Vasily') != true){
       throw new Error(`No Vasily`);
      }

    });
  });
});

let catFactoryMod = require('./catFactoryMod');
describe('tests', function() {
 describe('catFactoryMod ', function() {
   it('catFactoryMod', function(){
     let value = 7;
     let prop = "age"
     let list = catFactoryMod( prop, 7);

     for ( let key in list ){
       if( key == prop ){
         if (list[key] != value){
           throw new Error(`No`);
          }
        }
      }
    });
  });
});

let catsGroupGenerateMod = require('./catsGroupGenerateMod');
describe('tests', function() {
 describe('catsGroupGenerateMod ', function() {
   it('catsGroupGenerateMod', function(){
     let value = 7;
     let prop = "age"
     let list = catsGroupGenerateMod(15, prop, 7);
     for(i = 0; i < list.length; i++) {
       for ( let key in list[i] ){
         if( key == prop ){
           if (list[i][key] != value){
             throw new Error(`No`);
            }
          }
        }
      }
    });
  });
});
