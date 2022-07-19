////////////////////////////////////////////////////////////////////////
//////////////////////////////DEBUGGING/////////////////////////////////
////////////////////////////////////////////////////////////////////////

// Section 1: Use the JavaScript Console to Check the Value of a Variable
// let a = 5;
// let b = 1;
// a++;
// // Only change code below this line
// console.log(a)

// let sumAB = a + b;
// console.log(sumAB);

////////////////////////////////////////////////////////////////////////

// Section 2: Understanding the Differences between the freeCodeCamp and Browser Console
// 
// let output = `Get this to show once in the freeCodeCamp console and not 
// at all in the browser console`;
// console.log(output);
// console.clear()

////////////////////////////////////////////////////////////////////////

// Section 3: Use typeof to Check the Type of a Variable
// 
// You can use typeof to check the data structure, or type, of a variable. 
// This is useful in debugging when working with multiple data types.
// 
// Add two console.log() statements to check the typeof each of the 
// two variables seven and three in the code.


// let seven = 7;
// let three = "3";
// console.log(seven + three);
// // Only change code below this line
// console.log(typeof seven)
// console.log(typeof three)
////////////////////////////////////////////////////////////////////////


// Section 4: Catch Misspelled Variable and Function Names
// 
//Fix the two spelling errors in the code so the netWorkingCapital calculation works.


// let receivables = 10;
// let payables = 8;
// let netWorkingCapital = receivables - payables;
// console.log(`Net working capital is: ${netWorkingCapital}`);


////////////////////////////////////////////////////////////////////////


// Section 5: Catch Unclosed Parentheses, Brackets, Braces and Quotes
// 
// Fix the two pair errors in the code.

// let myArray = [1, 2, 3];
// let arraySum = myArray.reduce((previous, current) => previous + current);
// console.log(`Sum of array values is: ${arraySum}`);

////////////////////////////////////////////////////////////////////////


// Section 6: Catch Mixed Usage of Single and Double Quotes
// 
// JavaScript allows the use of both single (') and double (") quotes 
// to declare a string. Deciding which one to use generally comes down to 
// personal preference, with some exceptions.

// let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
// console.log(innerHtml);
////////////////////////////////////////////////////////////////////////






// Section 7: Catch Use of Assignment Operator Instead of Equality Operator
// 
// let x = 7;
// let y = 9;
// let result = "to come";

// if(x === y) {
//   result = "Equal!";
// } else {
//   result = "Not equal!";
// }

// console.log(result);
////////////////////////////////////////////////////////////////////////





// Section 8: Catch Missing Open and Closing Parenthesis After a Function Call
// 
// function getNine() {
//     let x = 6;
//     let y = 3;
//     return x + y;
//   }

//   let result = getNine();
//   console.log(result);
////////////////////////////////////////////////////////////////////////





// Section 9: Catch Arguments Passed in the Wrong Order When Calling a Function
// 
function raiseToPower(b, e) {
    return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);


////////////////////////////////////////////////////////////////////////