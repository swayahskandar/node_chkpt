console.log("Starting Node Js Introduction");

// 1- Creating a simple JavaScript Function
function sum(a, b) {
  return a + b;
}
let inputOne = Number(process.argv[2]);
let inputTwo = Number(process.argv[3]);

console.log(process.argv);
console.log("the result is", sum(inputOne, inputTwo));

// 2- NodeJS Core Module
let fs = require("fs");
console.log(fs);

// fs.readdir() method => reads the contents of a given directory => fs.readdir( path, options, callback )
console.log("Starting the file System");
fs.readdir("./", (error, files) => {
  if (error) console.log("Error", error);
  else console.log("Result", files);
});
console.log("Exiting the file System");

// fs.readFile() method => reads what a certain file contains => fs.readFile( filename, encoding, callback_function )
// fs.readFile("./myFunction.js", { encoding: "utf8" }, (error, data) => {
fs.readFile("./myFunction.js", "utf8", (error, data) => {
  if (error) console.log(error);
  else console.log("myFunction.js file contains: ", data);
  emitter.emit("myEvent", 4, 5);
});

// 3- NodeJS Third Party Module
const uuid = require("uuid");
function createUser(name, age) {
  return {
    name,
    age,
    id: uuid.v4(),
  };
}

//Process.argv = ["Path" , "path" , "name" , "age",......]
console.log(process.argv);
const name = process.argv[2];
const age = process.argv[3];

const user = createUser(name, age);
console.log(user); //return an user object

// 4- NodeJS local module
let myFunction = require("./myFunction");
console.log(myFunction);
console.log("My sum function returns ", myFunction.sum(2, 8));
console.log("My minus function returns ", myFunction.minus(6, 4));
console.log("My sayHello function returns ", myFunction.sayHello());

// 5- Creating Server
const http = require("http");

const server = http.createServer(function (req, res) {
  res.write("<h1>Introducion to Node Js</h1>");
  res.end();
});

// Event Emitter

// 1 -

const EventEmitter = require("events");
const emitter = new EventEmitter();

// 2- Event definition

emitter.on("myEvent", (x, y) => {
  console.log("Listener called", x + y);
});

server.listen(8000, (err) => {
  err ? console.log(err) : console.log("The Server is Running on port 5000");
});
