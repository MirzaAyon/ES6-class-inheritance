class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;

    }
    startSession() {
        console.log('start a support session');
    }
}
const aamir = new Support('Aamir khan', 'China'); //constructor ke call korte hole naam lagbe
console.log(aamir);
const salman = new Support('Solaiman Khan', 'Dubai');
console.log(salman);
//support ongsho ta baade ekta object er moto hoise