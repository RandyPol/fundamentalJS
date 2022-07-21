////////////////////////////////////////////////////////////////////////
///////////////////////////Object Oriented Programming//////////////////
////////////////////////////////////////////////////////////////////////
// 
// Section 1: Create a Basic JavaScript Object
// 
// Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.

// let dog = {
//     name: "Tommy",
//     numLegs: 4,
//     sayLegs() {
//         return `This dog has ${this.numLegs} legs.`
//     }

// }
// ////////////////////////////////////////////////////////////////////////
// // Section 2: Use Dot Notation to Access the Properties of an Object
// // 
// // Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.

// console.log(dog.name)
// console.log(dog.numLegs)
// ////////////////////////////////////////////////////////////////////////

// // Section 3: Create a Method on an Object
// // 
// // Using the dog object, give it a method called sayLegs. The method should return the sentence This dog has 4 legs.
// console.log(dog.sayLegs())
// ////////////////////////////////////////////////////////////////////////

// // Section 4: Make Code More Reusable with the this Keyword
// // 
// // Modify the dog.sayLegs method to remove any references to dog. Use the duck example for guidance.
// console.log(dog.sayLegs())
// ////////////////////////////////////////////////////////////////////////


// Section 5: Define a Constructor Function
// 
// Create a constructor, Dog, with properties name, color, and numLegs that 
// are set to a string, a string, and a number, respectively.

// function Dog(name, color, numLegs) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = numLegs;
// }

// let dogOne = new Dog('Tommy', "Red", 5)
// console.log(dogOne)
////////////////////////////////////////////////////////////////////////



// Section 6: Use a Constructor to Create Objects
// 
// Use the Dog constructor from the last lesson to create a new instance of Dog, 
// assigning it to a variable hound.

// function Dog(name, color, numLegs) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = numLegs;
// }

// let hound = new Dog('Tommy', "Red", 5)
// console.log(dogOne)
////////////////////////////////////////////////////////////////////////


// Section 7: Extend Constructors to Receive Arguments
// 
// Create another Dog constructor. This time, set it up to take the parameters name and color,
// and have the property numLegs fixed at 4. Then create a new Dog saved in a variable terrier. 
// Pass it two strings as arguments for the name and color properties.


// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
// }

// let terrier = new Dog("terrier", "Red")
// console.log(terrier)
////////////////////////////////////////////////////////////////////////
