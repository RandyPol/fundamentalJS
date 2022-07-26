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