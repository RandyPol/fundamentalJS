// Setup
// const recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name']
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette']
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: []
//     },
//     5439: {
//         albumTitle: 'ABBA Gold'
//     }
// };

// Only change code below this line
// Complete the function using the rules below to modify the object passed to the function.
//   1) Your function must always return the entire record collection object.
//   2) If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//   3) If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
//   4) If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
//   5) If value is an empty string, delete the given prop property from the album.


// function updateRecords(records, id, prop, value) {
//     const recordCol = records;
//     const singleAlbum = recordCol[id];
//     //   2) If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
//     if (prop === 'tracks') {
//         if (singleAlbum.hasOwnProperty(prop)) {
//             if (value === '') {
//                 delete singleAlbum[prop]
//             } else {
//                 singleAlbum[prop].push(value)
//             }
//         } else {
//             if (value !== '') {
//                 singleAlbum[prop] = [value]
//             }
//         }
//     } else {
//         if (value !== '') {
//             singleAlbum[prop] = value;
//         } else {
//             delete singleAlbum[prop];
//         }
//     }

//     //   1) Your function must always return the entire record collection object.
//     return recordCol;
// }

// console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));
// console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me"))

function multiply(arr, n) {
    if (n <= 0) {
        return 1;
    } else {
        console.log(`Value of n =${n} and (n-1) = ${n - 1}. The result of arr[n-1] = ${arr[n - 1]}`)
        return multiply(arr, n - 1) * arr[n - 1];

    }
}

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(multiply(lista, 5))

// multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]

// multiply(lista, 5)   
// --> multiply(lista, 4) * arr[4] 
// --> multiply(lista, 3) * arr[3] * arr[4]
// --> multiply(lista, 2) * arr[2] * arr[3] * arr[4] 
// --> multiply(lista, 1) * arr[1] * arr[2] * arr[3] * arr[4] 
// --> multiply(lista, 0) * arr[0] * arr[1] * arr[2] * arr[3] * arr[4] 
// --> 1 * arr[0] * arr[1] * arr[2] * arr[3] * arr[4] 

function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0
    } else {
        return sum(arr, n - 1) + arr[n - 1];
    }
}
    // Only change code above this line
