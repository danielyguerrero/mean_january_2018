const MyObjConstructor = function(name) {
  const myPrivateVar = "Hello"; // just to show that it is hard to see this private var easily
  this.name = name; // but you can see the name!
  this.method = function() {
    console.log( "I am a method");
  };
}
const obj1 = new MyObjConstructor('object1');
const obj2 = new MyObjConstructor('object2');
console.log(obj1);
/* ============================================================ */
obj1.newProperty = "newProperty!";
obj1.__proto__.anotherProperty = "anotherProperty!";

console.log(obj1.anotherProperty); // anotherProperty!
console.log(obj1.newProperty); // newProperty!

// What about obj2?
console.log(obj2.newProperty); // undefined
console.log(obj2.anotherProperty); // anotherProperty! <= THIS IS THE COOL PART!
