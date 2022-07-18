// Section 1: Using the Test Method
// 
// 
// Regular expressions are used in programming languages 
// to match parts of strings. You create patterns to help you do that matching.
// Apply the regex myRegex on the string myString using the .test() method.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
// console.log(result)




// Section 2: Match Literal String
// 
// 
// Complete the regex waldoRegex to find "Waldo" in the
// string waldoIsHiding with a literal match.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);


// Section 3: Match a Literal String with Different Possibilities
// 
// 
// Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);