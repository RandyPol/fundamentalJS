////////////////////////////////////////////////////////////////////////
////////////JavaScript Algorithms and Data Structures Projects//////////
////////////////////////////////////////////////////////////////////////
// 
// Roman Numeral Converter
// 
// 
// Convert the given number into a roman numeral.


function convertToRoman(num) {
    const finalRoman = [];
    const arabicNum = [1, 4, 5, 9, 10, 40, 50, 90,
        100, 400, 500, 900, 1000]
    const romanNum = ["I", "IV", "V", "IX", "X", "XL",
        "L", "XC", "C", "CD", "D", "CM", "M"]

    let i = 12

    while (num) {
        let div = Math.floor(num / arabicNum[i]);
        if (div) {
            finalRoman.push(romanNum[i].repeat(div))
        }
        num %= arabicNum[i];
        i -= 1;
    }
    return finalRoman.join('')
}

console.log(convertToRoman(4553));


////////////////////////////////////////////////////////////////////////