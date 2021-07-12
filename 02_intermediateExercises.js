
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


///// Palindrome

// Basically: For each letter I’m searching to see if the current letter is equal to the letter in the string that has an index of the last element (length -1) minus the current index.
// Note: It isn’t ideal/necessary to compare every letter in the string – only the first or last half because if half matches the other half will match as well since we are matching from on end to the other.


function palindrome(str) {
    for(let [k,v] of Object.entries(str)){
        if(v !== str[str.length -1 -k]) return false;
    }  
    return true; 
}

// variation with JS built-in methods
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed; 
}

///// Palindrome II


// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
    // remove any non-alphanumeric characters
    let trimmedString = str.replace(/[\s\W_/]*/g,'').toLowerCase();
    
    const reversedStr = trimmedString
        .split('')              // convert to array
        .sort((a, b) => a - b)  // array sort method
        .reverse()              // array reverse method
        .join('');              // join back into a string

    if ( trimmedString === reversedStr) return true;

    return false;
}


///// Frequency Counter

// Given to numbers find out if the two numbers have same frequency of digits

function sameFrequency(num1, num2){

    const digitFreq = digits =>{
        if( digits.length === 0) return {};
        const digArr = digitFreq(digits.slice(1));
        digArr[digits[0]] = digArr[digits[0]] > 0 ? digArr[digits[0]]+ 1 : 1;
        return digArr;
    };
    const num1Fre = digitFreq(`${num1}`.split(''));
    const num2Fre = digitFreq(`${num2}`.split(''));
    for (let [key,value] of Object.entries(num1Fre)){
        if(num1Fre[key] !== num2Fre[key]) return false;
    }
    return true;
}



///// Duplicate counter

function areThereDuplicates(...arr) {
    const frequency = arrayPassed =>{
        if(arrayPassed.length === 0) return {};
        const obj = frequency(arrayPassed.slice(1));
        obj[arrayPassed[0]] = obj[arrayPassed[0]] > 0 ? obj[arrayPassed[0]] + 1 : 1;
        return obj;
    }
    const freqObj = frequency(arr);  
    for(let val of Object.values(freqObj)){
        if(val > 1) return true;
    }
    return false;
}


///// Average Pair I

// Given an array and a target average, find if any two consecutive numbers in the array are equal to the target average:7

function averagePair(arr, targ){
    for(let i = 0; i < arr.length; i++){
        const avg = (arr[i] + arr[i + 1]) / 2;
        if(avg === targ) return true;
    }
    return false;
}

// Average Pair variation

function averagePair(arr, targAvg){
    for(let i = 0; i < arr.length; i++){
        let numToReachTargAvg = (targAvg * 2) - arr[i];
        if(arr.indexOf(numToReachTargAvg) != -1) return true;
    }
    return false;
}

///// isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing


function isSubsequence(subStr, fullStr) {
    // confirm if first letter of sub is in full
    if(fullStr.indexOf(subStr[0]) === -1) return false;
    // set idx to start searching search FROM
    let idxOfLastFound = fullStr.indexOf(subStr[0]);
    // loop through sub
    for(let i = 1; i < subStr.length -1; i++){
        const thisLetter = subStr[i];
        const fullStrSlicedFromPrev = fullStr.slice(idxOfLastFound);
        const idxInfullofCurrentAfterPrev = fullStrSlicedFromPrev.indexOf(thisLetter);
        // set lastfoundindex to one we just found
        idxOfLastFound = idxInfullofCurrentAfterPrev;
        // if we didn't find - return false
        if(idxInfullofCurrentAfterPrev === -1) return false;
    }
    return true;
}

///// Is Substring

// Check if one string is a substring of the other

function Substring(str1, str2) {
    for(let i = 0; i < str1.length; i++){
        if(str2.indexOf(str1[i]) != -1){
            const testMatch = str2.slice(str2.indexOf(str1[i]),str2.indexOf(str1[i]) + str1.length);
            console.log(testMatch);
            console.log(str2.indexOf(str1[i]),str2.indexOf(str1[i]) + str1.length);
            if(str1 === testMatch) return true;
        }
    }
    return false;
}


///// maxSubarraySum

// Accepts an array of integers and a number 'n'. Calculates the max sum of 'n' consecutive elements in the array passed in.

function maxSubarraySum(arr,count){
    let maxSum = 0;
    let tempSum = 0;
    // make sure array is long enough
    if (arr.length < num) return null;
    // get sum of first n number of els
    for (let i = 0; i < count; i++){
        maxSum += arr[i];
    }
    // we need the maxSum value saved unchanged so we ca compare against later
    // we also need to manipulate the current max value - so we save a copy
    tempSum = maxSum;
    // loop through subArrays (windows)
    // note: we can go to last elem (arr.length) 
    // because we are adding this last value to every window
    for (let i = count ; i < arr.length; i++){
        // add end value
        tempSum += arr[i];
        // remove previous initial value
        tempSum -= arr[i - count];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

///// maxSubarraySum

/* Given an array of integers and a number, write a function called maxSubarraySum</b>, which finds the maximum sum of a subarray with the length of the number passed to the function. 
Note that a subarray must consist of <i>consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.*/


function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}

///// findLongestSubstring

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

///// minSubArrayLen

// Write a function called minSubArrayLenwhich accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

function minSubArrayLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, 
      //need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
}


/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

const removeVowels = str => str.toLowerCase().split('').filter(l=>"aeiou".split('').indexOf(l) === -1).join('');


// Check if has no duplicates
 const hasNoDups = arr => arr.every(el=>arr.indexOf(el) === arr.lastIndexOf(el));
 
 
 
 /*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

 function vowelCount(str){
     return str.split('').reduce(
        (acc,cur)=>{
            if('aeiou'.split('').indexOf(cur) !== -1){
                !!acc[cur] ? acc[cur]++ : acc[cur] = 1;
            }   
            return acc;         
        }
    ,{})  
}



/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

Examples:
    var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value){
         return arr.reduce(
        (acc,cur)=>{
            cur[key] = value;
            acc.push(cur);
            return acc;
        }
    ,[]);   
}


/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    var arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    var names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback){
        return arr.reduce(
        (acc,cur)=>{
            
            // if true put in first arr
            if(!!callback(cur)){
                acc[0].push(cur);
            }
            else{
                acc[1].push(cur);
            }
            return acc;
        }
    ,[ [],[] ] )
}




/* 
Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, it should return the product of the two. If the function is only passed one parameter - it should return a function which can later be passed another parameter to return the product. You will have to use closure and arguments to solve this.

Examples: 

    specialMultiply(3,4); // 12
    specialMultiply(3)(4); // 12
    specialMultiply(3); // function(){}....
*/

function specialMultiply(a,b){
    if([...arguments].length ==2){
        return a * b;
    }
    else{
        return function(b){return a * b}
    }
}


/* 
Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as well as a variable called guesses which should be set to 0.

In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

You will have to make use of closure to solve this problem.

Examples (yours might not be like this, since the answer is random every time):

    var game = guessingGame(5)
    game(1) // "You're too low!"
    game(8) // "You're too high!"
    game(5) // "You're too low!"
    game(7) // "You got it!"
    game(1) // "You are all done playing!"

    var game2 = guessingGame(3)
    game2(5) // "You're too low!"
    game2(3) // "You're too low!"
    game2(1) // "No more guesses the answer was 0"
    game2(1) // "You are all done playing!"
*/

function guessingGame(amount){
    let answer = Math.floor(Math.random() * 11);
    let guesses = 0;
        

    
    return function (guess){
        if(guesses >= amount) return 'You are all done playing!';
        guesses++;
        if (guess === answer){
            return 'You got it!';
            
        }
        else if (guess > answer){
            return 'Your guess is too high!';
        }
        else{
            return 'Your guess is too low!'; 
        }
    }
}

