const numbers = [5, 23, 7, 54, 30, 28, 46, 19, 40, 16];
//filter mane keo ke nibo and keo ke nibo na
const bignumbers = numbers.filter(number => number > 20);
console.log(bignumbers);
const smallNumbers = numbers.filter(number => number < 10);
console.log(smallNumbers);




const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
console.log(expensive);

const blacks = products.filter(product => product.color == 'pink');
console.log(blacks);
//color match na korle empty array dibe
//map shobai ke/shob gula element ke niye/ kaj kore kichu ekta dibe r filter shorto fullfill hole sudhu takei dbe jemon (x>20)

const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);

//diff between filter and find
// filter er khetre jodi ekta keo paay tahole ekta array er modhe dibe jodi na paay then empty array dibe
//find er khetre kono array dibe na shorashori element takei diye dbe  r na pele undefined dibe
//abr filter relatable shob gula kei dibe but find sudhu first element takei dbe 