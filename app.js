// const amount = 12;

// if(amount < 10){
//     console.log("Number is small");
// }
// else{
//     console.log("large number");
// }

// console.log("hey its my first node app!!!");
// GLOBALS
// console.log(__dirname)
// console.log(__filename)
// setInterval(()=>{
//     console.log("Hello world!!!")
// },1000)

// Modules - Encapsulated code (only share minimum)
// Node uses commonjs so every file is a module (by default)

// const names = require('./4-firstModule')
// const sayHi = require('./5-utils')
// const data  = require("./6-alternate-flavor")
// console.log(sayHi)
// sayHi(names.john)
// // sayHi(secret)
// console.log(data)
// require("./7-mind-grenade")

const _ = require('lodash');
const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items)
console.log(newItems);
