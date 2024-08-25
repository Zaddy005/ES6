// Common Js

console.log('hello sir, i am file one');

// call that file with require as many as u want it's only work once
// put "./" before file name if u don't want error
// require("./l40filetwo.js");
// require("./l40filetwo.js");

// let man = require("./l40filetwo");
// console.log(man);


// let getcity = require("./l40filetwo");
// console.log(getcity); // { prop_city: 'Mandalay' }
// console.log(getcity.prop_city);

let getobjs = require('./l40filetwo');
console.log(getobjs);
console.log(getobjs.greeting);
console.log(getobjs.message);

// console.log(module);
console.log(module.children[0].exports);
console.log(getobjs === module.children[0].exports);
console.log(module.children[0].exports.greeting);
console.log(module.children[0].exports.message);
