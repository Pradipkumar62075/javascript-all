// singleton
// Object.create // constractor methode and in this mehode we build singleton object.

// object literals 

const mysym = Symbol("key1");

const myObj = {
    name:"pradip",
    age:20,
    email:"pradip@gmail.com",
    [mysym]: "pradip",
    location:"indore",
    isLogIn: false,
    lastlogInDays:["sunday","monday"]
};



// console.log(myObj.email);
// console.log(myObj["email"]);
// console.log(myObj[mysym]);

myObj.email = "pradip@google.com";
// console.log(myObj);
// Object.freeze(myObj);
myObj.email = "pradip@yaho.com"; // object element not changed becouse of freeze methode.
// console.log(myObj);

myObj.greeting = function(){
    console.log("hello user");
}

myObj.greetingTwo = function(){
    console.log(`hello js user ${this.email}`)
}
console.log(myObj.greeting());
console.log(myObj.greetingTwo());