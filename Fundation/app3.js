// Use the parseInt Function
// The parseInt() function parses a string and returns an integer. 

// Use parseInt() in the convertToInteger function 
// so it converts the input string str into an integer, 
// and returns it.


function convertToInteger(str) {
    return parseInt(str);
}

// convertToInteger("56");

// Use the parseInt Function with a Radix
// The parseInt() function parses a string and returns an integer. 
// It takes a second argument for the radix, which specifies the base of the number in the string. 
// The radix can be an integer between 2 and 36.

function convertToInteger(str) {
    return parseInt(str, 2)
}

console.log(convertToInteger("10011"))