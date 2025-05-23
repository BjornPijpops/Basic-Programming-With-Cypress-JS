// Arrays

const cars = ["Mercedes", "Tesla", "Ford"]

// Retrieve information
console.log(cars.at(0));
console.log(cars[0]);

// Overwrite information
//cars.at(0) = "BMW"; // not possible
cars[0] = "Toyota";

console.log(cars);





const person = {
    // properties
    firstName: "Bjorn",
    lastName: "Pijpops",
    skills: ["JS", "Python", "C#"]
}

console.log(person.skills.at(0));
console.log(person.skills[1]);
