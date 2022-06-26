//common class
class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;

    }
}















class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
//niche new class
class StudentCare extends TeamMember {

    buildaRoutine(student) {
        console.log(this.name, 'Build a routine for', student)
    }
}

//niche arekta new class
class NeptuneDev extends TeamMember {
    codeEditor; //alada property lagte pare tai dilam
    constructor(name, address, editor) {
        super(name, address); //super ke call na korle error dibe
        this.codeEditor = editor;
    };
    releaseApp(version) {
        console.log(this.name, 'release app version', version)
    }
}
const aamir = new Support('Aamir khan', 'China', 11); //constructor ke call korte hole naam lagbe
console.log(aamir);
const salman = new Support('Solaiman Khan', 'Dubai', 12);
// console.log(salman);
// aamir.startSession();
// salman.startSession();
//support ongsho ta baade ekta object er moto hoise
const sharuk = new Support('SRK Khan', 'Dubai', 12);
const akshay = new Support('Akshay Kumar', 'Dubai', 12);
// console.log(aamir, salman, sharuk, akshay);

const alia = new StudentCare('Alia Bhat', 'Mumbai');
console.log(alia);

const ash = new NeptuneDev('Ash', 'Mumbai', 'Andriod studio');
// console.log(ash);
ash.releaseApp('1.4.5');