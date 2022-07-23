////////////////////////////////////////////////////////////////////////
///////////////////////////Functional Programming///////////////////////
////////////////////////////////////////////////////////////////////////
// 
// Section 1: Learn About Functional Programming
// 
// Functional programming is a style of programming where solutions are simple, 
// isolated functions, without any side effects outside of the function 
// scope: INPUT -> PROCESS -> OUTPUT

// Functional programming is about:

// Isolated functions - there is no dependence on the state of the program, 
// which includes global variables that are subject to change

// Pure functions - the same input always gives the same output

// Functions with limited side effects - any changes, or mutations, 
// to the state of the program outside the function are carefully controlled


// Function that returns a string representing a cup of green tea
// const prepareTea = () => 'greenTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (numOfCups) => {
//     const teaCups = [];

//     for (let cups = 1; cups <= numOfCups; cups += 1) {
//         const teaCup = prepareTea();
//         teaCups.push(teaCup);
//     }
//     return teaCups;
// };

// // Only change code below this line
// const tea4TeamFCC = getTea(40);
// // Only change code above this line

// ////////////////////////////////////////////////////////////////////////

// 
// Section 2: Understand Functional Programming Terminology
// 
// Prepare 27 cups of green tea and 13 cups of black tea and store them 
// in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. 
// Note that the getTea function has been modified so it now takes a function as the first argument.
// Note: The data (the number of cups of tea) is supplied as the last argument. 
// We'll discuss this more in later lessons.

// Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line

console.log(
    tea4GreenTeamFCC,
    tea4BlackTeamFCC
);
// ////////////////////////////////////////////////////////////////////////