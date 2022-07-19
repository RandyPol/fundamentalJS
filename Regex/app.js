// Section 1: Using the Test Method
// 
// 
// Regular expressions are used in programming languages 
// to match parts of strings. You create patterns to help you do that matching.
// Apply the regex myRegex on the string myString using the .test() method.

// let myString = "Hello, World!";
// let myRegex = /Hello/;
// let result = myRegex.test(myString);
// console.log(result)




// Section 2: Match Literal String
// 
// 
// Complete the regex waldoRegex to find "Waldo" in the
// string waldoIsHiding with a literal match.

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/; // Change this line
// let result = waldoRegex.test(waldoIsHiding);


////////////////////////////////////////////////////////////////////////////

// Section 3: Match a Literal String with Different Possibilities
// 
// 
// Complete the regex petRegex to match the pets dog, cat, bird, or fish.

// let petString = "James has a pet cat.";
// let petRegex = /dog|cat|bird|fish/; // Change this line
// let result = petRegex.test(petString);

////////////////////////////////////////////////////////////////////////////



// Section 4: Ignore Case While Matching
// 
// 
// Write a regex fccRegex to match freeCodeCamp, no matter its case.
// Your regex should not match any abbreviations or variations with spaces.

// let myString = "freeCodeCamp";
// let fccRegex = /freeCodeCamp/i; //The i flag is use to match anycases
// let result = fccRegex.test(myString);

////////////////////////////////////////////////////////////////////////////

// Section 5: Extract Matches
// 
// 
// So far, you have only been checking if a pattern exists or not within a string. 
// You can also extract the actual matches you found with the .match() method.
// 
// Apply the .match() method to extract the string coding.

// let extractStr = "Extract the word 'coding' from this string.";
// let codingRegex = /coding/; // Change this line
// let result = extractStr.match(codingRegex); // Change this line
// console.log(result[0])
////////////////////////////////////////////////////////////////////////////

// Section 6: Find More Than the First Match Using: Flag g
// 
// 
// To search or extract a pattern more than once, you can use the global search flag: g.
// 
// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.
// Note
// You can have multiple flags on your regex like /search/gi


// let twinkleStar = "Twinkle, twinkle, little star";
// let starRegex = /twinkle/ig;
// let result = twinkleStar.match(starRegex);
// console.log(result)
////////////////////////////////////////////////////////////////////////////


// Section 7: Match Anything with Wildcard Period
// 
// 
// The wildcard character . will match any one character. The wildcard is also 
// called dot and period. You can use the wildcard character just like any other 
// character in the regex. For example, if you wanted to match hug, huh, hut, and hum, 
// you can use the regex /hu./ to match all four words.
// 
// 
// Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun,
//  and bun. Your regex should use the wildcard character.



// let exampleStr = "Let's have fun with regular expressions!";
// let unRegex = /.un/;
// let result = unRegex.test(exampleStr);
// console.log(result)
////////////////////////////////////////////////////////////////////////////



// Section 8: Match Single Character with Multiple Possibilities
// 
// 
// Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex 
// to find all the vowels in the string quoteSample.

// Note: Be sure to match both upper- and lowercase vowels.

// let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
// let vowelRegex = /[aeiou]/gi; // Change this line

// let result = quoteSample.match(vowelRegex); // Change this line
// console.log(result)
////////////////////////////////////////////////////////////////////////////


// Section 9: Match Letters of the Alphabet
// 
// 
// Inside a character set, you can define a range of characters
//  to match using a hyphen character: -.
// 
// Match all the letters in the string quoteSample.
// Note: Be sure to match both uppercase and lowercase letters.

// let quoteSample = "The quick brown fox jumps over the lazy dog.";
// let alphabetRegex = /[a-z]/ig; // Change this line
// let result = quoteSample.match(alphabetRegex); // Change this line
// console.log(result)
////////////////////////////////////////////////////////////////////////////


// Section 10: Match Numbers and Letters of the Alphabet
// 
// 
// Using the hyphen (-) to match a range of characters is not limited to letters. 
// It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
// 
// Create a single regex that matches a range of letters between h and s, and a range of numbers 
// between 2 and 6. Remember to include the appropriate flags in the regex.match(alphabetRegex);


// let quoteSample = "Blueberry 3.141592653s are delicious.";
// let myRegex = /[h-s2-6]/ig;
// let result = quoteSample.match(myRegex);
// console.log(result)


////////////////////////////////////////////////////////////////////////////



// Section 11: Match Single Characters Not Specified
// 
// 
// To create a negated character set, you place a caret character (^) 
// after the opening bracket and before the characters you do not want to match.
// Create a single regex that matches all characters that are not a number or a vowel.
//  Remember to include the appropriate flags in the regex.

// let quoteSample = "3 blind mice.";
// let myRegex = /[^aeiou0-9]/gi; // Change this line
// let result = quoteSample.match(myRegex);
// console.log(result)

////////////////////////////////////////////////////////////////////////////





// Section 12: Match Characters that Occur One or More Times
// 
// 
// Sometimes, you need to match a character (or group of characters) 
// that appears one or more times in a row. This means it occurs at least once, 
// and may be repeated.
// 
// You want to find matches when the letter s occurs one or more times in Mississippi. 
// Write a regex that uses the + sign.

// let difficultSpelling = "Mississippi";
// let myRegex = /s+/gi;
// let result = difficultSpelling.match(myRegex);
// console.log(result)
////////////////////////////////////////////////////////////////////////////






// Section 13: Match Characters that Occur Zero or More Times
// 
// The last challenge used the plus + sign to look for characters 
// that occur one or more times. There's also an option that matches characters 
// that occur zero or more times.
// The character to do this is the asterisk or star: *.


// const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
// // Only change code below this line
// let chewieRegex = /Aa*/; // Change this line
// // Only change code above this line

// let result = chewieQuote.match(chewieRegex);
// console.log(result)


////////////////////////////////////////////////////////////////////////////



// Section 14: Find Characters with Lazy Matching
// 
// In regular expressions, a greedy match finds the longest possible
//  part of a string that fits the regex pattern and returns it as a match. 
//  The alternative is called a lazy match, which finds the smallest possible 
//  part of the string that satisfies the regex pattern.
// 
// Fix the regex /<.*>/ to return the HTML tag <h1> and not the
// text "<h1>Winter is coming</h1>". Remember the wildcard . in a 
// regular expression matches any character.

// let text = "<h1>Winter is coming</h1>";
// let myRegex = /<.*?>/; // Change this line
// let result = text.match(myRegex);
// console.log(result)

////////////////////////////////////////////////////////////////////////////



// Section 15: Find One or More Criminals in a Hunt

// 
// Time to pause and test your new regex writing skills. 
// A group of criminals escaped from jail and ran away, but 
// you don't know how many. However, you do know that they stay 
// close together when they are around other people. You are responsible 
// for finding all of the criminals at once.
// // 

// let reCriminals = /C+/g; // Change this line
////////////////////////////////////////////////////////////////////////////





// Section 16: Match Beginning String Patterns

// 
// ^ 
// Outside of a character set, the caret is used to search 
// for patterns at the beginning of strings.
// Use the caret character in a regex to find Cal only in the 
// beginning of the string rickyAndCal.

// let rickyAndCal = "Cal and Ricky both like racing.";
// let calRegex = /^Cal/;
// let result = calRegex.test(rickyAndCal);

////////////////////////////////////////////////////////////////////////////


// Section 17: Match Ending String Patterns
// 
// $
// You can search the end of strings using the dollar sign 
// character $ at the end of the regex
// 
// Use the anchor character ($) to match the string caboose at the end of the string caboose.

// let caboose = "The last car on a train is the caboose";
// let lastRegex = /caboose$/;
// let result = lastRegex.test(caboose);
// console.log(result)
////////////////////////////////////////////////////////////////////////////


// Section 18: Match All Letters and Numbers
// 
// \w
// Use the shorthand character class \w to count the number of alphanumeric 
// characters in various quotes and strings.

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
console.log(result)
console.log(quoteSample.match(alphabetRegexV2))

////////////////////////////////////////////////////////////////////////////
