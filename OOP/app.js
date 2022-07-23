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


// 
// Section 13: Change the Prototype to a New Object
// 
// 
// A more efficient way is to set the prototype to a new object that already 
// contains the properties. This way, the properties are added all at once:

// Add the property numLegs and the two methods eat() and describe() to the prototype 
// of Dog by setting the prototype to a new object.



// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype = {
//     // Only change code below this line
//     numLegs: 4,
//     eat: function () {
//         console.log("nom nom nom");
//     },
//     describe: function () {
//         console.log("My name is " + this.name);
//     }
// };

////////////////////////////////////////////////////////////////////////




// 
// Section 14: Remember to Set the Constructor Property when Changing the Prototype
// 
// 
// There is one crucial side effect of manually setting the prototype to a new object. 
// It erases the constructor property! This property can be used to check which constructor function 
// created the instance, but since the property has been overwritten, it now gives false results:
// Define the constructor property on the Dog prototype.


// Dog.prototype = {
//     constructor: Dog,
//       numLegs: 4,
//       eat: function() {
//         console.log("nom nom nom");
//       },
//       describe: function() {
//         console.log("My name is " + this.name);
//       }
//     };

////////////////////////////////////////////////////////////////////////



// 
// Section 15: Understand Where an Object’s Prototype Comes From
// 
// 
// Use isPrototypeOf to check the prototype of beagle.

// function Dog(name) {
//     this.name = name;
// }

// let beagle = new Dog("Snoopy");

// console.log(Dog.prototype.isPrototypeOf(beagle))
////////////////////////////////////////////////////////////////////////


// 
// Section 16: Understand the Prototype Chain
// 
// 
// Modify the code to show the correct prototype chain.

// function Dog(name) {
//     this.name = name;
// }

// let beagle = new Dog("Snoopy");

// Dog.prototype.isPrototypeOf(beagle);  // yields true

// // Fix the code below so that it evaluates to true
// Object.prototype.isPrototypeOf(Dog.prototype);
////////////////////////////////////////////////////////////////////////




// 
// Section 17: Use Inheritance So You Don't Repeat Yourself
// 
// 
// The eat method is repeated in both Cat and Bear. Edit the code 
// in the spirit of DRY by moving the eat method to the Animal supertype.

// function Cat(name) {
//     this.name = name;
// }

// Cat.prototype = {
//     constructor: Cat,

// };

// function Bear(name) {
//     this.name = name;
// }

// Bear.prototype = {
//     constructor: Bear,
// };

// function Animal() { }

// Animal.prototype = {
//     constructor: Animal,
//     eat: function () {
//         console.log("nom nom nom");
//     }
// };
////////////////////////////////////////////////////////////////////////

// 
// Section 18: Inherit Behaviors from a Supertype
// 
// 
// Use Object.create to make two instances of Animal named duck and beagle.

// function Animal() { }

// Animal.prototype = {
//     constructor: Animal,
//     eat: function () {
//         console.log("nom nom nom");
//     }
// };

// // Only change code below this line

// let duck = Object.create(Animal.prototype);
// let beagle = Object.create(Animal.prototype);

////////////////////////////////////////////////////////////////////////


// 
// Section 19: Set the Child's Prototype to an Instance of the Parent
// 
// 
// Modify the code so that instances of Dog inherit from Animal.


// function Animal() { }

// Animal.prototype = {
//     constructor: Animal,
//     eat: function () {
//         console.log("nom nom nom");
//     }
// };

// function Dog() { }

// Dog.prototype = Object.create(Animal.prototype);


// let beagle = new Dog();
// console.log(beagle instanceof Animal)
// console.log(beagle.eat())
////////////////////////////////////////////////////////////////////////

// 
// Section 20: Reset an Inherited Constructor Property
// 
// 
// Fix the code so duck.constructor and beagle.constructor return their respective constructors.

// function Animal() { }
// function Bird() { }
// function Dog() { }

// Bird.prototype = Object.create(Animal.prototype);
// Dog.prototype = Object.create(Animal.prototype);

// // Only change code below this line

// Bird.prototype.constructor = Bird;
// Dog.prototype.constructor = Dog;

// let duck = new Bird();
// let beagle = new Dog();

////////////////////////////////////////////////////////////////////////


// 
// Section 21: Add Methods After Inheritance
// 
// 
// A constructor function that inherits its prototype object from a supertype constructor 
// function can still have its own methods in addition to inherited methods.

// Add all necessary code so the Dog object inherits from Animal and the Dog's prototype 
// constructor is set to Dog. Then add a bark() method to the Dog object so that beagle 
// can both eat() and bark(). The bark() method should print Woof! to the console.

// function Animal() { }
// Animal.prototype.eat = function () { console.log("nom nom nom"); };

// function Dog() { }

// // Only change code below this line

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.bark = function () {
//     console.log("Woof!");
// }


// // Only change code above this line

// let beagle = new Dog();



////////////////////////////////////////////////////////////////////////


// 
// Section 22: Override Inherited Methods
// 
// 
// Override the fly() method for Penguin so that it returns the string Alas, this is a flightless bird.

// function Bird() { }

// Bird.prototype.fly = function () { return "I am flying!"; };

// function Penguin() { }
// Penguin.prototype = Object.create(Bird.prototype);
// Penguin.prototype.constructor = Penguin;

// // Only change code below this line

// Penguin.prototype.fly = function () {
//     return 'Alas, this is a flightless bird'
// }

// // Only change code above this line

// let penguin = new Penguin();
// console.log(penguin.fly());


////////////////////////////////////////////////////////////////////////


// 
// Section 23: Use a Mixin to Add Common Behavior Between Unrelated Objects
// 
// 
// Create a mixin named glideMixin that defines a method named glide. 
// Then use the glideMixin to give both bird and boat the ability to glide.
// let bird = {
//     name: "Donald",
//     numLegs: 2
// };

// let boat = {
//     name: "Warrior",
//     type: "race-boat"
// };

// // Only change code below this line
// function glideMixin(obj) {
//     obj.glide = function () {
//         console.log('I\'m gliding!!!!!!')
//     }
// }
// glideMixin(bird);
// glideMixin(boat);
// bird.glide()
////////////////////////////////////////////////////////////////////////


// // 
// // Section 24: Use Closure to Protect Properties Within an Object from Being Modified Externally
// // 
// // 
// // Change how weight is declared in the Bird function so it is a private variable. 
// // Then, create a method getWeight that returns the value of weight 15.
// // This way the variable is public: 
// // function Bird() {
// //     this.weight = 15;
// // }
// // let newDog = new Bird();
// // console.log(newDog.weight)

// function Bird() {
//     let weight = 15;
//     this.getWeight = function () {
//         return weight;
//     }
// }


////////////////////////////////////////////////////////////////////////

// 
// Section 25: Understand the Immediately Invoked Function Expression (IIFE)
// 
// 
// Rewrite the function makeNest and remove its call so instead it's an 
// anonymous immediately invoked function expression (IIFE).

(function () {
    console.log("A cozy nest is ready");
})()


////////////////////////////////////////////////////////////////////////
