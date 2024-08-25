// => Circular Dependency

// console.log("i am file b");
// require("./l42filea.js");

let string = require("./l42filea")
console.log(string);