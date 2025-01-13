// var d = 40;


let a = 200; 

if(true){
let a = 10;
const b = 20;
var c = 30;
console.log("INNER: ", a );// here the value of a is 10

}

console.log(a); // ye curlibraces {} means scope ke bahar print nahi hoga;
// console.log(b);// ye bhi curlibraces {} means scope ke bahar print nahi hoga;
// console.log(c);// but ye {} scope ke bahar print ho jayega becouse ye globle variable ke jaisa hota scope ke andar hone ke baad bhi thats the problem for developer, hai and esi liye js mian esko koi use nahi karta hai;

