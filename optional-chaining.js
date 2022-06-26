// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log(x);
console.log(x, b);

// destructuring array 
// const [p, q] = [45, 37];
// console.log(p, q);
const [p, q] = [45, 37, 91, 86];
console.log(p, q);
//array te 4 ta thakleo p,q er jonno sudhu first 2 ta kei nibe


const [best, faltu] = ['momotaj', 'poroshi'];
// console.log(best, faltu);
//best and faltu ekhane variable
//jar jar value ber korte chai ta baam pashe dibo
//object er khetreo same
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };
console.log(sky, color, money);