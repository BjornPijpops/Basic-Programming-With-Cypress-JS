export class Customer {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    printName() {
        console.log(`Firstname is: ${this.firstName}, lastname is: ${this.lastName}`);        
    }
}
