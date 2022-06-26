const numbers = [4, 6, 8, 10];
const output = [];


const doubleIt = number => number * 2;
//number ke pm hishebe nibe nad number ke double kore dibe

for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
console.log(output);
// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array