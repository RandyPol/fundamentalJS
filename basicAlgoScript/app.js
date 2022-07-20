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



// 
// Section 11: Title Case a Sentence
// 
// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.

// function titleCase(str) {
//     return str.toLowerCase().split(' ').map(word => {
//         return word[0].toUpperCase() + word.slice(1,)
//     }).join(' ')
// }

// console.log(titleCase("I'm a little tea pot"));
// ////////////////////////////////////////////////////////////////////////



// 
// Section 12: Slice and Splice
// 
// You are given two arrays and an index.

// Copy each element of the first array into the second array, in order.

// Begin inserting elements at index n of the second array.

// Return the resulting array. The input arrays should remain the same after the function runs.

// function frankenSplice(arr1, arr2, n) {
//     let newArr = arr2.slice()
//     newArr.splice(n, 0, ...arr1);
//     return newArr
// }

// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// ////////////////////////////////////////////////////////////////////////



// 
// Section 13: Falsy Bouncer
// 
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.


// function bouncer(arr) {
//     return arr.filter(item => item ? true : false)
// }

// console.log(bouncer([7, "ate", "", false, 9]));

// ////////////////////////////////////////////////////////////////////////




// 
// Section 14: Where do I Belong
// 
// Return the lowest index at which a value (second argument) should be inserted into 
// an array (first argument) once it has been sorted. The returned value should be a number.

// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), 
// but less than 2 (index 1).

// Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will 
// look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).


// function getIndexToIns(arr, num) {
//     for (let item of arr.sort((a, b) => a - b)) {
//         if (num <= item) {
//             return arr.indexOf(item)
//         }
//     }
//     return arr.length ? arr.length : 0
// }
// console.log(getIndexToIns([5, 3, 20, 3], 5))

// ////////////////////////////////////////////////////////////////////////





// 
// Section 15: Mutations
// 
// Return true if the string in the first element of the array contains all of the letters of the 
// string in the second element of the array.

// For example, ["hello", "Hello"], should return true because all of the letters in the second string 
// are present in the first, ignoring case.

// The arguments ["hello", "hey"] should return false because the string hello does not contain a y.

// Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.


// function mutation(arr) {
//     let [first, second] = arr
//     first = first.toLowerCase()
//     second = second.toLowerCase()
//     for (let charT of second) {
//         if (first.indexOf(charT) === -1) {
//             return false
//         }
//     }
//     return true
// }

// console.log(mutation(["hello", "he@y"]));

// ////////////////////////////////////////////////////////////////////////