
///// Flatten and uniqued
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(...arr) {
    const allVals = [];
    arr.forEach( el => allVals.push(...el));
    const uniqueVals = [...new Set(allVals)];
    return uniqueVals;
}
  
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);


///// Find missing letter
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


function returnMissingzLetter(str) {

    const alpha = [...'abcdefghijklmnopqrstuvwxyz'];

    for (let [key, val] of Object.entries(str)){
        const idxInAlpha = alpha.indexOf(val);
        // check index of next letter 
        if ( str[+key + 1] != alpha[idxInAlpha + 1] ) return alpha[idxInAlpha + 1];
    }

    return undefined;
}
  
// fearNotLetter("abce");



///// Difference between arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var newArr = [];

    for (let i = 0; i < arr1.length; i++){
        if (arr2.indexOf(arr1[i]) === -1) newArr.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++){
        if (arr1.indexOf(arr2[i]) === -1) newArr.push(arr2[i]);
    }

    return newArr;
}



///// Seek & Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...noIncludes) {
    const newArr = [];
    
    for (let value of Object.values(arr)){
      // if not in no includes list, add to new array
      if (noIncludes.indexOf(value) === -1) newArr.push(value)
  
    }
    
    return newArr;
}
  
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);


///// Search & Replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


function myReplace(str, before, after) {
    // function to make sure whole string matches
    const checkWholeMatch = startingIdx =>{
        for ( let i = startingIdx; i < before.length + startingIdx; i++){
            if (str[i] != before[i - startingIdx ]) return 0;
        }
        return 1;
    };

    // find first matching letter
    for (let [key, val] of Object.entries(str)){
        // if a matching first letter is found...
        if (val === before[0]){
            // check if whole search term subsequently matches
            if (checkWholeMatch(+key)){

                // if a match is found
                const startingIdx = +key;
                // replace substring
                const arr = [...str];
                // if OG string starts with uppercase letter
                if (str[startingIdx] === str[startingIdx].toUpperCase()) {
                    after = after[0].toUpperCase() + after.slice(1);
                }
                else{
                    after = after[0].toLowerCase() + after.slice(1);
                }
                arr.splice(startingIdx, +before.length, after);
                
                return arr.join('');
            } 
                
        }
    }
}
  
// console.log(myReplace("I dog ok", "dog", "leaped"));            
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");



///// DNA Pairing
// The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
// Base pairs are a pair of AT and CG. Match the missing element to the provided character.
// Return the provided character as the first element in each array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]
// The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.


function pairElement(str) {
    const arr = [];

    const returnPair = char =>
        char === "A" ? "T" :
        char === "T" ? "A" :
        char === "C" ? "G" :
        char === "G" ? "C" : "NA";

    for ( let val of str){
        arr.push([val,returnPair(val)]);
    }
    return arr;
}

// pairElement("GCG");




///// Piglatin-ize

// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
    
    const vowels = ['a','e','i','o','u'];
    let pigLatinized = '';

    let firstVowelIdx = -1;
    let consonantChunk;

    // check if word begins with a vowel or has no vowel
    if (vowels.includes(str[0])){
        return str + 'way';
    } 
    else{
        // find index of first vowel
        for ( let [key,value] of Object.entries(str)){
            if ( vowels.includes(value)){
                firstVowelIdx = key;
                consonantChunk = str.slice(0,firstVowelIdx);
                break;
            };
        }
        // if no vowel is found in word
        if ( firstVowelIdx === -1) return str + 'ay';
    }

    // slice off letters before first vowel
    pigLatinized = str.slice(firstVowelIdx);
    // move those initial consonants to end of word
    pigLatinized += consonantChunk + 'ay';

    return pigLatinized;
}
  
//   translatePigLatin("rhythm");



///// Spinal Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {

    const lettersArr = [];
    
    let spacedString = str.replace(/[\s-_?]+/g,'-');

    console.log(spacedString);

    for (let [k,v] of Object.entries(spacedString)){
        if (+k === 0) {
            lettersArr.push(v);
            continue;
        }

        if (v === v.toUpperCase() &&
            spacedString[+k -1] != "-" &&
            spacedString[+k -1] === spacedString[+k -1].toLowerCase()
           ){
            lettersArr.push(`-${v}`);
        }
        else{
            lettersArr.push(v);
        }

    }

    return lettersArr.join('').replace(/-+/g,'-').toLowerCase();


}
  
//   spinalCase('This Is Spinal TapPerson');



///// Smallest common multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {

    // sort
    const sortedAr = arr.sort((a, b) => a - b);

    const range = [];
    
    // find elements between (range - non inclusive)
    for ( let i = sortedAr[0] + 1; i < sortedAr[1]; i++) range.push(i);

    // check if lowest common multiple passed in is multiple of every range number
    const isMultipleOfRangeNums = num =>{

        for ( let val of range){
            if ( num % val !== 0) return false;
        }
        return true;
    }

    let lowestCommonMultiple = 0;
    
    // find a lowest common multiple. Start idx = first multiple of highgest num
    // increase eacj iteration by multiple of highgest num
    for (let j = sortedAr[1] * 2; j < Infinity; j += sortedAr[1]){
        console.log(j);
        
        if ( 
            j % sortedAr[0] === 0 &&        // if is multiple of lowest num 
            j % sortedAr[1] === 0 &&        // if is multiple of highest num           
            isMultipleOfRangeNums(j)        // if is multiple every num in range
            )
        {
            lowestCommonMultiple = j;
            break;
        }
    }

    return range;

}
  
  
// const result = smallestCommons([1,5]);
// console.log(result);




///// Drop it

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


function dropElements(arr, func) {
    
    const filteredArr = [];
    let okToPush = 0;

    for ( let val of arr){

        if (!!func(val) && okToPush !== 1){
          
          okToPush = 1;

        }
        if ( okToPush === 1) filteredArr.push(val);

    }
    
    return filteredArr;
}
  
// dropElements([1, 2, 3], function(n) {return n < 3; });




///// Every Object contains this key

// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
// Remember, you can access object properties through either dot notation or [] notation.


function truthCheck(collection, pre) {

    for (let key of collection){

        if (!!!key[pre]) return false;
    }

    return true;
}
  
// const result = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// console.log(result);



///// Sum All Odd Fibonacci Numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {
    // fib sequence
    let fib = [1, 1 , 2];

    // while last to nums in fib sequence < num passed in...
    while ( +fib.slice(-1) + +fib.slice(-2,-1) <= num){
        // add sum of last two elements in fib array
        fib.push(+fib.slice(-1) + +fib.slice(-2,-1));
    }
    // initiate sum of odd values
    let sumOfOdd = 0;
    // loop through each
    for (let i = 0; i < fib.length; i++){
        // if curr value in fib sequence is odd... add it
        if ( fib[i] % 2 !== 0) sumOfOdd += fib[i];
    }

    return sumOfOdd;
}

// sumFibs(75024)




///// Sum All Primes

// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {

    let primesSum = 0;

    const isAPrimeNum = num =>{

        for ( let i = 2; i < num; i++){
            if ( num % i === 0) return false;
        }
        return true;

    }

    for ( let i = 2; i <= num; i++){

        if (isAPrimeNum(i)){
            primesSum += i;
        }
    }

    return primesSum;
}
  
// sumPrimes(977);



///// Where art thou

// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.
// For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

function whatIsInAName(collection, source) {
    var arr = [];
    // Only change code below this line
    
    const srcKey = Object.keys(source)[0];
    const srcVal = Object.values(source)[0];

    const fullSrcMatch = obj =>{

        for (let [srcKey, srcVal] of Object.entries(source)){

            if ( obj[srcKey] !== srcVal ) return;
        }

        arr.push(obj);
    }

    for (let [key, val] of Object.entries(collection)){
        
        fullSrcMatch(val)

    }
    // Only change code above this line
    return arr;
}

// const test1 = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// const test2 = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
// [{ "apple": 1, "bat": 2, "cookie": 2 }]

// console.log(test2);



