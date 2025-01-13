function one(){
    const username = "pradip";
    function two(){
        const website = "youtube";
        // console.log(username);
    }
    // console.log(website);

    // two()
}
// one();


if(true){
    const username = "pradip";
    if(true){
        const name = "youtube";
        // console.log(username + name);
    }
}

// ++++++++++++++++ intresting  ++++++++++++++++

// i can access this first function from here menas before the decleration.
function addOne(num){
    return num + 1;
}
addOne(5);

// addTwo(5) i am not able to call the function two from here
const addTwo = function(num){
    return num + 2;
}
addTwo(5);

