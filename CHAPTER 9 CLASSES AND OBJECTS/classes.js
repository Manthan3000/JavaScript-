// CREATING SIMPLE OBJECT
const student = {
  name: "manthan",
  marks: 99,
  printmarks: function () {
    console.log("Marks =", this.marks); // Student.marks
  },
};
//                      OBJECTS IS JAVASCRIPT
const emoloye = {
  calctax() {
    console.log("tax is 10 %"); // ANOTHER METHODE TO WRITE FUNCTION INSIDE OBJECT
  },
};

const karanarjun1 = {
  salary: 50000,
  calctax() {
    console.log("tac is 25 %"); // if object & prototype have same methode,
    //object methode will be used.
  },
};

const karanarjun2 = {
  salary: 50000,
};

const karanarjun3 = {
  salary: 50000,
};

karanarjun1.__proto__ = emoloye; //TAX 25 %
karanarjun2.__proto__ = emoloye;
karanarjun3.__proto__ = emoloye;

//                    CLASSES IN JAVASCRIPT (BLUEPRINT OF OBJ)

// BLUE PRINT CLASS
class car {
  constructor(brand, mileage) {
    console.log("creating new object");
    this.brand = brand;
    this.mileage = mileage;
  }
  start() {
    console.log("START");
  }
  stopt() {
    console.log("STOP");
  }
}

//OBJECTS
let fortuner = new car("fortuner", 100); //Constructor
let BMW = new car("BMW", 100); //constructor

//                  INHERITANCE IN JAVASCRIPT
//INHERITANCE IS PASSING DOWN PROPERTIES & METHODE FROM PARENT CLASS TO CHILD

class PARENT {
  hello() {
    console.log("hello !");
  }
}

class CHILD extends PARENT {}

let object = new CHILD();

// 2 EXAMPLE
//PARENT CLASS
class person {
  constructor(name) {
    // console.log("enter parent constructor");
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("Eat");
  }
  sleep() {
    console.log("Sleep");
  }
  work() {
    console.log("DO nothing");
  }
}
//CHILD CLASS
class Enginner extends person {
  constructor(name, branch) {
    // console.log("enter child constructor");
    super(); //to invoke parent class constructor
    this.name = name;
    this.branch = branch; //SUPER KEYWORD
    // console.log("exit child constructor")
  }
  //methode overwriteing
  work() {
    console.log("solve problems"); //Child method will be used over parent
  }
}

// let manthan = new Enginner();
let engObj = new Enginner("manthan", "pCOMPUTER ENGINNERING");
