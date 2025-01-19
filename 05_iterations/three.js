// for Of
// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
    
}

const greeting = "hello world";
for (const greet of greeting) {
  
    // console.log(`Each char is ${greet}`)
    
}

// Map

const map =  new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATE OF AMERICA")
map.set('FR',"FRANCE")
map.set('IN',"INDIA")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,':- ' , value);
}

// object  * object are not iteratable 

const myObject = {
    game1: 'NFS',
    game2: 'spiderman'
}
for (const [key,value] of myObject) {
        console.log(key,':- ' , value)
}
