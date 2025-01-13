const user = {
    username: "pradip",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage();

//this is used for the use for locl variable like here i am using username in welcomemessage function as a local variable so thats 
// why we need ot use the THIS keyword to access the locla varible in this function.

user.welcomeMessage(); // it will print pradip
user.username = "sam";
user.welcomeMessage(); // but it will print sam becouse the current context is changed.

