const marvel_heros = ["thor", "ironman","spiderman"];
const dc_heros = ["superman","batman"];

// console.log(marvel_heros.push(dc_heros));
// const newarrhero = marvel_heros.concat(dc_heros);
// console.log(newarrhero);

// const all_new_heros = [...marvel_heros, ...dc_heros];
// console.log(all_new_heros);


// const another_arr = [1,2,[7,8,9],3,[4,5,6,[8,9]]];
// const real_arr = another_arr.flat(Infinity);
// console.log(real_arr);

console.log(Array.isArray("pradip"));
console.log(Array.from("pradip"));
console.log(Array.from({name:"pradip"}));

score1 = 100;
score2 = 200;
score3 = 300;
console.log(Array.of(score1,score2,score3));