////////////////////////////////////////////////////////////////////////
///////////////////////////Object Oriented Programming//////////////////
////////////////////////////////////////////////////////////////////////
// 
// Section 1: Create a Basic JavaScript Object
// 
// Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.

let dog = {
    name: "Tommy",
    numLegs: 4,
    sayLegs() {
        return `This dog has ${this.numLegs} legs.`
    }

}
////////////////////////////////////////////////////////////////////////
// Section 2: Use Dot Notation to Access the Properties of an Object
// 
// Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.

console.log(dog.name)
console.log(dog.numLegs)
////////////////////////////////////////////////////////////////////////

// Section 3: Create a Method on an Object
// 
// Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
console.log(dog.sayLegs())
////////////////////////////////////////////////////////////////////////
