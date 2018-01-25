// Strings
var myString: string = "This is a string";
 
// Numbers
var myNumber: number = 7;
 
// Boolean
var myBoolean: boolean = true;
 
// Array of  Numbers 
var arrayOfNumbers: number[];

// (alternative way)
var arrayOfNumbers: Array<number>

// any (assign to any type, and change to any type, anytime)
var anything: any = 7;

=======================    VAR     =================================

function testing() {
    var x = 10;
    console.log(x) // ok
}
console.log(x) // Error, undefined

=======================    LET     =================================

if (true) {
    let x = 10;
    console.log(x) // ok
}
console.log(x) // Error, undefined

=======================    CONST     =================================

const myobj = {
    a: 1, b:2
}
myobj.a = 5 // ok
myobj.abc = 3 // Error
myobj = {x:1, y:2, z:3} // Error


==========================================================================
                            FUNCTIONS
==========================================================================

 
// Never type (will never reach the end of the function)
function errorHandler(message: string): never{
	throw new Error(message);
}
// Void (returns nothing)
function printValue(val: string): void{
	console.log(val);
	return;
}

==========================================================================
                            CLASSES
==========================================================================

class SLNode {
	val: number;
	
	constructor(valueP: number){
		this.val = valueP;
	}
	doSomethingFun(){
		console.log("This is FUN!");
	}
}
let firstSLNode = new SLNode(1);


===================          IMPORTS     =========================


// Sample patterns:
import * from 'libraryName'; // import all from x;
import { SpecificLibraryObject } from 'filepath/LibraryName'; // import 1 from x;
import { objectA, objectB } from 'filepath/LibraryName'; // import 2 from x;
// Real examples:
import * from 'rxjs';
import observable from 'rxjs/observable'


===================          EXPORTS      =========================

export class SampleClass {
	sampleMethod(aStr: string): number {
		return aStr.length()
	}
} // Export a class inline.
// Alternative
class SampleClass {
	sampleMethod(aStr: string): number {
		return aStr.length()
	}
}
export { SampleClass as NewClassName } // Export a class with a different name.
// Alternative
class SampleClassA {
	sampleMethod(aStr: string): number {
		return aStr.length()
	}
}
class SampleClassB {
	sampleMethod(aStr: string): number {
		return aStr.length()
	}
}
export { SampleClassA, SampleClassB } // Export 2 Classes.


===================     INTERFACES    =====================

// Not using an interface
function printName(user: { name: string }): void{
	console.log(user.name);
	return;
}
// Using an Interface
interface UserInterface {
	name: string
}
function printName(user: UserInterface): void{
	console.log(user.name);
	return;
}

=======  BONUS - Optionals    =========

interface UserInterface {
	name: string
	cellNumber?: number;
}
function printName(user: UserInterface): void{
	console.log(user.name);
	if (user.cellNumber){ console.log(user.cellNumber) }
	return;
}












