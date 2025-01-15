// Immediately invoked function Expressions (IIFE)
// this function ignore the globle polution problem and execute immediately.

// function data(){
//     console.log(`DB CONNECTED`);
    
// }
// data(); // tradition methode of function calling ;


// (function data(){
//     console.log(`DB CONNECTED`);
    
// })(); // new IIFE methode of function calling;


(function data(){
    console.log(`DB CONNECTED`);
    
})();

( (name) => {
    console.log(`DB CONNECTED ${name}`);
    
})("pradip");
