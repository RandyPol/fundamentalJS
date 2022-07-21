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

// 
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


// 
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

// 
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


// 
// Section 8: Verify an Object's Constructor with instanceof
// 
// Create a new instance of the House constructor, calling it myHouse and passing a number of bedrooms. 
// Then, use instanceof to verify that it is an instance of House.

// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
// }

// let myHouse = new House(10);
// console.log(myHouse instanceof House)
////////////////////////////////////////////////////////////////////////


// 
// Section 9: Understand Own Properties
// 
// Add the own properties of canary to the array ownProps.

// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];


// for (let prop in canary) {
//     if (canary.hasOwnProperty(prop))
//         ownProps.push(prop)
// }

// console.log(ownProps)

////////////////////////////////////////////////////////////////////////


// 
// Section 10: Use Prototype Properties to Reduce Duplicate Code
// 
// 
// better way is to use the prototype of Bird. Properties in the prototype are shared among 
// ALL instances of Bird. Here's how to add numLegs to the Bird prototype:
// Bird.prototype.numLegs = 2;
// Now all instances of Bird have the numLegs property.


// Add a numLegs property to the prototype of Dog

// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype.numLegs = 4;

// // Only change code above this line
// let beagle = new Dog("Snoopy");


////////////////////////////////////////////////////////////////////////

// 
// Section 11: Iterate Over All Properties
// 
// 
// You have now seen two kinds of properties: own properties and prototype properties. 
// Own properties are defined directly on the object instance itself. And prototype 
// properties are defined on the prototype.
// 
// Add all of the own properties of beagle to the array ownProps. Add all of the prototype properties 
// of Dog to the array prototypeProps.

// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// // Only change code below this line

// for (let property in beagle) {
//     if (beagle.hasOwnProperty(property)) {
//         ownProps.push(property)
//     } else {
//         prototypeProps.push(property)
//     }
// }


////////////////////////////////////////////////////////////////////////


// 
// Section 12: Understand the Constructor Property
// 
// 
// Write a joinDogFraternity function that takes a candidate parameter and, using 
// the constructor property, return true if the candidate is a Dog, otherwise return false.

// function Dog(name) {
//     this.name = name;
// }

// // Only change code below this line
// function joinDogFraternity(candidate) {
//     return candidate.constructor === Dog ? true : false;
// }


////////////////////////////////////////////////////////////////////////
