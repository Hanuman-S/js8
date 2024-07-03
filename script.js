//OOPS in javascript

const student1 = {
    fullName : 'Hanuman Sarode',
    CGPA : '9.8',
    printMarks : function(){
        console.log(`Marks = ${this.CGPA}`); //'this' defines the scope of CGPA and tells which object it's from, we can also just write student['CGPA'];
    },
    caste : 'general',
    feesPaid : 40000
};

const student2 = {
    fullName : 'Revanth Vishnu',
    CGPA : '8.7',
    printMarks : function(){
        console.log(`Marks = ${this.CGPA}`); //'this' defines the scope of CGPA and tells which object it's from, we can also just write student['CGPA'];
    },
    caste : 'OBC',
    feesPaid : 30000
};

const schoolFees = {
    feesCalc(feesPaid,caste){
        if(caste==='general'){
            let feesIni = 100000;
            let feesPay = feesIni - feesPaid;
            return console.log(`The fees to be paid is = ${feesPay}`);
        } else {
            let feesIni=60000;
            let feesPay = feesIni - feesPaid;
            return console.log(`The fees to be paid is = ${feesPay}`);
        }
    }
}

student1.__proto__=schoolFees;
student2.__proto__=schoolFees;

//__proto__ refers to the prototype which is a reference to the object, here schoolFees is the prototype and student1/2 is the object. Prototype itself is an object. It includes many functions which can act on the object.
//If object and prototype have same function name the function in object is executed when called


//CLASS
//The functions and values defined in the class come under prototype for object(s)
class students {
    printMarks(){
        console.log(`CGPA = ${this.CGPA}`);
    }
    constructor(fullName,cgpa,caste,feesPaid=0){
        this.fullName = fullName;
        this.CGPA = cgpa;
        this.caste = caste;
        this.feesPaid = feesPaid;
    }
    feesCalc(feesPaid = this.feesPaid,caste = this.caste){
        if(caste==='general'){
            let feesIni = 100000;
            let feesPay = feesIni - feesPaid;
            return console.log(`The fees to be paid is = ${feesPay}`);
        } else {
            let feesIni=60000;
            let feesPay = feesIni - feesPaid;
            return console.log(`The fees to be paid is = ${feesPay}`);
        }
    }
}

let student3 = new students();
let student4 = new students('Pragun',9.5,'OBC',60000);

//Inheritance in classes
class parent {
    constructor(eyecolor,height,haircolor,age){
        this.eyecolor=eyecolor;
        this.age=age;
        this.height=height;
        this.haircolor=haircolor;
    }
}

class child extends parent {
    constructor(height,age){
        super(parent.eyecolor,height,parent.haircolor,age);  //Calls constructor from parent class 
    }
}

let Parent = new parent('blue',6,'black',43);
let Child = new child(5,18);

//If child and parent have same functions, child function is executed when called. This is called method overriding
//Note that when a function is called using inheritance from parent class in child class, the arguments are not passed from parent to child

//error handiling using try-catch
//Syntax: try { code in which error is occuring} catch(err) {what do to about error}
//This helps us find the error and also allows the next lines to execute