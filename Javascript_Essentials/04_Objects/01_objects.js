// Objects

const person = {
    // properties
    firstName: "Bjorn",
    lastName: "Pijpops"
}
console.log(person);
// dot notation
console.log(person.firstName);
console.log(person.lastName);
// bracket notation
console.log(person['firstName']);
console.log(person['lastName']);



// when do we use bracket notation?
const example = {
    "user name": "Bjorn",
    "age": 30
}

const key = "age";

// when we have spaces in the property name
console.log(example["user name"]);
// when we are accessing the property dynamically
console.log(example[key]);



// assign new values

// dot notation
person.firstName = "Kristof"

// bracket notation
person['lastName'] = "Van Kriekingen"

console.log(`The person's firstname is now: ${person['firstName']} and the lastname is now: ${person.lastName}`);
