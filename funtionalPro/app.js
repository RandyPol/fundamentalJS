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

//////////////////////////////////////////////////////////////////////////

// 
// Section 2: Understand Functional Programming Terminology
// 
// Prepare 27 cups of green tea and 13 cups of black tea and store them 
// in tea4GreenTeamFCC and tea4BlackTeamFCC variables, respectively. 
// Note that the getTea function has been modified so it now takes a function as the first argument.
// Note: The data (the number of cups of tea) is supplied as the last argument. 
// We'll discuss this more in later lessons.

// Function that returns a string representing a cup of green tea
// const prepareGreenTea = () => 'greenTea';

// // Function that returns a string representing a cup of black tea
// const prepareBlackTea = () => 'blackTea';

// /*
// Given a function (representing the tea type) and number of cups needed, the
// following function returns an array of strings (each representing a cup of
// a specific type of tea).
// */
// const getTea = (prepareTea, numOfCups) => {
//     const teaCups = [];

//     for (let cups = 1; cups <= numOfCups; cups += 1) {
//         const teaCup = prepareTea();
//         teaCups.push(teaCup);
//     }
//     return teaCups;
// };

// // Only change code below this line
// const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
// const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// // Only change code above this line

// console.log(
//     tea4GreenTeamFCC,
//     tea4BlackTeamFCC
// );
//////////////////////////////////////////////////////////////////////////


// 
// Section 3: Understand the Hazards of Using Imperative Code
// 
// tabs is an array of titles of each site open within the window
// const Window = function (tabs) {
//     this.tabs = tabs; // We keep a record of the array inside the object
// };

// // When you join two windows into one window
// Window.prototype.join = function (otherWindow) {
//     this.tabs = this.tabs.concat(otherWindow.tabs);
//     return this;
// };

// // When you open a new tab at the end
// Window.prototype.tabOpen = function (tab) {
//     this.tabs.push('new tab'); // Let's open a new tab for now
//     return this;
// };

// // When you close a tab
// Window.prototype.tabClose = function (index) {

//     // Only change code below this line

//     const tabsBeforeIndex = this.tabs.slice(0, index); // Get the tabs before the tab
//     const tabsAfterIndex = this.tabs.slice(index + 1); // Get the tabs after the tab

//     this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Join them together

//     // Only change code above this line

//     return this;
// };

// // Let's create three browser windows
// const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Your mailbox, drive, and other work sites
// const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Social sites
// const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Entertainment sites

// // Now perform the tab opening, closing, and other operations
// const finalTabs = socialWindow
//     .tabOpen() // Open a new tab for cat memes
//     .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
//     .join(workWindow.tabClose(1).tabOpen());
// console.log(finalTabs.tabs);

//////////////////////////////////////////////////////////////////////////


// 
// Section 4: Avoid Mutations and Side Effects Using Functional Programming
// 
// 
// Recall that in functional programming, changing or altering things is called mutation, 
// and the outcome is called a side effect. A function, ideally, should be a pure function, 
// meaning that it does not cause any side effects.
// 
// Let's try to master the functional programming  discipline and not alter any variable or object in our code.
// 
// Fill in the code for the function incrementer so it returns the value of the global variable fixedValue increased by one.


// The global variable
// let fixedValue = 4;

// function incrementer() {
//     // Only change code below this line

//     return fixedValue + 1
//     // Only change code above this line
// }

// console.log(incrementer())
// console.log(fixedValue)
//////////////////////////////////////////////////////////////////////////




// 
// Section 5: Pass Arguments to Avoid External Dependence in a Function
// 
// 
// Another principle of functional programming is to always declare your dependencies explicitly. 
// This means if a function depends on a variable or object being present, then pass that variable or 
// object directly into the function as an argument.

// Let's update the incrementer function to clearly declare its dependencies.

// Write the incrementer function so it takes an argument, and then returns a result after increasing the value by one.

// The global variable
// let fixedValue = 4;
// // Only change code below this line
// function incrementer(arg) {
//     return arg + 1
//     // Only change code above this line
// }

//////////////////////////////////////////////////////////////////////////



// 
// Section 6: Refactor Global Variables Out of Functions
// 
// 
// Rewrite the code so the global array bookList is not changed inside either function. 
// The add function should add the given bookName to the end of the array passed to it and return a new array (list). 
// The remove function should remove the given bookName from the array passed to it.

// Note: Both functions should return an array, and any new parameters should be added before the bookName parameter.

// // The global variable
// const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// // Change code below this line
// function add(arra, bookName) {
//     const newArra = [...arra]
//     newArra.push(bookName);
//     return newArra;

//     // Change code above this line
// }

// // Change code below this line
// function remove(arra, bookName) {
//     const newArra = [...arra]
//     const indexOfItem = newArra.indexOf(bookName);
//     if (indexOfItem >= 0) {

//         newArra.splice(indexOfItem, 1);
//         return newArra;

//         // Change code above this line
//     }
// }
// console.log(add("KLK"))

//////////////////////////////////////////////////////////////////////////


// 
// Section 7: Use the map Method to Extract Data from an Array
// 
// 
// The watchList array holds objects with information on several movies. Use map on watchList to assign 
// a new array of objects to the ratings variable. Each movie in the new array should have only a title key 
// with the name of the film, and a rating key with the IMDB rating. The code in the editor currently uses a for loop to do this, 
// so you should replace the loop functionality with your map expression.

// The global variable
// const watchList = [
//     {
//         "Title": "Inception",
//         "Year": "2010",
//         "Rated": "PG-13",
//         "Released": "16 Jul 2010",
//         "Runtime": "148 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Christopher Nolan",
//         "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//         "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//         "Language": "English, Japanese, French",
//         "Country": "USA, UK",
//         "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.8",
//         "imdbVotes": "1,446,708",
//         "imdbID": "tt1375666",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Interstellar",
//         "Year": "2014",
//         "Rated": "PG-13",
//         "Released": "07 Nov 2014",
//         "Runtime": "169 min",
//         "Genre": "Adventure, Drama, Sci-Fi",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan, Christopher Nolan",
//         "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "Language": "English",
//         "Country": "USA, UK",
//         "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.6",
//         "imdbVotes": "910,366",
//         "imdbID": "tt0816692",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "The Dark Knight",
//         "Year": "2008",
//         "Rated": "PG-13",
//         "Released": "18 Jul 2008",
//         "Runtime": "152 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//         "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//         "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "Language": "English, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//         "Metascore": "82",
//         "imdbRating": "9.0",
//         "imdbVotes": "1,652,832",
//         "imdbID": "tt0468569",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "Rated": "PG-13",
//         "Released": "15 Jun 2005",
//         "Runtime": "140 min",
//         "Genre": "Action, Adventure",
//         "Director": "Christopher Nolan",
//         "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//         "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//         "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//         "Language": "English, Urdu, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//         "Metascore": "70",
//         "imdbRating": "8.3",
//         "imdbVotes": "972,584",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Avatar",
//         "Year": "2009",
//         "Rated": "PG-13",
//         "Released": "18 Dec 2009",
//         "Runtime": "162 min",
//         "Genre": "Action, Adventure, Fantasy",
//         "Director": "James Cameron",
//         "Writer": "James Cameron",
//         "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//         "Language": "English, Spanish",
//         "Country": "USA, UK",
//         "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//         "Metascore": "83",
//         "imdbRating": "7.9",
//         "imdbVotes": "876,575",
//         "imdbID": "tt0499549",
//         "Type": "movie",
//         "Response": "True"
//     }
// ];

// Only change code below this line

// const ratings = [];
// for (let i = 0; i < watchList.length; i++) {
//     ratings.push({ title: watchList[i]["Title"], rating: watchList[i]["imdbRating"] });
// }


// const ratings = watchList.map(objItem => {
//     let { Title: title, imdbRating: rating } = objItem
//     return { title, rating }

// })
// console.log(ratings)

// const ratings = watchList.map(item => ({
//     title: item["Title"],
//     rating: item["imdbRating"]
//   }));

// const ratings = watchList.map(({ Title: title, imdbRating: rating }) => ({title, rating}));
//////////////////////////////////////////////////////////////////////////


// 
// Section 8: Implement map on a Prototype
// 
// 
// 
// Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). 
// You should not use the built-in map method. The Array instance can be accessed in the myMap method using this.

// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myMap = function (callback) {
//     const newArray = [];
//     // Only change code below this line
//     for (let item of this) {
//         newArray.push(callback(item))
//     }
//     // Only change code above this line
//     return newArray;
// };

// const new_s = s.myMap(function (item) {
//     return item * 2;
// });
// console.log(new_s)
//////////////////////////////////////////////////////////////////////////


// 
// Section 9: Use the filter Method to Extract Data from an Array
// 
// 
// The variable watchList holds an array of objects with information on several movies. 
// Use a combination of filter and map on watchList to assign a new array of objects with 
// only title and rating keys. The new array should only include objects where imdbRating 
// is greater than or equal to 8.0. Note that the rating values are saved as strings in the 
// object and you may need to convert them into numbers to perform mathematical operations on them.


// The global variable
// const watchList = [
//     {
//         "Title": "Inception",
//         "Year": "2010",
//         "Rated": "PG-13",
//         "Released": "16 Jul 2010",
//         "Runtime": "148 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Christopher Nolan",
//         "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
//         "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
//         "Language": "English, Japanese, French",
//         "Country": "USA, UK",
//         "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.8",
//         "imdbVotes": "1,446,708",
//         "imdbID": "tt1375666",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Interstellar",
//         "Year": "2014",
//         "Rated": "PG-13",
//         "Released": "07 Nov 2014",
//         "Runtime": "169 min",
//         "Genre": "Adventure, Drama, Sci-Fi",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan, Christopher Nolan",
//         "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
//         "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//         "Language": "English",
//         "Country": "USA, UK",
//         "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
//         "Metascore": "74",
//         "imdbRating": "8.6",
//         "imdbVotes": "910,366",
//         "imdbID": "tt0816692",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "The Dark Knight",
//         "Year": "2008",
//         "Rated": "PG-13",
//         "Released": "18 Jul 2008",
//         "Runtime": "152 min",
//         "Genre": "Action, Adventure, Crime",
//         "Director": "Christopher Nolan",
//         "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
//         "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
//         "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
//         "Language": "English, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
//         "Metascore": "82",
//         "imdbRating": "9.0",
//         "imdbVotes": "1,652,832",
//         "imdbID": "tt0468569",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Batman Begins",
//         "Year": "2005",
//         "Rated": "PG-13",
//         "Released": "15 Jun 2005",
//         "Runtime": "140 min",
//         "Genre": "Action, Adventure",
//         "Director": "Christopher Nolan",
//         "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
//         "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
//         "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
//         "Language": "English, Urdu, Mandarin",
//         "Country": "USA, UK",
//         "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
//         "Metascore": "70",
//         "imdbRating": "8.3",
//         "imdbVotes": "972,584",
//         "imdbID": "tt0372784",
//         "Type": "movie",
//         "Response": "True"
//     },
//     {
//         "Title": "Avatar",
//         "Year": "2009",
//         "Rated": "PG-13",
//         "Released": "18 Dec 2009",
//         "Runtime": "162 min",
//         "Genre": "Action, Adventure, Fantasy",
//         "Director": "James Cameron",
//         "Writer": "James Cameron",
//         "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
//         "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
//         "Language": "English, Spanish",
//         "Country": "USA, UK",
//         "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
//         "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
//         "Metascore": "83",
//         "imdbRating": "7.9",
//         "imdbVotes": "876,575",
//         "imdbID": "tt0499549",
//         "Type": "movie",
//         "Response": "True"
//     }
// ];

// Only change code below this line
// console.log(watchList.length)
// const filteredList = watchList.filter(({ imdbRating: rating }) => +rating >= 8.0)
//     .map(({ Title: title, imdbRating: rating }) => ({ title, rating }))

// // Only change code above this line
// console.log(filteredList.length)
// console.log(filteredList);

//////////////////////////////////////////////////////////////////////////


// 
// Section 10: Implement the filter Method on a Prototype
// 
// 
// Write your own Array.prototype.myFilter(), which should behave exactly like Array.prototype.filter(). 
// You should not use the built-in filter method. The Array instance can be accessed in the myFilter method using this.

// The global variable
// const s = [23, 65, 98, 5];

// Array.prototype.myFilter = function (callback) {
//     // Only change code below this line
//     const newArray = [];

//     for (let item of this) {
//         if (callback(item)) {
//             newArray.push(item)
//         }
//     }


//     // Only change code above this line
//     return newArray;
// };

// const new_s = s.myFilter(function (item) {
//     return item % 2 === 1;
// });

// console.log(new_s)
//////////////////////////////////////////////////////////////////////////


// 
// Section 11: Return Part of an Array Using the slice Method
// 
// 
// Use the slice method in the sliceArray function to return part of the anim array given 
// the provided beginSlice and endSlice indices. The function should return an array.


// function sliceArray(anim, beginSlice, endSlice) {
//     // Only change code below this line

//     return anim.slice(beginSlice, endSlice)
//     // Only change code above this line
// }

// const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
// sliceArray(inputAnim, 1, 3);


//////////////////////////////////////////////////////////////////////////

// 
// Section 12: Remove Elements from an Array Using slice Instead of splice
// 
// 
// Rewrite the function nonMutatingSplice by using slice instead of splice. 
// It should limit the provided cities array to a length of 3, and return 
// a new array with only the first three items.

// Do not mutate the original array provided to the function.

// function nonMutatingSplice(cities) {
//     // Only change code below this line
//     return cities.slice(0, 3);

//     // Only change code above this line
// }

// const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
// nonMutatingSplice(inputCities);

//////////////////////////////////////////////////////////////////////////

// 
// Section 13: Combine Two Arrays Using the concat Method
// 
// 
// Change the nonMutatingPush function so it uses concat to add newItem to 
// the end of original instead of push. The function should return an array.

// function nonMutatingPush(original, newItem) {
//     // Only change code below this line
//     return original.concat(newItem);

//     // Only change code above this line
// }

// const first = [1, 2, 3];
// const second = [4, 5];
// nonMutatingPush(first, second);


//////////////////////////////////////////////////////////////////////////


// 
// Section 14: Use the reduce Method to Analyze Data
// 
// 
// The variable watchList holds an array of objects with information on several movies. 
// Use reduce to find the average IMDB rating of the movies directed by Christopher Nolan. 
// Recall from prior challenges how to filter data and map over it to pull what you need. 
// You may need to create other variables, and return the average rating from getRating 
// function. Note that the rating values are saved as strings in the object and need to 
// be converted into numbers before they are used in any mathematical operations.

// The global variable


// function getRating(watchList) {
//     // Only change code below this line
//     let averageRating = watchList.filter(({ Director }) => Director === "Christopher Nolan")
//         .map(({ imdbRating }) => +imdbRating)
//     let totalNum = averageRating.length;
//     averageRating = averageRating.reduce((sum, item) => sum + item, 0) / totalNum


//     // Only change code above this line
//     return averageRating;
// }

// console.log(getRating(watchList));


//////////////////////////////////////////////////////////////////////////

// 
// Section 15: Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// 
// 
// Now that you have worked through a few challenges using higher-order functions 
// like map(), filter(), and reduce(), you now get to apply them to solve a more complex 
// challenge.
// 
// Complete the code for the squareList function using any combination of map(), filter(), 
// and reduce(). The function should return a new array containing the squares of only the 
// positive integers (decimal numbers are not integers) when an array of real numbers is passed
// to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.


// const squareList = arr => {
//     // Only change code below this line
//     return arr.filter(num => Number.isInteger(num) && num > 0).map(num => num ** 2)
//     // return arr;
//     // Only change code above this line
// };

// const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]);
// console.log(squaredIntegers);

//////////////////////////////////////////////////////////////////////////

// 
// Section 16: Sort an Array Alphabetically using the sort Method
// 
// 
// Use the sort method in the alphabeticalOrder function to sort the elements of 
// arr in alphabetical order. The function should return the sorted array.

// function alphabeticalOrder(arr) {
//     // Only change code below this line
//     return arr.sort((a, b) => {
//         return a.charCodeAt(0) - b.charCodeAt(0)
//     })
//     // return arr
//     // Only change code above this line
// }

// let klkA = ["a", "d", "c", "a", "z", "g"];
// console.log(klkA)
// console.log(alphabeticalOrder(klkA))
// console.log(klkA)


//////////////////////////////////////////////////////////////////////////


// 
// Section 17: Return a Sorted Array Without Changing the Original Array
// 
// 
// Use the sort method in the nonMutatingSort function to sort the elements of an
// array in ascending order.The function should return a new array, and not mutate 
// the globalArray variable.

// const globalArray = [5, 6, 3, 2, 9];

// function nonMutatingSort(arr) {
//     // Only change code below this line
//     return arr.map(num => num).sort((a, b) => (a === b ? 0 : a < b ? -1 : 1))

//     // Only change code above this line
// }

// console.log(nonMutatingSort(globalArray));
// console.log(globalArray)
//////////////////////////////////////////////////////////////////////////

// 
// Section 18: Split a String into an Array Using the split Method
// 
// 
// Use the split method inside the splitify function to split str into an array of words. 
// The function should return the array. Note that the words are not always separated by spaces, 
// and the array should not contain punctuation.


//////////////////////////////////////////////////////////////////////////


// 
// Section 18: Split a String into an Array Using the split Method
// 
// 
//Use the split method inside the splitify function to split str into an array of words. 
//The function should return the array. Note that the words are not always separated by spaces, 
//and the array should not contain punctuation.

// function splitify(str) {
//     // Only change code below this line

//     return str.split(/\s|\W/)
//     // Only change code above this line
// }

// console.log(splitify("Hello World,I-am code"));
//////////////////////////////////////////////////////////////////////////

// 
// Section 19: Combine an Array into a String Using the join Method
// 
// 
// Use the join method (among others) inside the sentensify function to make a sentence from the 
// words in the string str. The function should return a string. For example, I-like-Star-Wars 
// would be converted to I like Star Wars. For this challenge, do not use the replace method.

// function sentensify(str) {
//     // Only change code below this line

//     return str.split(/\W/).join(" ")
//     // Only change code above this line
// }

// console.log(sentensify("May-the-force-be-with-you"));

//////////////////////////////////////////////////////////////////////////


// // 
// // Section 20: Apply Functional Programming to Convert Strings to URL Slugs
// // 
// // 
// // Fill in the urlSlug function so it converts a string title and returns the hyphenated version 
// // for the URL. You can use any of the methods covered in this section, and don't use replace. 
// // Here are the requirements:

// // The input is a string with spaces and title-cased words

// // The output is a string with the spaces between words replaced by a hyphen (-)

// // The output should be all lower-cased letters

// // The output should not have any spaces

// // Only change code below this line
// function urlSlug(title) {
//     return title.trim().toLowerCase().split(/\W+/).join("-")
// }
// // Only change code above this line
// console.log(urlSlug(" Winter Is  Coming"));

//////////////////////////////////////////////////////////////////////////

// 
// Section 21: Use the every Method to Check that Every Element in an Array Meets a Criteria
// 
// 
// Use the every method inside the checkPositive function to check if every element in arr 
// is positive. The function should return a Boolean value.

// function checkPositive(arr) {
//     // Only change code below this line

//     return arr.every(num => num > 0)
//     // Only change code above this line
// }

// console.log(checkPositive([1, 2, 3, -4, 5]));

//////////////////////////////////////////////////////////////////////////

// 
// Section 22: Use the some Method to Check that Any Elements in an Array Meet a Criteria
// 
// 
// Use the some method inside the checkPositive function to check if any element in arr is positive. 
// The function should return a Boolean value.

// function checkPositive(arr) {
//     // Only change code below this line
//     return arr.some(num => num > 0)

//     // Only change code above this line
// }

// checkPositive([1, 2, 3, -4, 5]);

//////////////////////////////////////////////////////////////////////////

// 
// Section 23: Introduction to Currying and Partial Application
// 
// 
// Fill in the body of the add function so it uses currying to add parameters x, y, and z.

// function add(x) {
//     // Only change code below this line
//     return (y) => {
//         return (z) => {
//             return x + y + z
//         }
//     }

//     // Only change code above this line
// }

// console.log(add(10)(20)(30));

//////////////////////////////////////////////////////////////////////////
