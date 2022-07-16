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
editInPlace();
console.log(s);