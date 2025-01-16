// const userEmail = "pradip@gmail.com";
// if(userEmail){
//     console.log("got the user");// here it will print got the user becouse it is assume that the have useremail.

// }else{
//     console.log("don't got the user email");
// }


// const userEmail = "";
// if(userEmail){
//     console.log("got the user");

// }else{
//     console.log("don't got the user email");// here it will print dont got the user becouse it does not have any value and doublecoute consider as empty or 0 value;
     
// }


// const userEmail = [];
// if(userEmail){
//     console.log("got the user");// here it will print got the user becouse it is assume that the have some value and that is called truthy and falsy in js.

// }else{
//     console.log("don't got the user email");
// }


// const userEmail = [];
// if(userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyObject = {}
if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}

// falsy values

// false, 0 , -0 , BigInt , 0n, "" , null , undefined, NaN, 

// truthy values
//"0", 'false'," " , [] , {} , function(){} ,