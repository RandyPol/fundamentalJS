////////////////////////////////////////////////////////////////////////
///////////////////////////BASIC Algorithm Scripting////////////////////
////////////////////////////////////////////////////////////////////////
// 
// Section 1: Convert Celsius to Fahrenheit
// 
// The formula to convert from Celsius to Fahrenheit is the temperature
//  in Celsius times 9/5, plus 32.
// You are given a variable celsius representing a temperature in Celsius.
//  Use the variable fahrenheit already defined and assign it the Fahrenheit 
//  temperature equivalent to the given Celsius temperature. Use the formula mentioned
//   above to help convert the Celsius temperature to Fahrenheit.


// function convertCtoF(celsius) {
//     let fahrenheit = celsius * (9 / 5) + 32
//     return fahrenheit;
// }

// convertCtoF(30);


////////////////////////////////////////////////////////////////////////


// 
// Section 2: Reverse a String
// 
// Reverse the provided string.

// You may need to turn the string into an array before you can reverse it.

// Your result must be a string.


// function reverseString(str) {
//     let revStr = '';
//     for (let i = (str.length - 1); i >= 0; i--) {
//         revStr += str[i]
//     }
//     return revStr;
// }

// console.log(reverseString("hello"));


////////////////////////////////////////////////////////////////////////



// 
// Section 3: Factorialize a Number
// 
// Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of 
// all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Only integers greater than or equal to zero will be supplied to the function.


// function factorialize(num) {

//     if (num === 0) {
//         return 1
//     } else {
//         return factorialize(num - 1) * num
//     }
// }

// console.log(factorialize(5));


////////////////////////////////////////////////////////////////////////




// 
// Section 4: Find the Longest Word in a String
// 
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

// function findLongestWordLength(str) {
//     let longestWord = 0;
//     str.split(" ").forEach(word => word.length > longestWord ? longestWord = word.length : '')
//     return longestWord;
// }

// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


////////////////////////////////////////////////////////////////////////


// 
// Section 5: Return Largest Numbers in Arrays
// 
// Return an array consisting of the largest number from each provided sub-array. 
// For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and 
// access each member with array syntax arr[i].


// function largestOfFour(arr) {
//     let top4 = [];
//     for (let array of arr) {
//         top4.push(array.reduce((a, b) => {
//             return Math.max(a, b)
//         }))
//     }
//     return top4
// }

// largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



////////////////////////////////////////////////////////////////////////



// 
// Section 6: Confirm the Ending
// 
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. 
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.


// function confirmEnding(str, target) {
//     let streLen = str.length - target.length;
//     return str.slice(streLen) === target ? true : false
// }

// console.log(confirmEnding("Bastian", "n"));

// ////////////////////////////////////////////////////////////////////////






// 
// Section 7: Repeat a String Repeat a String
// 
// Repeat a given string str (first argument) for num times (second argument). 
// Return an empty string if num is not a positive number. For the purpose of this 
// challenge, do not use the built-in .repeat() method.

// function repeatStringNumTimes(str, num) {
//     return num >= 0 ? Array(++num).join(str) : ''
// }

// console.log(repeatStringNumTimes("abc", 3));


// ////////////////////////////////////////////////////////////////////////



// 
// Section 8: Truncate a String
// 
// Truncate a string (first argument) if it is longer than the given maximum string 
// length (second argument). Return the truncated string with a ... ending.

// function truncateString(str, num) {
//     if (str.length <= num) {
//         return str
//     } else {
//         return str.slice(0, num) + '...'
//     }
// }

// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// ////////////////////////////////////////////////////////////////////////



// 
// Section 9: Finders Keepers
// 
// Create a function that looks through an array arr and returns the first element 
// in it that passes a 'truth test'. This means that given an element x, the 'truth test' 
// is passed if func(x) is true. If no element passes the test, return undefined.


// function findElement(arr, func) {
//     for (let item of arr) {
//         if (func(item)) {
//             return item
//         }
//     }
//     return undefined
// }

// console.log(findElement([10, 2, 3, 4], num => num % 2 === 0))


// ////////////////////////////////////////////////////////////////////////



// 
// Section 10: Boo who
// 
// Check if a value is classified as a boolean primitive. Return true or false.

// Boolean primitives are true and false.


// function booWho(bool) {
//     return [true, false].includes(bool)
// }

// booWho(null);


// ////////////////////////////////////////////////////////////////////////