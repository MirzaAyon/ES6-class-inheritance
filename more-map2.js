const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
const fLengths = friends.map(friend => friend.length);
console.log(fLengths);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const productNames = products.map(product => product.name);
console.log(productNames);
const productPrices = products.map(product => product.price);
console.log(productPrices);
//array of object theke map kore kono ekta property ke niye eshe kichu ekta korar kaj take map diye korte pari
// products.map(product => console.log(product));
products.forEach(product => console.log(product))
//difference between map and foreach
//map - je kaj ta korbe ta kore pura ekta array return korbe
//forEach -  return korbe na
//map er kaj - prottekta element ke loop through korbe,tar jnno kono func apply korbe, func er result gulake ekta arr er modhe rakhbe,shei array take amk return dibe - prottekta element er jnno kichu ekta kaj korbe map
//for each prottek ta element jnno kaj korbe but kono return dibe na