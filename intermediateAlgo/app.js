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