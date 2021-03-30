////////// Replace special characters with HTML entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
    const strAr = [...str];
    const specialChars = [`&`,`<`,`>`,`"`,`'`];
    const htmlEncode = char => {
        const val = 
            char === `&` ? `&amp;` :
            char === `<` ? `&lt;`  :
            char === `>` ? `&gt;`  :
            char === `"` ? `&quot;`  :
            char === `'` ? `&apos;` : "NA";
        return val;
    };

    strAr
        .forEach( (letter, idx) => {
            if (specialChars.includes(letter)) {
                strAr.splice(idx, 1, htmlEncode(letter));
            }
        });
    console.log(strAr.join(''))

    return strAr.join('');
}
  
//   convertHTML("Dolce & Gabbana");



////////// Binary to text

// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


function binaryAgent(str) {
    const alpha = [...`abcdefghijklmnopqrstuvwxyx`];
    const nums = str.split(' ').map( el => parseInt(el,2));
    let letters = '';
    
    for (let val of nums){
        
        let currentLetter;
        if (val > 91){
            currentLetter = alpha[+val - 65 -26 -6].toLowerCase();
        }
        else if (val >= 65){
            currentLetter = alpha[+val - 65].toUpperCase();
        }
        else{
            currentLetter = 
                val === 39 ? `'`:
                val === 32 ? ` `:
                val === 33 ? `!`:
                val === 63 ? `?`: 'idk'
            ;
        }
        letters += currentLetter;
    }
    return letters;
}

// const val =   binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")

// console.log(val);




////////// Map the Debris

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
// You can read about orbital periods on Wikipedia.
// The values should be rounded to the nearest whole number. The body being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.

function orbitalPeriod(arr) {

    var GM = 398600.4418;
    var earthRadius = 6367.4447; // KM    
    const returnObj = [];

    const getOrbitalPeriod = altitude => {
        // Using Kepler's Third Law
        // T = (2 * PI) * sqrt of ( semi-major axis ** 3 / GM)
        const distanceFromCenter = altitude + earthRadius;
        const square = Math.sqrt((distanceFromCenter ** 3) / GM );
        const time = Math.round(2 * Math.PI * square);
        return time;
    
    };

    for ( let [key, val] of Object.entries(arr)){
        const orbitalPeriod = getOrbitalPeriod(val.avgAlt);
        const obj = {name: val.name, orbitalPeriod: orbitalPeriod};
        returnObj.push(obj);
    }
  
    console.log(returnObj);
  
    return returnObj;

}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);




////////// Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let workingString = '';

    for ( let i = 0; i < str.length; i++){
        
        if (alpha.indexOf(str[i]) === -1){
            workingString += str[i];
            continue;
        }

        let alphaIdx = alpha.indexOf(str[i]) - 13;
        if ( alphaIdx < 0) alphaIdx = 26 + alphaIdx;

        workingString += alpha[alphaIdx];
    }
    console.log(workingString);

    return workingString;
}
  
// rot13("SERR PBQR PNZC");




////////// Telephone Number Validator

// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
    let workingString = str.replace(/\(\d{3}\)/g,'P000');

    const test = /^(P|1[ P]*)?(\d{3})[- ]*\d{3}[- ]*\d{4}$/g.test(workingString);     

    return test;
}

// telephoneCheck("555-555-5555");



////////// Roman Numeral Converter

// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.


// no more than three in a row
//  I = 1
//  V = 5
//  X = 10
//  L = 50
//  C = 100
//  D = 500
//  M = 1000

function convertToRoman(number) {
    
    const romanNumerals = ['I','V','X','L','C','D','M'];
    let workingString = '';
    let workingNumber = number;

    const isMultipleOf = (num, multiple) => {

        let remainder = num;
        let multiples = 0;

        if ( num >= multiple){
            multiples = Math.trunc(num / multiple);
            remainder -= Math.trunc(num / multiple) * multiple;
            // Return object with num of multiples and remainder
            return { multiples, remainder};
        }

        return false;
    }
    const addNumerals = (num, mult, numeral) => {

        const multiplesOfNum = isMultipleOf(num, mult);
        
        if ( multiplesOfNum ){
            const numOfM = multiplesOfNum.multiples;

            // Set the working number as the remainder left over
            workingNumber -= mult * numOfM;

            // If we are repeating the same roman numeral more than 3 times ...
            // Include next roman numeral
            if ( numOfM > 3){
                const overAmount = numOfM - 3;
                const currentNumeralIdx = romanNumerals.indexOf(numeral);
                const nextNumeralIdx = currentNumeralIdx + 1;
                const lastLetter = workingString.split('').slice(-1)[0];

                // If the last letter in working string is same as next roman numeral... 
                if (romanNumerals.indexOf(lastLetter) === nextNumeralIdx){

                    // Remove last roman numeral in working string
                    workingString = workingString.split('').slice(0, -1).join('');
                    // Include current number number of times it's over 3
                    workingString += `${numeral}`.repeat(overAmount);
                    // Follow with next Roman numeral
                    workingString += `${romanNumerals[nextNumeralIdx + 1]}`;

                }
                else{
                    workingString += `${numeral}`.repeat(overAmount);
                    workingString += `${romanNumerals[nextNumeralIdx]}`;
                }
            }
            else{
                workingString += `${numeral}`.repeat(numOfM);
            }
        }
    }
    addNumerals( workingNumber, 1000, 'M' );
    addNumerals( workingNumber, 500, 'D' );
    addNumerals( workingNumber, 100, 'C' );
    addNumerals( workingNumber, 50, 'L' );
    addNumerals( workingNumber, 10, 'X' );
    addNumerals( workingNumber, 5, 'V' );
    addNumerals( workingNumber, 1, 'I' );

    console.log(workingString);
    return workingString;
}
   
// convertToRoman(9);
// convertToRoman(3614);