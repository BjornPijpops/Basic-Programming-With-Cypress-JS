// Variables
var firstName = "Bjorn";
let lastName = "Pijpops";

console.log(firstName);
console.log(lastName);



// Multi-assign
let age, sex, height;

age = "28"
sex = "Male"
height = "178"

console.log(age);
console.log(sex);
console.log(height);



// Override values
age = "30"
console.log(age);



// Constants
const occupation = "Tester";
console.log(occupation);

// it is impossible to create an empty constant
//const occupation;

// it is impossible to override the initial value of a constant that is why it is a CONSTANT
//occupation = "Freeloader"; 



// Datatypes
// There are 7 datatypes, we will be discussing 5 of them

// Numbers, Includes both integers and floats (42, 3.14)
const number = 25;
const pi = 3.14159;



// 2. String, Represents text
const greeting = "Hello, world!";
const name = 'Bjorn';



// 3. Boolean
const isRaining = false;
const isSunny = true;



// 4. Undefined (declared but not assigned)
let notAssigned;
const unAssigned = undefined;



// 5. Null (explicitly empty)
const emptyValue = null;



// Displaying the values and their types
console.log(typeof number, number);
console.log(typeof greeting, greeting);
console.log(typeof isRaining, isRaining);
console.log(typeof notAssigned, notAssigned);
console.log(typeof emptyValue, emptyValue);


// The other 2 are BigInt and Symbol

// 6. BigInt (used for large numbers)
const bigNumber = 123456789012345678901234567890n;
// 7. Symbol (unique identifier)
const id = Symbol('uniqueId');