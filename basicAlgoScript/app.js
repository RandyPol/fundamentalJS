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

function findLongestWordLength(str) {
    let longestWord = 0;
    str.split(" ").forEach(word => word.length > longestWord ? longestWord = word.length : '')
    return longestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));


////////////////////////////////////////////////////////////////////////