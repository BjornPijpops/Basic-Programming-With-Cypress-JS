// Concatination
const firstName = "Bjorn";
const job = "Trainer";

const concatinatedMessage = "Hey my name is " + firstName + " and I am your " + job + " for today!";
console.log(concatinatedMessage);



// Interpolation
const interpolatedMessage = `Hey my name is ${firstName} and I am your ${job} for today!`
console.log(interpolatedMessage);

const multiLineMessage = `Hey I support
                        multi-line strings!`

const interpolatedMultiLineMessage = `Hey my name is ${firstName} and
I am your ${job} for today!`

console.log(multiLineMessage);
console.log(interpolatedMultiLineMessage);

