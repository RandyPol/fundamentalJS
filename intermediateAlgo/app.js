////////////////////////////////////////////////////////////////////////
////////////////////Intermediate Algorithm Scripting////////////////////
////////////////////////////////////////////////////////////////////////
// 
// Section 1: Sum All Numbers in a Range
// 
// 
// 
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the 
// sum of all the numbers between them. The lowest number will not always come first.
// 
// For example, sumAll([4,1]) should return 10 because sum of all the numbers 
// between 1 and 4 (both inclusive) is 10.

// function sumAll(arr) {
//     let firstNum = arr.shift();
//     let lastNum = arr.pop()
//     firstNum < lastNum ? '' : [firstNum, lastNum] = [lastNum, firstNum];
//     let newArr = [...Array(lastNum - firstNum + 1).keys()].map((item, index) => firstNum + index)
//         .reduce((sum, item) => sum + item);
//     return newArr
// }

// console.log(sumAll([1, 4]))
// console.log(sumAll([5, 10]))
// console.log(sumAll([10, 5]))

////////////////////////////////////////////////////////////////////////

// 
// Section 2: Diff Two Arrays
// 
// 
// 
// Compare two arrays and return a new array with any items only found in one of the two given arrays, 
// but not both. In other words, return the symmetric difference of the two arrays.
// Note: You can return the array with its elements in any order.

// function diffArray(arr1, arr2) {
//     const newArr = [];

//     function isIt(aR1, aR2) {
//         aR1.forEach((element) => {
//             if (!aR2.includes(element)) {
//                 newArr.push(element)
//             }
//         })
//     }
//     isIt(arr1, arr2);
//     isIt(arr2, arr1);
//     return newArr
// }

// console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

////////////////////////////////////////////////////////////////////////

// 
// Section 3: Seek and Destroy
// 
// 
// 
//You will be provided with an initial array (the first argument in the destroyer function), 
// followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

// Note: You have to use the arguments object.

// function destroyer(arr) {
//     return arguments[0].filter(item => ![...arguments].slice(1).includes(item))
// }

// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

////////////////////////////////////////////////////////////////////////

// 
// Section 4: Wherefore art thou
// 
// 
// 
// Make a function that looks through an array of objects (first argument) and returns an array of all 
// objects that have matching name and value pairs (second argument). Each name and value pair of the source 
// object has to be present in the object from the collection if it is to be included in the returned array.

// Note: You have to use the arguments object.

// let listObjt = [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }];
// let lastItem = { last: "Capulet" };

// function whatIsInAName(collection, source) {
//     const arr = [];
//     // Only change code below this line
//     let compareKeys = Object.keys(source)
//     collection.forEach(element => {
//         let result = compareKeys.every(item => Object.keys(element).includes(item))

//         if (result) {
//             for (let key in source) {
//                 if (!(element[key] === source[key])) {
//                     result = 0;
//                 }
//             }
//         }
//         if (result) {
//             arr.push(element)
//         }

//     });
//     // Only change code above this line
//     return arr;
// }

// console.log(whatIsInAName(listObjt, lastItem));



// function whatIsInAName(collection, source) {
//     const souceKeys = Object.keys(source);

//     // filter the collection
//     return collection.filter(obj => {
//       for (let i = 0; i < souceKeys.length; i++) {
//         if (!obj.hasOwnProperty(souceKeys[i]) || obj[souceKeys[i]] !== source[souceKeys[i]]) {
//           return false;
//         }
//       }
//       return true;
//     });
//   }

//   function whatIsInAName(collection, source) {
//     // "What's in a name? that which we call a rose
//     // By any other name would smell as sweet.”
//     // -- by William Shakespeare, Romeo and Juliet
//     const sourceKeys = Object.keys(source);

//     return collection
//       .filter(obj => sourceKeys
//                        .every(key => obj.hasOwnProperty(key) && obj[key] === source[key]));
//   }

////////////////////////////////////////////////////////////////////////

// 
// Section 5: Spinal Tap Case
// 
// 
// 
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

// function spinalCase(str) {
//     return str.split(/(?=[A-Z])|[\W\_]/).map(item => item.trim()).join('-').toLowerCase()
// }

// console.log(spinalCase('This Is Spinal Tap'));

// console.log(spinalCase("thisIsSpinalTap"))

////////////////////////////////////////////////////////////////////////


// 
// Section 6: Pig Latin
// 
// 
// 
// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, 
// move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

// function translatePigLatin(str) {
//     if ('aeiouAEIOU'.includes(str[0])) {
//         return str + "way"
//     } else {
//         let searRegex = /^[bcdfghjklmnpqrstvwxyz]{1,}/i;
//         let newstr = str.replace(searRegex, '');
//         return newstr + str.slice(0, str.length - newstr.length) + "ay"
//     }

// }

// console.log(translatePigLatin("california"));

////////////////////////////////////////////////////////////////////////


// 
// Section 7: Search and Replace
// 
// 
// 
// Perform a search and replace on the sentence using the arguments provided 
// and return the new sentence.

// First argument is the sentence to perform the search and replace on.

// Second argument is the word that you will be replacing (before).

// Third argument is what you will be replacing the second argument with (after).

// Note: Preserve the case of the first character in the original word when you are replacing it. 
// For example if you mean to replace the word Book with the word dog, it should be replaced as Dog

// function myReplace(str, before, after) {
//     let newString = before[0] === before[0].toUpperCase() ?
//         after[0].toUpperCase() + after.slice(1) : after[0].toLowerCase() + after.slice(1);

//     return str.replace(before, newString)

// }

// console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));


////////////////////////////////////////////////////////////////////////


// 
// Section 8: DNA Pairing
// 
// 
// 
// Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by 
// the characters AT and CG, which form building blocks of the DNA double helix.

// The DNA strand is missing the pairing element. Write a function to match the missing 
// base pairs for the provided DNA strand. For each character in the provided string, 
// find the base pair character. Return the results as a 2d array.

// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

// The character and its pair are paired up in an array, and all the arrays are grouped 
// into one encapsulating array.

// function pairElement(str) {
//     let newArray = [];
//     for (let letter of str) {
//         if ("AT".includes(letter)) {
//             letter === "A" ? newArray.push(["A", "T"]) : newArray.push(["T", "A"]);
//         } else {
//             letter === "C" ? newArray.push(["C", "G"]) : newArray.push(["G", "C"]);
//         }
//     }
//     return newArray
// }

// pairElement("GCG");
// console.log(pairElement("ATCGA"));

////////////////////////////////////////////////////////////////////////


// 
// Section 9: Missing letters
// 
// 
// 
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.
// let azKeyObt = Object.fromEntries(Object.entries(azArray).map(a => [a[1], a[0]]));
// function fearNotLetter(str) {
//     const azArray = "abcdefghijklmnopqrstuvwxyz".split("");

//     let arrayResult = azArray.slice(azArray.indexOf(str[0]), azArray.indexOf(str[str.length - 1]) + 1)
//         .filter(item => !str.includes(item));

//     return arrayResult.length ? `${arrayResult[0]}` : undefined;

// }

// console.log(fearNotLetter("abce"))
////////////////////////////////////////////////////////////////////////


// 
// Section 10: Sorted Union
// 
// 
// 
// Write a function that takes two or more arrays and returns a new array 
// of unique values in the order of the original provided arrays.

// In other words, all values present from all arrays should be included 
// in their original order, but with no duplicates in the final array.

// The unique numbers should be sorted by their original order, but the final 
// array should not be sorted in numerical order.

// Check the assertion tests for examples.

// function uniteUnique(arr) {
//     const args = Array.prototype.slice.call(arguments);
//     return [...new Set(args[0].concat(...args.slice(1)))]
// }

// console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
////////////////////////////////////////////////////////////////////////


// 
// Section 11: Convert HTML Entities
// 
// 
// 
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
// in a string to their corresponding HTML entities.


// let htmlList = {
//     "&": "&amp;",
//     "<": "&lt;",
//     ">": "&gt;",
//     '"': "&quot;",
//     "'": "&apos;",
// }
// function convertHTML(str) {
//     return str.replace(/[&<>"']/g, match => htmlList[match])
// }

// // function convertHTML(str) {
// //     return str.split(" ").map(item => {
// //         if (item in htmlList) {
// //             return htmlList[item]
// //         } else {
// //             if (item.split("").some(i => i in htmlList)) {
// //                 return item.split('').map(item2 => {
// //                     return item2 in htmlList ? htmlList[item2] : item2;
// //                 }).join("")
// //             }
// //             return item
// //         }
// //     }).join(" ")
// // }

// console.log(convertHTML('>>&&'))
// console.log(convertHTML("Dolce & Gabbana"))
// console.log(convertHTML("Hamburgers < Pizza < Tacos"))

////////////////////////////////////////////////////////////////////////


// 
// Section 12: Sum All Odd Fibonacci Numbers
// 
// 
// 
// Given a positive integer num, return the sum of all odd Fibonacci numbers 
// that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional 
// number in the sequence is the sum of the two previous numbers. The first six numbers 
// of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less 
// than or equal to 10 are 1, 1, 3, and 5.


// const sumFibs = n => {
//     let fibArray = [0, 1];
//     let sumofArray;
//     let a = 0;
//     let b = 1;
//     let nextNum;
//     do {
//         nextNum = a + b;

//         nextNum % 2 === 0 ? "" : nextNum <= n ? fibArray.push(nextNum) : '';

//         a = b;
//         b = nextNum;
//         sumofArray = fibArray.reduce((prev, current) => prev + current, 0)
//         // console.log(fibArray)

//     } while (nextNum <= n);

//     return sumofArray
// }



// console.log(fibonacci(10))
// console.log(fibonacci(1000))
// console.log(fibonacci(4000000))
// console.log(fibonacci(4))
// console.log(fibonacci(75024))
// console.log(fibonacci(75025))
// console.log(fibonacci(1))



////////////////////////////////////////////////////////////////////////



// 
// Section 13: Sum All Primes
// 
// 
// 
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. 
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 
// is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.


// function sumPrimes(num) {
//     let rangeToCheck = [...Array(num + 1).keys()].slice(1).filter(item => isPrime(item))
//     let sumAll = 0;

//     while (sumAll <= num) {
//         sumAll = rangeToCheck.reduce((prev, current) => prev + current, 0)
//     }

//     return sumAll
// }

// function isPrime(num) {
//     if (num > 1) {
//         for (let i = 2; i < num; i++) {
//             if (num % i == 0) {
//                 return false
//             }
//         }
//         return true
//     } else {
//         return false
//     }
// }

// console.log(sumPrimes(977))
////////////////////////////////////////////////////////////////////////

// 
// Section 14: Smallest Common Multiple
// 
// 
// 
// Find the smallest common multiple of the provided parameters that can be evenly divided 
// by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also 
// evenly divisible by all numbers between 1 and 3. The answer here would be 6.

// function smallestCommons(arr) {
//     let [one, two] = arr[0] < arr[1] ? arr : [arr[1], arr[0]];
//     const rangeList = [...Array(two - one + 1).keys()].map(x => x + one);
//     return smallComMult(one, two, rangeList)
// }

// function smallComMult(num1, num2, arrayList) {
//     let currentNum = num1;
//     let found = false;
//     while (!found) {
//         if (currentNum % num1 === currentNum % num2) {
//             if (arrayList.every(x => currentNum % x === 0)) {
//                 return currentNum
//             }
//         }
//         currentNum += 1;
//     }

// }

// console.log(smallestCommons([23, 18]))

////////////////////////////////////////////////////////////////////////


// 
// Section 15: Drop it
// 
// 
// 
// Given the array arr, iterate through and remove each element starting from the first 
// element (the 0 index) until the function func returns true when the iterated element 
// is passed through it.

// Then return the rest of the array once the condition is satisfied, otherwise, arr 
// should be returned as an empty array.

// function dropElements(arr, func) {
//     for (let [index, item] of arr.entries()) {
//         // console.log(index, item)
//         if (func(item)) {
//             return arr.slice(index)
//         }
//     }
//     return []
// }

// console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
// dropElements([1, 2, 3], function (n) { return n < 3; });

////////////////////////////////////////////////////////////////////////


// 
// Section 16: Steamroller
// 
// 
// 
// Flatten a nested array. You must account for varying levels of nesting.

// function steamrollArray(arr) {
//     return true ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? steamrollArray(val) : val), []) : arr.slice();
// }

// console.log(steamrollArray([1, [2], [3, [[4]]]]));
////////////////////////////////////////////////////////////////////////


// 
// Section 17: Binary Agents
// 
// 
// 
// Return an English translated sentence of the passed binary string.

// The binary string will be space separated.

// function binaryAgent(str) {
//     let strArray = str.split(" ");
//     return strArray.map(item => String.fromCharCode(parseInt(item, 2))).join('')
// }

// console.log(binaryAgent('01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111'));
////////////////////////////////////////////////////////////////////////



// 
// Section 18: Everything Be True
// 
// 
// 
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object 
// property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

// function truthCheck(collection, pre) {
//     return collection.every(obt => obt[pre])
// }

// console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: true }, { name: "Naomi", role: "", isBot: true }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));

////////////////////////////////////////////////////////////////////////


// 
// Section 19: Arguments Optional
// 
// 
// 
// Create a function that sums two arguments together. If only one argument is provided, 
// then return a function that expects one argument and returns the sum.

// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:


function addTogether(a, b) {
    if (arguments.length === 1 && typeof a === 'number') {
        return function (x) {
            if (typeof x !== 'number') {
                return undefined
            } else {
                return x + a
            }
        }
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else {
        return undefined
    }
}

console.log(addTogether(2)(2))

////////////////////////////////////////////////////////////////////////




