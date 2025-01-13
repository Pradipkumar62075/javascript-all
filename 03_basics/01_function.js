// console.log("P")
// console.log("R")
// console.log("A")
// console.log("D")
// console.log("I")
// console.log("P")

// function myFunction(){
// console.log("P")
// console.log("R")
// console.log("A")
// console.log("D")
// console.log("I")
// console.log("P")

// }

// myFunction();


// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// addTwoNumber(3,5);


// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// const result = addTwoNumber(3,5);
// console.log(result);


// function addTwoNumber(number1, number2){
//     let result = number1 + number2;
//     console.log("pradip yadav"); ye print ho jayega kyuki ye return ke pahle likha hai;
//     return result;
//     console.log("pradip"); // it will not having print becouse of it is write after the retrun line;
// }
// const result = addTwoNumber(3,5);
// console.log(result);

// function addTwoNumber(number1, number2){
//     let result = number1 + number2;
//     return result;
// }
// const result = addTwoNumber(3,5);
// console.log(result);


// function addTwoNumber(number1, number2){
//     return number1 + number2;
// }
// const result = addTwoNumber(3,5);
// console.log(result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter username");

        return 
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("pradip"));
console.log(loginUserMessage()); // in this case value will print as undefine when value is not passed ;