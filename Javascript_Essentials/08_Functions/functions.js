// Declarative functions
helloWorld();

function helloWorld() {
    console.log(`Hello World!`);
}

helloWorld();



// Anonymous functions
//helloWorldAnonymous();  An anonymous function cannot be called before its declaration!

const helloWorldAnonymous = function(){
    console.log(`Hello World Anonymous!`);
}

helloWorldAnonymous();



// ES6 function - Arrow function
//helloWorldArrow(); An arrow function cannot be called before its declaration!

const helloWorldArrow = () => {
    console.log(`Hello World Arrow!`);
}

helloWorldArrow();



// Function with arguments
/**
 * 
 * @param {*} firstName This is the firstname of a person you want to print out.
 */
function printName(firstName) {
    console.log(`The first name is: ${firstName}`);    
}

/**
 * 
 * @param {*} firstName This is the firstname of a person you want to print out.
 * @param {*} lastName This is the lastname of a person you want to print out.
 */
function printFullName(firstName, lastName) {
    console.log(`The first name is: ${firstName} and the lastname: ${lastName}`);    
}

printName("Bjorn");
printFullName("Bjorn", "Pijpops");



// Function with return
function multiplyBy(multiplier, multiplicand) {
    const result = multiplier * multiplicand;
    return result;
}

const result = multiplyBy(2,3);
console.log(`The result of multiplying by 2 and 3 is: ${result}`);



// Import function from file  ----- UPDATE PACKAGE.JSON to contain "type": "module"
import  { printAge } from './helpers/helperfunctions.js'
printAge(28);



// Import entire file
import * as helper from './helpers/helperfunctions.js'
helper.printAge(30);