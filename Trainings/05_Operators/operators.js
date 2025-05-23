// Relational operators

//    >    - more than
//    <    - less than
//   >=    - more than or equal
//   <=    - less than or equal

const result = 10 > 5 // true
console.log(result);



// Equal operators

const x = 1
console.log(x == "1"); // lose comparison
console.log(x === "1"); // strict comparison



// Logical operators

// AND
console.log(true && true);  // both need to be true
console.log(true && false); 

// OR
console.log(true || false); // atleast 1 needs to be true
console.log(true && true);
console.log(false && false);


// use case, you need to be old enough and tall enough to ride a rollercoaster

const olderThanFourteen = true;
const tallEnough = true;

const canRideRollerCoaster = olderThanFourteen && tallEnough
console.log(`Can this person ride the rollercoaster? The answer is: ${canRideRollerCoaster}`);



// NOT

console.log(10 == 10);
console.log(10 !== 10);
