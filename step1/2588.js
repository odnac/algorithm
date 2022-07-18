let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

let a = parseInt(input[0]);
let b = parseInt(input[1]);

let oneNum = b % 10;
let tenNum = Math.floor((b % 100) / 10)
let hundredNum = Math.floor(b / 100);

console.log(a * oneNum);
console.log(a * tenNum);
console.log(a * hundredNum);
console.log(a * b);