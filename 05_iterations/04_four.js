const myObject = {
    js: "javaScript",
    py: "python",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programing = ["py","js","ruby","java","cpp"]


for (const key in programing) {
    // console.log(programing[key])
}

// const map =  new Map() // map is not iteratable so we can not use loop over the map;
// map.set('IN',"INDIA")
// map.set('USA',"UNITED STATE OF AMERICA")
// map.set('FR',"FRANCE")
// map.set('IN',"INDIA")

// for (const key in map) {
//     console.log(key);
// }