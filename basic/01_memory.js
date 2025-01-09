
// java script have two types of memory..
// 1.Stack  (premitive) => original value not changed when i wnat to use or manipulate the variable

let myname = "pradip";
let anothername = myname;
console.log(anothername) // output pradip
anothername = "sohan";
console.log(anothername) // here another name value is changed to sohan but still my name value is not changed


// 2.Heap  (non-premitive) =>  Original value changed . which is stored in memory.


let userOne = {
    email: "pradip@gmail.com",
    upiID: "768767"
}
let userTwo = userOne;

userTwo.email = "sohan@gmail.com"
console.log(userOne); // value changed and it will print same as user two
console.log(userTwo); // value changed and it will print same as user one




