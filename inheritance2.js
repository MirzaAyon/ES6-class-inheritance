class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;

    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
//niche new class
class StudentCare {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildaRoutine(student) {
        console.log(this.name, 'Build a routine for', student)
    }
}

//niche arekta new class
class NeptuneDev {
    name;
    designation = 'Student Care Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
}
const aamir = new Support('Aamir khan', 'China'); //constructor ke call korte hole naam lagbe
// console.log(aamir);
const salman = new Support('Solaiman Khan', 'Dubai');
// console.log(salman);
// aamir.startSession();
// salman.startSession();
//support ongsho ta baade ekta object er moto hoise
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
// console.log(aamir, salman, sharuk, akshay);

const alia = new StudentCare('Alia Bhat', 'Mumbai');
console.log(alia);