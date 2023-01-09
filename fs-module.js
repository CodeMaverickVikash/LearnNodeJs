// include fs module
// const fs = require("fs");

// read file
// let text = fs.readFileSync("dele.txt", "utf-8");
// console.log(text);
// replace text
// text = text.replace("browser", "Rohan");
// console.log(text);

// Creating a new file
// fs.writeFileSync("rohan.txt", text);


// Blocking vs Non-Blocking execution
// Synchronous or blocking
// - line by line execution
// let text = fs.readFileSync("dele.txt", "utf-8");
// console.log(text);

// Asynchronous or non-blocking
// - line by line execution not guaranteed
// - callbacks will fire

// const fs = require("fs");
// fs.readFile("dele.txt", "utf-8", (err, data)=>{
//     console.log(data);
// });
// console.log("This is a message");

// Creating Custom Modules in Node Using NodeJs
// const average = require("./custom_module");
// console.log(average([3,4]));

const mod = require("./mod");
console.log(mod.name) 
console.log(mod.avg([3,4]))


// Backend is all about serving files