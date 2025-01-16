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


const months = "may";
switch (months) {
    case "january":
        console.log("january");
        break;
    case "february":
        console.log("February");
        break;
    case "march":
        console.log("march"); // it will print march becouse the month value is 3 that is case no.;
        break;
    case "april":
        console.log("april");
        break;
    case "may":
        console.log("may");
        break;

    default:
        console.log("default");
        break;
} // if break statement no having in code that means after the match of case statement all cases are printed except default;

