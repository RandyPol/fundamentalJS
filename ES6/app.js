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
  console.log('before')
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

// 
// Section 4: Use Arrow Functions to Write Concise Anonymous Functions
// 
// Rewrite the function assigned to the variable magic which returns a new Date() 
// to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

const magic = () => new Date();