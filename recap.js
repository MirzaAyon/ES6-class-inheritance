// 1. let and const
const hubby = 'Omor Sani';
let phone = 'iphone 15';
phone = 'Samsung Galaxy S17';

//templete string

const myNotes = `I am mojnu.I dont have onthing ${hubby} is here`
console.log(myNotes);


// 2. default 
// 5. spread or three dots (...)
//default parameter 
// function maxNumber(array){
//     const max = Math.array(...array)
//     return max;
// }
// const biggest = maxNumber();
// console.log(biggest);
//evabe korle error dibe

function maxNumber(array = []) {
    const max = Math.max(...array)
    return max;
}
const biggest = maxNumber();
console.log(biggest);


// 4. arrow function
// function square(x) {
//     return x * x;
// }
const square = x => x * x;
console.log(square(9));