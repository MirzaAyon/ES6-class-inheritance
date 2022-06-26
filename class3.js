class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name) {
        this.name = name;

    }
    startSession() {
        console.log('start a support session');
    }
}
const aamir = new Support('Aamir khan'); //constructor ke call korte hole naam lagbe
console.log(aamir);
const salman = new Support('Solaiman Khan');
console.log(salman);
//support ongsho ta baade ekta object er moto hoise