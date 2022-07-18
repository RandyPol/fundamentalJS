// // 
// // FCC: ES6
// // 

// // 
// // Section 1: Mutate an Array Declared with const 
// // 

// var printNumTwo;
// for (var i = 0; i < 3; i++) {
//   // console.log(i)
//   if (i === 2) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }
// // console.log(printNumTwo());
// // Here the console will display the value 3.


// // let printNumTwo;
// for (let i = 0; i < 3; i++) {
//   if (i === 2) {
//     printNumTwo = function () {
//       return i;
//     };
//   }
// }
// // console.log(printNumTwo());
// // console.log(i);
// // Here the console will display the value 2, and an error that i is not defined.


// // 
// // Section 2: Mutate an Array Declared with const 
// // 
// // An array is declared as const s = [5, 7, 2].
// // Change the array to [2, 5, 7] using various element assignments.

// const s = [5, 7, 2];
// function editInPlace() {
//   // Only change code below this line
//   s[0] = 2;
//   s[1] = 5;
//   s[2] = 7;
//   // Only change code above this line
// }
// // editInPlace();
// // console.log(s);

// // 
// // Section 3: Prevent Object Mutation
// // 
// // In this challenge you are going to use Object.freeze 
// // o prevent mathematical constants from changing. 
// // You need to freeze the MATH_CONSTANTS object so that no 
// // one is able to alter the value of PI, add, or delete properties.


// function freezeObj() {
//   const MATH_CONSTANTS = {
//     PI: 3.14
//   };
//   // Only change code below this line
//   Object.freeze(MATH_CONSTANTS);
//   // Only change code above this line
//   try {
//     MATH_CONSTANTS.PI = 99;
//   } catch (ex) {
//     console.log(ex);
//   }
//   // console.log('before')
//   return MATH_CONSTANTS.PI;
// }
// const PI = freezeObj();

// // 
// // Section 4: Use Arrow Functions to Write Concise Anonymous Functions
// // 
// // Rewrite the function assigned to the variable magic which returns a new Date() 
// // to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

// const magic = () => new Date();


// // 
// // Section 5: Write Arrow Functions with Parameters
// // 
// // Rewrite the myConcat function which appends contents 
// // of arr2 to arr1 so that the function uses arrow function syntax.


// const myConcat = (arr1, arr2) => arr1.concat(arr2);

// // console.log(myConcat([1, 2], [3, 4, 5]));


// // 
// // Section 6: Set Default Parameters for Your Functions
// // 
// // Modify the function increment by adding default parameters so
// //  that it will add 1 to number if value is not specified.

// // Only change code below this line
// const increment = (number, value = 1) => number + value;
// // Only change code above this line


// // 
// // Section 7: Use the Rest Parameter with Function Parameters
// // 
// // Modify the function sum using the rest parameter in such a way that the function sum 
// // is able to take any number of arguments and return their sum.

// const sum = (...args) => {
//   return args.reduce((a, b) => a + b, 0);
// }
// // console.log(sum(1, 2, 3, 4))

// // 
// // Section 8: Use the Spread Operator to Evaluate Arrays In-Place
// // 
// // Copy all contents of arr1 into another array arr2 using the spread operator.
// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;

// arr2 = [...arr1];


// // 
// // Section 9: Use Destructuring Assignment to Extract Values from Objects
// // 
// // Replace the two assignments with an equivalent destructuring assignment. 
// // It should still assign the variables today 
// // and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80
// };

// // Only change code below this line

// // const { today, tomorrow } = HIGH_TEMPERATURES;

// // Only change code above this line


// // 
// // Section 10: Use Destructuring Assignment to Assign Variables from Objects
// // 
// // Replace the two assignments with an equivalent destructuring assignment. 
// // It should still assign the variables highToday and highTomorrow the values 
// // of today and tomorrow from the HIGH_TEMPERATURES object.



// // const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;




// // 
// // Section 11: Use Destructuring Assignment to Assign Variables from Nested Objects
// // 
// // Replace the two assignments with an equivalent destructuring assignment. 
// // It should still assign the variables lowToday and highToday the values of 
// // today.low and today.high from the LOCAL_FORECAST object.


// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 }
// };

// // Only change code below this line

// const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// // Only change code above this line




// // 
// // Section 12: Use Destructuring Assignment to Assign Variables from Arrays
// // 
// // Use destructuring assignment to swap the values of a and b so that a receives 
// // the value stored in b, and b receives the value stored in a.

// // let a = 8, b = 6;
// // // Only change code below this line
// // [a, b] = [b, a]



// // 
// // Section 13: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// // 
// // Use destructuring assignment with the rest parameter to perform an effective
// //  Array.prototype.slice() so that arr is a sub-array of the original array 
// //  source with the first two elements omitted.

// // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // function removeFirstTwo(list) {
// //   // Only change code below this line
// //   const [a, b, ...arr] = list; // Change this line
// //   // Only change code above this line
// //   return arr;
// // }
// // const arr = removeFirstTwo(source);



// // 
// // Section 14: Use Destructuring Assignment to Pass an Object as a Function's Parameters
// // 
// // Use destructuring assignment within the argument to the
// // function half to send only max and min inside the function.

// const stats = {
//   max: 56.78,
//   standard_deviation: 4.34,
//   median: 34.54,
//   mode: 23.87,
//   min: -0.75,
//   average: 35.85
// };

// // Only change code below this line
// const half = ({ min, max }) => (max + min) / 2.0;
// // Only change code above this line


// // 
// // Section 15: Create Strings using Template Literals
// // 
// // Use template literal syntax with backticks to create an 
// // array of list element (li) strings. Each list 
// // element's text should be one of the array elements 
// // from the failure property on the result object and have 
// // a class attribute with the value text-warning. The makeList
// //  function should return the array of list item strings.

// // Use an iterator method (any kind of loop) to get the desired output (shown below).

// // [
// //   '<li class="text-warning">no-var</li>',
// //   '<li class="text-warning">var-on-top</li>',
// //   '<li class="text-warning">linebreak</li>'
// // ]

// const result = {
//   success: ["max-length", "no-amd", "prefer-arrow-functions"],
//   failure: ["no-var", "var-on-top", "linebreak"],
//   skipped: ["no-extra-semi", "no-dup-keys"]
// };

// function makeList(arr) {
//   // Only change code below this line
//   const failureItems = [];
//   arr.forEach(a => {
//     failureItems.push(
//       `<li class="text-warning">${a}</li>`)
//   }
//   )
//   // Only change code above this line

//   return failureItems;
// }

// const failuresList = makeList(result.failure);


// // 
// // Section 16: Write Concise Object Literal Declarations Using Object Property Shorthand
// // 
// // Use object property shorthand with object literals to create and return an object with 
// // name, age and gender properties.

// const createPerson = (name, age, gender) => {
//   // Only change code below this line
//   return {
//     name,
//     age,
//     gender
//   };
//   // Only change code above this line
// };


// // Section 17: Write Concise Declarative Functions with ES6
// // 
// // Refactor the function setGear inside the object bicycle 
// // to use the shorthand syntax described above.

// // Only change code below this line
// const bicycle = {
//   gear: 2,
//   setGear(newGear) {
//     this.gear = newGear;
//   }
// };
// // Only change code above this line
// bicycle.setGear(3);
// // console.log(bicycle.gear);





// // Section 18: Use class Syntax to Define a Constructor Function
// // 
// // Use the class keyword and write a constructor to create the Vegetable class.

// // The Vegetable class allows you to create a vegetable object with 
// // a property name that gets passed to the constructor.

// // Only change code below this line
// class Vegetable {
//   constructor(name) {
//     this.name = name;
//   }
// }
// // Only change code above this line

// const carrot = new Vegetable('carrot');
// // console.log(carrot.name); // Should display 'carrot'




// // Section 19: Use getters and setters to Control Access to an Object
// // 

// // Only change code below this line
// class Thermostat {
//   constructor(tempValue) {
//     this.tempValue = (5 / 9) * (tempValue - 32);
//   }
//   // Set
//   set temperature(arg) {
//     this.tempValue = arg;
//   }
//   // Get
//   get temperature() {
//     //  C = 5/9 * (F - 32)
//     return this.tempValue;
//   }
// }
// // Only change code above this line

// const thermos = new Thermostat(76); // Setting in Fahrenheit scale
// let temp = thermos.temperature; // 24.44 in Celsius
// // console.log(temp);
// // thermos.temperature = 26;
// // temp = thermos.temperature; // 26 in Celsius
// // console.log(temp);


// // Section 20: Create a Module Script
// // 
// // Add a script to the HTML document of type module 
// // and give it the source file of index.js

// // Only change code below this line
// `
// <html>
//   <body>
//     <!-- Only change code below this line -->
//     <script type="module" src="filename.js"></script>
//     <!-- Only change code above this line -->
//   </body>
// </html>
// `

//   // Section 21: Use export to Share a Code Block
//   // 
//   // There are two string-related functions in the editor. 
//   // Export both of them using the method of your choice..js

//   // Only change code below this line

//   `const uppercaseString = (string) => {
//   return string.toUpperCase();
// }

// const lowercaseString = (string) => {
//   return string.toLowerCase()
// }`
//   //Placing them all in the export statement
//   `export {
//   uppercaseString, lowercaseString
// }`


//   // Section 22: Reuse JavaScript Code Using import
//   // 
//   // Add the appropriate import statement that will allow the current file to use the
//   //  uppercaseString and lowercaseString functions you exported in the previous lesson. 
//   //  These functions are in a file called string_functions.js, which is in the same 
//   //  directory as the current file.

//   `import { uppercaseString, lowercaseString } from './string_functions.js';
// `
//   // Section 23: Use * to Import Everything from a File
//   // 
//   // The code in this file requires the contents of the 
//   // file: string_functions.js, that is in the same 
//   // directory as the current file. Use the import * as syntax to import 
//   // everything from the file into an object called stringFunctions.

//   `import * as stringFunctions from "./string_functions.js";
// `
//   // Section 24: Create an Export Fallback with export default
//   // 
//   // There is another export syntax you need to know, known as export default. 
//   // Usually you will use this syntax if only one value is being exported from a file. 
//   // It is also used to create a fallback value for a file or module.
//   // The following function should be the fallback value for the module.
//   //  Please add the necessary code to do so.

//   `export default function subtract(x, y) {
//   return x - y;
// }`

//   // Section 25: Import a Default Export
//   // 
//   // In the last challenge, you learned about export default and its uses. 
//   // To import a default export, you need to use a different import syntax. 
//   // In the following code, import the default export from the math_functions.js file, 
//   // found in the same directory as this file. Give the import the name subtract.

//   `import subtract from "./math_functions.js";
// `


//   // Section 26: Create a JavaScript Promise
//   // 
//   // Promise is a constructor function, so you need to use the new keyword to create one. 
//   // It takes a function, as its argument, with two parameters - resolve and reject. 
//   // These are methods used to determine the outcome of the promise. 
//   // 
//   // Create a new promise called makeServerRequest. Pass in a function with resolve and reject
//   //  parameters to the constructor.

//   `const makeServerRequest = new Promise((resolve, reject) => {

// })`

// // Section 27: Complete a Promise with resolve and reject
// // 
// // A promise has three states: pending, fulfilled, and rejected. 
// // The promise you created in the last challenge is forever stuck in the pending state 
// // because you did not add a way to complete the promise. The resolve and reject 
// // parameters given to the promise argument are used to do this. resolve is used 
// // when you want your promise to succeed, and reject is used when you want it to fail.
// // 
// // Make the promise handle success and failure. If responseFromServer is true, 
// // call the resolve method to successfully complete the promise. Pass resolve a 
// // string with the value We got the data. If responseFromServer is false, use the 
// // reject method instead and pass it the string: Data not received.

// const makeServerRequest = new Promise((resolve, reject) => {
//   if (responseFromServer) {
//     resolve("We got the data.")
//   } else {
//     reject("Data not received.")
//   }
// })

// Section 28: Handle a Fulfilled Promise with then
// 
// Promises are most useful when you have a process that takes 
// an unknown amount of time in your code (i.e. something asynchronous), 
// often a server request. When you make a server request it takes some 
// amount of time, and after it completes you usually want to do something 
// with the response from the server. This can be achieved by using the then method. 
// The then method is executed immediately after your promise is fulfilled with resolve.

const makeServerRequestResolve = new Promise((resolve, reject) => {
  const responseFromServer = true;
  if (responseFromServer) {
    resolve("We got the data.")
  } else {
    reject("Data not received.")
  }
})

// Add the then method to your promise. Use result as the parameter of its 
// callback function and log result to the console.
makeServerRequestResolve.then(result => console.log(result))


// Section 29: Handle a Rejected Promise with catch
// 
// catch is the method used when your promise has been rejected. 
// It is executed immediately after a promise's reject method is called. 

const makeServerRequestReject = new Promise((resolve, reject) => {
  const responseFromServer = false;
  if (responseFromServer) {
    resolve("We got the data.")
  } else {
    reject("Data not received.")
  }
})
makeServerRequestReject.catch(error => console.log(error))


// Add the then method to your promise. Use result as the parameter of its 
// callback function and log result to the console.
// makeServerRequest.then(result => console.log(result))