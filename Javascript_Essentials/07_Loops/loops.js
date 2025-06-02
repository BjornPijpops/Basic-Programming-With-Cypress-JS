console.log(`--- Showcase repeating code ---`);
console.log(`Hello World`);
console.log(`Hello World`);
console.log(`Hello World`);
console.log(`Hello World`);
console.log(`Hello World`);



// Loops
/*
for (statement 1; statement 2; statement 3) {
    // code to execute multiple times
}
*/

// for loop (for i loop)
console.log(`--- Showcase for loop ---`);
for (let index = 0; index < 5; index++) { // index++ is the same as index = index + 1
    console.log(`Hello World number ${index}`);    
}



// for of loop

console.log(`--- Showcase for of loop ---`);
const cars = ["Mercedes", "Tesla", "Ford", "Toyota", "Volkswagen"]
for (const car of cars) {
    if (car == "Mercedes") {
       favoriteCar(car);         
    }
    console.log(car);    
}

function favoriteCar(car){
    console.log(`${car} is my favorite type of car out of this list!`);
}


// E6 for each loop
console.log(`--- Showcase E6 for each loop ---`);
cars.forEach(car => {
    console.log(car);
});



// loop features
// break, when you want to BREAK out of the loop
console.log(`--- Showcase BREAK feature ---`);

for (const car of cars) {
    if (car == "Ford") {
        break
    }
    console.log(car);    
}

// continue, when you want to skip over 1 iteration of a loop
console.log(`--- Showcase CONTINUE feature ---`);

for (const car of cars) {
    if (car == "Tesla") {
        continue
    }
    console.log(car);    
}