// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "pradip";
tinderUser.isLogIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "pradip@gmail.com",
    fullName: {
        userFullName:{
            firstname:"pradip",
            othername:"harry"

        }
    }
}
// console.log(regularUser.fullName.userFullName)

const obj1 = {1:"A",2:"B"}
const obj2 = {3:"C",4:"D"}
const obj4 = {5:"C",6:"D"}

// const obj3 = {obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2,obj4);
const obj3 = {...obj1,...obj2,...obj4}
console.log(obj3)