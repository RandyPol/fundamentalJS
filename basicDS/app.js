////////////////////////////////////////////////////////////////////////
//////////////////////////////BASIC DATA STRUCTURE//////////////////////
////////////////////////////////////////////////////////////////////////

// Section 1: Use an Array to Store a Collection of Data
// 
// We have defined a variable called yourArray. Complete the statement 
// by assigning an array of at least 5 elements in length to the yourArray 
// variable. Your array should contain at least one string, one number, and 
// one boolean.

// let yourArray = [1,'KLK',true,null,2022];

////////////////////////////////////////////////////////////////////////



// Section 2: Access an Array's Contents Using Bracket Notation
// 
// In order to complete this challenge, set the 2nd position (index 1) 
// of myArray to anything you want, besides the letter b.

// let myArray = ["a", "b", "c", "d"];
// // Only change code below this line
// myArray[1] = 'klk';
// // Only change code above this line
// console.log(myArray);

////////////////////////////////////////////////////////////////////////




// Section 3: Add Items to an Array with push() and unshift()
// 
// We have defined a function, mixedNumbers, which we are passing an 
// array as an argument. Modify the function by using push() and unshift() 
// to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to 
// the end so that the returned array contains representations of the 
// numbers 1-9 in order.


// function mixedNumbers(arr) {
//     // Only change code below this line
//     arr.unshift('three')
//     arr.unshift(2)
//     arr.unshift('I')
//     arr.push(7)
//     arr.push('VIII')
//     arr.push(9)
//     // Only change code above this line
//     return arr;
// }

// console.log(mixedNumbers(['IV', 5, 'six']));

////////////////////////////////////////////////////////////////////////




// Section 4: Remove Items from an Array with pop() and shift()
// 
// We have defined a function, popShift, which takes an array as an 
// argument and returns a new array. Modify the function, using pop() 
// and shift(), to remove the first and last elements of the argument array, 
// and assign the removed elements to their corresponding variables, so that 
// the returned array contains their values.

// function popShift(arr) {
//     let popped = arr.pop();
//     let shifted = arr.shift();
//     return [shifted, popped];
// }

// console.log(popShift(['challenge', 'is', 'not', 'complete']));


////////////////////////////////////////////////////////////////////////





// Section 5: Remove Items Using splice()
// 
// We've initialized an array arr. Use splice() to remove elements 
// from arr, so that it only contains elements that sum to the value of 10.

// const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
// arr.splice(1, 4);
// // Only change code above this line
// console.log(arr);

////////////////////////////////////////////////////////////////////////



// Section 6: Add Items Using splice()
// 
// We have defined a function, htmlColorNames, which 
// takes an array of HTML colors as an argument. Modify the function
//  using splice() to remove the first two elements of the array and add 
//  'DarkSalmon' and 'BlanchedAlmond' in their respective places.


// function htmlColorNames(arr) {
//     // Only change code below this line
//     arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond')
//     // Only change code above this line
//     return arr;
// }

// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));
// ////////////////////////////////////////////////////////////////////////






// Section 7: Copy Array Items Using slice()
// 
// We have defined a function, forecast, that takes an array as an argument. 
// Modify the function using slice() to extract information from the argument 
// array and return a new array that contains the string elements warm and sunny.
// function forecast(arr) {
//     // Only change code below this line
//     return arr.slice(2, 4);
// }

// // Only change code above this line
// console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));
// ////////////////////////////////////////////////////////////////////////





// Section 8: Copy an Array with the Spread Operator
// 
// We have defined a function, copyMachine which takes arr (an array) 
// and num (a number) as arguments. The function is supposed to return a 
// new array made up of num copies of arr. We have done most of the work for 
// you, but it doesn't work quite right yet. Modify the function using spread 
// syntax so that it works correctly (hint: another method we have already covered 
// might come in handy here!).

// function copyMachine(arr, num) {
//     let newArr = [];
//     while (num >= 1) {
//       // Only change code below this line
//   newArr.push([...arr])
//       // Only change code above this line
//       num--;
//     }
//     return newArr;
//   }

//   console.log(copyMachine([true, false, true], 2));

// // ////////////////////////////////////////////////////////////////////////






// Section 9: Combine Arrays with the Spread Operator
// 
// We have defined a function spreadOut that returns the variable sentence. 
// Modify the function using the spread operator so that it returns the array 
// ['learning', 'to', 'code', 'is', 'fun'].

// function spreadOut() {
//     let fragment = ['to', 'code'];
//     let sentence = ["learning", ...fragment, "is", "fun"]
//     return sentence;
// }
// console.log(spreadOut());
// // ////////////////////////////////////////////////////////////////////////





// Section 10: Check For The Presence of an Element With indexOf()
// 
// indexOf() can be incredibly useful for quickly checking for the presence 
// of an element on an array. We have defined a function, quickCheck, that 
// takes an array and an element as arguments. Modify the function using 
// indexOf() so that it returns true if the passed element exists on the array, 
// and false if it does not.

function quickCheck(arr, elem) {
    // Only change code below this line
    console.log(arr.indexOf(elem))
    return arr.indexOf(elem) === -1 ? console.log(elem, false) : console.log(elem, true);
    // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));


////////////////////////////////////////////////////////////////////////////



