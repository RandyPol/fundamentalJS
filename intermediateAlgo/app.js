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

function pairElement(str) {
    let newArray = [];
    for (let letter of str) {
        if ("AT".includes(letter)) {
            letter === "A" ? newArray.push(["A", "T"]) : newArray.push(["T", "A"]);
        } else {
            letter === "C" ? newArray.push(["C", "G"]) : newArray.push(["G", "C"]);
        }
    }
    return newArray
}

pairElement("GCG");
console.log(pairElement("ATCGA"));

////////////////////////////////////////////////////////////////////////

// for the input GCG, return [["G", "C"], ["C", "G"], ["G", "C"]]

// pairElement("ATCGA") should return [["A", "T"], ["T", "A"], ["C", "G"], ["G", "C"], ["A", "T"]]