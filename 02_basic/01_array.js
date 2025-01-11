const arr = [0,1,2,3,4,5];

const myarr = new Array(1,2,3,4,5);

// console.log(typeof(myarr));
// console.log(arr[2]);
// arr.push(9);
// console.log(arr);

// arr.pop();
// console.log(arr);

// arr.unshift(8);
// console.log(arr);

// console.log(arr.includes(9));
// console.log(arr.indexOf(3));

// const newArr = arr.join();
// console.log(typeof(newArr));


const myn1 = arr.slice(1,3);
console.log(myn1);
console.log("A",arr);


const myn2 = arr.splice(1,3);
console.log(myn2);
console.log("B",arr); // it will change the original array element or pull the origonal array element.
