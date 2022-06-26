// declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log(x);
console.log(x, b);
console.log('myObject.p', myObject.p); //undefined show hbe 
console.log('myObject.p', myObject.p.q);//aro error dibe
console.log('myObject.p', myObject?.p?.q);
//optional chaining mane maan paile jao r na paile jaiyo na

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


//chaining
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
console.log(company.web.tech.third);
console.log(company.backend.tech.third); //error khabe
console.log(company?.backend?.tech.third)
console.log(company?.web?.tech?.third);
//qustion mark ta kaj korbe jodi kothao kono undefined hoye jae