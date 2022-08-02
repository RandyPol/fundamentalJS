////////////////////////////////////////////////////////////////////////
////////////JavaScript Algorithms and Data Structures Projects//////////
////////////////////////////////////////////////////////////////////////
// 
// Caesars Cipher
// 
// 
// One of the simplest and most widely known ciphers is a Caesar cipher, also known 
// as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), 
// but do pass them on.


function rot13(str) {
    let splitStrArray = str.split(" ");

    let mapResults = splitStrArray.map(x => {
        return x.split('').reduce((acc, value) => {
            if (/^[A-Z]/.test(value)) {
                let valueCode = value.charCodeAt();
                let valueCode13 = value.charCodeAt() + 13;
                return valueCode13 >= 91 ? acc + String.fromCharCode(valueCode - 13) : acc + String.fromCharCode(valueCode13)
            } else {
                return acc + value
            }
        }, '')

    }
    )

    return mapResults.join(' ')
}


console.log(rot13("SERR! PBQR PNZC"));

////////////////////////////////////////////////////////////////////////