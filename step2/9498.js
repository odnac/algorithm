let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString();

let a = parseInt(input);

if(a >= 90){
    console.log("A");
}else if( 80 <= a && a < 90){
    console.log("B");
}else if( 70 <= a && a < 80){
    console.log("C");
}else if( 60 <= a && a < 70){
    console.log("D");
}else {
    console.log("F");
}