// => Circular Dependency

// console.log("i am file a");
// require("./l42fileb.js")

// console.log("i am file a");
// module.exports = "Hello sir, i am  from file a";
// require("./l42fileb");


console.log("i am file a");
require("./l42fileb");
module.exports = "Hello sir, i am  from file a";
