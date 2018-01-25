/* ======================================  SCOPE AND THIS  =========================================== */

console.log(this);

/* ======================================  PRIVACY  =========================================== */

function Person(name, age) {
    const privateVariable = "This variable is private";
    const privateMethod = function() {
        console.log(this);
    }
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
        // we can access our attributes within the constructor!
        console.log("Also my privateVariable says: " + privateVariable)
        // we can access our methods within the constructor!
        privateMethod();
    }
}
const joe = new Person("Joe", 23);
joe.greet();

/* ======================================  PROTOTYPE  =========================================== */

function Cat(catName) {
  const name = catName;
  this.getName = function() {
    return name;
  };
}
//adding a method to the cat prototype
Cat.prototype.sayHi = function() {
  console.log('meow');
};
//adding properties to the cat prototype
Cat.prototype.numLegs = 4;
const muffin = new Cat('muffin');
const biscuit = new Cat('biscuit');
console.log(muffin, biscuit);
//we access prototype properties the same way as we would access 'own' properties
muffin.sayHi();
biscuit.sayHi();
console.log(muffin.numLegs);
// poor mutant cats: muffin.__proto__.numLegs ++;
// doing this to muffin will mess up all the cats!


/* ======================================  BASICS  =========================================== */
// Define the class
function Person(name, age) {
    this.name = name;
    this.age = age;
}
// Attach class methods using .prototype
Person.prototype.greet = function() {
    console.log("Hello my name is " + this.name + " and I am " + this.age + " years old!");
    return this;
};
// Create new instances with the new keyword
const amelia = new Person('Amelia', 36);
// Create instance methods by attaching the function directly to an instance
amelia.sing = function() {
    console.log("Lalalala!");
};

/* ========================================  SOFT PRIVACY AND CHAINING  ========================================= */

// Private variables are scoped to the constructor with the var keyword
function Car(make, model) {
    let odometer = 0;
    this.make = make;
    this.model = model;
    
    // To make functions private, we scope them to the constructor
    function updateOdometer(distance) {
        odometer += distance;
    };
    
    // 'Getter' functions help us read private variables
    this.readOdometer = function() {
      return odometer;
    }
    
    // 'Setter' functions help us update private variables
    this.drive = function(distance) {
      updateOdometer(distance);
      // return this will allow us to chain methods
      return this;
    }
}

const myCarInstance = new Car("Chevy", "Camaro");
// by returning this, we can chain drive()
myCarInstance.drive(50).drive(90); 
// private variable is undefined
console.log(myCarInstance.odometer);
// but we can read it with our getter function
console.log(myCarInstance.readOdometer());


