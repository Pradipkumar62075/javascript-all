// If
// if(true){
//     console.log("hello"); // if condition is true then the code in scope is run.

// }

// const age = 30;
// if(age>10){
//     console.log("you are a intelligent men.");

// }

// const userLogin = true;
// const usercard = true;
// const userEmail = true;
// if(userLogin && usercard && userEmail){
//     console.log("you can shop now");
// }
// else{
//     console.log("you can not access this plateform ");
// }


// ++++++++++++++++++++++ SWITCH +++++++++++++++++++

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } // syntex of switch statement ..;

// const month = 3;
// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("February");
//         break;
//     case 3:
//         console.log("march"); // it will print march becouse the month value is 3 that is case no.;
//         break;
//     case 4:
//         console.log("april");
//         break;
//     case 5:
//         console.log("may");
//         break;

//     default:
//         console.log("default");
//         break;
// } // if break statement no having in code that means after the match of case statement all cases are printed except default;


// const months = "may";
// switch (months) {
//     case "january":
//         console.log("january");
//         break;
//     case "february":
//         console.log("February");
//         break;
//     case "march":
//         console.log("march"); // it will print march becouse the month value is 3 that is case no.;
//         break;
//     case "april":
//         console.log("april");
//         break;
//     case "may":
//         console.log("may");
//         break;

//     default:
//         console.log("default");
//         break;
// } // if break statement no having in code that means after the match of case statement all cases are printed except default;


// Nulish coalescing operator (??): null and undefined ;
let val1 ;
// val1 = 5 ?? 10 ; // it will print 5;
// val1 = null ?? 10 ; // here it will print 10 becouse when the server or data base send the two value the we need to consider one where it having useful;
// val1 = undefined ?? 15; // it will print 15
val1 = null ?? 10 ?? 20; // it will print 10




console.log(val1);

// Terniary operator 

// condition ? true : false 
const iceTeaPrice = 100;
iceTeaPrice >= 80 ? console.log("price is more than 80") : console.log("price is less than 80")