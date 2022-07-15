// Use Recursion to Create a Countdown
//  The base case tells the recursive function when it no longer needs to call itself. 
//  There will also be a recursive call which executes the original function with different arguments. 


function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
// console.log(countup(5));

// countup(5)-- > countup(4)-- > countup(3)-- > countup(2)-- > countup(1)-- > countup(0)
// countup(5)-- > countup(4)-- > countup(3)-- > countup(2)-- > countup(1) < -- return []
// countup(5)-- > countup(4)-- > countup(3)-- > countup(2)-- >  return [1] < -- return []
// countup(5)-- > countup(4)-- > countup(3)-- >  return [1, 2]-- >  return [1] < -- return []
// countup(5)-- > countup(4)-- >  return [1, 2, 3]-- >  return [1, 2]-- >  return [1] < -- return []
// countup(5)-- >  return [1, 2, 3, 4]-- >  return [1, 2, 3]-- >  return [1, 2]-- >  return [1] < -- return []
// return [1, 2, 3, 4, 5]-- >  return [1, 2, 3, 4]-- >  return [1, 2, 3]-- >  return [1, 2]-- >  return [1] < -- return [] 


function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n);
        return countArray;
    }
}
// Only change code above this line
// console.log(countdown(10));

// Use Recursion to Create a Range of Numbers
// The function should return an array of integers which begins 
// with a number represented by the startNum parameter and ends 
// with a number represented by the endNum parameter. 

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const countArray = rangeOfNumbers(startNum + 1, endNum);
        countArray.unshift(startNum);
        return countArray;
    }
};

console.log(rangeOfNumbers(1, 5))