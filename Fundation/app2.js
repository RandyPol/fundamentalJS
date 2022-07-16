// Generate Random Fractions with JavaScript
// Change randomFraction to return a random number instead of returning 0.

function randomFraction() {

    // Only change code below this line

    return Math.random();

    // Only change code above this line
}

console.log(randomFraction())

// Generate Random Whole Numbers with JavaScript
// Use this technique to generate and return a random whole number between 0 and 9.

function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    // Only change code above this line
}