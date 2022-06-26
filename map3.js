const numbers = [4, 6, 8, 10];
const output2 = [];


const doubleIt = number => number * 2;
//number ke pm hishebe nibe nad number ke double kore dibe

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
console.log(output2);
// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array

const output = numbers.map(doubleIt);
console.log(output);
//numbers array er prottek ta element ke niye loop chalae dae vitore vitore and prottek ta element er jnno ami je func ta disi shetake call korbe je result ta paisi ta variable e dibe