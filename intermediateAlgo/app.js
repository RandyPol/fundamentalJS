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

function sumAll(arr) {
    let firstNum = arr.shift();
    let lastNum = arr.pop()
    firstNum < lastNum ? '' : [firstNum, lastNum] = [lastNum, firstNum];
    let newArr = [...Array(lastNum - firstNum + 1).keys()].map((item, index) => firstNum + index)
        .reduce((sum, item) => sum + item);
    return newArr
}


console.log(sumAll([1, 4]))
console.log(sumAll([5, 10]))
console.log(sumAll([10, 5]))

////////////////////////////////////////////////////////////////////////