// 
// FCC: ES6
// 

// 
// Section 1: Mutate an Array Declared with const 
// 

var printNumTwo;
for (var i = 0; i < 3; i++) {
  // console.log(i)
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
// console.log(printNumTwo());
// Here the console will display the value 3.


// let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
// console.log(printNumTwo());
// console.log(i);
// Here the console will display the value 2, and an error that i is not defined.


// 
// Section 2: Mutate an Array Declared with const 
// 
// An array is declared as const s = [5, 7, 2].
// Change the array to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Only change code above this line
}
// editInPlace();
// console.log(s);

// 
// Section 3: Prevent Object Mutation
// 
// In this challenge you are going to use Object.freeze 
// o prevent mathematical constants from changing. 
// You need to freeze the MATH_CONSTANTS object so that no 
// one is able to alter the value of PI, add, or delete properties.


function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  // console.log('before')
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 
// Section 4: Use Arrow Functions to Write Concise Anonymous Functions
// 
// Rewrite the function assigned to the variable magic which returns a new Date() 
// to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

const magic = () => new Date();


// 
// Section 5: Write Arrow Functions with Parameters
// 
// Rewrite the myConcat function which appends contents 
// of arr2 to arr1 so that the function uses arrow function syntax.


const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4, 5]));


// 
// Section 6: Set Default Parameters for Your Functions
// 
// Modify the function increment by adding default parameters so
//  that it will add 1 to number if value is not specified.

// Only change code below this line
const increment = (number, value = 1) => number + value;
// Only change code above this line


// 
// Section 7: Use the Rest Parameter with Function Parameters
// 
// Modify the function sum using the rest parameter in such a way that the function sum 
// is able to take any number of arguments and return their sum.

const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
// console.log(sum(1, 2, 3, 4))

// 
// Section 8: Use the Spread Operator to Evaluate Arrays In-Place
// 
// Copy all contents of arr1 into another array arr2 using the spread operator.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];


// 
// Section 9: Use Destructuring Assignment to Extract Values from Objects
// 
// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables today 
// and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

// const { today, tomorrow } = HIGH_TEMPERATURES;

// Only change code above this line


// 
// Section 10: Use Destructuring Assignment to Assign Variables from Objects
// 
// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables highToday and highTomorrow the values 
// of today and tomorrow from the HIGH_TEMPERATURES object.



// const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;




// 
// Section 11: Use Destructuring Assignment to Assign Variables from Nested Objects
// 
// Replace the two assignments with an equivalent destructuring assignment. 
// It should still assign the variables lowToday and highToday the values of 
// today.low and today.high from the LOCAL_FORECAST object.


const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST;

// Only change code above this line




// 
// Section 12: Use Destructuring Assignment to Assign Variables from Arrays
// 
// Use destructuring assignment to swap the values of a and b so that a receives 
// the value stored in b, and b receives the value stored in a.

// let a = 8, b = 6;
// // Only change code below this line
// [a, b] = [b, a]



// 
// Section 13: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// 
// Use destructuring assignment with the rest parameter to perform an effective
//  Array.prototype.slice() so that arr is a sub-array of the original array 
//  source with the first two elements omitted.

// const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeFirstTwo(list) {
//   // Only change code below this line
//   const [a, b, ...arr] = list; // Change this line
//   // Only change code above this line
//   return arr;
// }
// const arr = removeFirstTwo(source);



// 
// Section 14: Use Destructuring Assignment to Pass an Object as a Function's Parameters
// 
// Use destructuring assignment within the argument to the
// function half to send only max and min inside the function.

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({ min, max }) => (max + min) / 2.0;
// Only change code above this line


// 
// Section 15: Create Strings using Template Literals
// 
// Use template literal syntax with backticks to create an 
// array of list element (li) strings. Each list 
// element's text should be one of the array elements 
// from the failure property on the result object and have 
// a class attribute with the value text-warning. The makeList
//  function should return the array of list item strings.

// Use an iterator method (any kind of loop) to get the desired output (shown below).

// [
//   '<li class="text-warning">no-var</li>',
//   '<li class="text-warning">var-on-top</li>',
//   '<li class="text-warning">linebreak</li>'
// ]

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};

function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  arr.forEach(a => {
    failureItems.push(
      `<li class="text-warning">${a}</li>`)
  }
  )
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);


// 
// Section 16: Write Concise Object Literal Declarations Using Object Property Shorthand
// 
// Use object property shorthand with object literals to create and return an object with 
// name, age and gender properties.

const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name,
    age,
    gender
  };
  // Only change code above this line
};