// function countDown(num){

//     // base case
//     if (num === 0){
//         console.log(`you're about to return`);
//         return;
//     };


//     console.log(`counting yo ${num}`);

//     // recursive call
//     countDown(num -1);
 
//     console.log(`counting yo ${num}`);
    
// }

// countDown(5);


// function someRecursive(arr, cb){
//     if (arr.length === 0 ) return 0;
//     if (!!cb(arr[0])) return true;
//     someRecursive(arr.slice(1), cb);
// }

// const arr = [1,2,3];

// //  there is at least one element in arr such that it satisfies condition X
// // condition X = greater than 3

// const resultOfCondtionX = arr.some(element => element > 3 );
// console.log(resultOfCondtionX) // false



// function mutation(arr) {
//     // loop through second string 
//     const str1 = arr[0].toLowerCase();
//     const str2 = arr[1].toLowerCase();

//     for (let i = 0; i < str2.length; i++){
//         // see if each letter in 2nd str is present in 1st
//         if (str1.indexOf(str2[i]) === -1) return false;
//     }
//     return true;
// }
  
//   mutation(["hello", "Hello"]);


// function chunkArrayInGroups(arr, size) {

//     const result = [];

//     for (let i = 0; i < arr.length; i + size){
//         // result.push(arr.slice(i,size));
//         console.log(arr.slice(i,i + size));
//     }
//     console.log(result);
// }
  
// chunkArrayInGroups(["a", "b", "c", "d"], 2);


// Array.prototype.myFilter = function(callback) {
//     var newArray = [];
//     const currentArray = this;
//     for ( let val of Object.values(currentArray)){
//       if (!!callback(val)) newArray.push(val);
//     }
//     return newArray;
// };



// function splitify(str) {
//     return str.split(/\s|-|,|\./);
// }  
// splitify("Hello World,I-am code");


// function sentensify(str) {
//     return str.split(/[-,.\s]/g).join(" ");
// }
// sentensify("May-the-force-be-with-you");


// function sumAll(arr) {
//     const sortedArr = arr.sort((a,b)=>a-b);
//     let sum = 0;
//     for (let i = sortedArr[0]; i < sortedArr[1] + 1; i++){
//       sum += i;
//     }
//     return sum;
// }
  
//   sumAll([1, 4]);


// function diffArray(arr1, arr2) {
//     var newArr = [];

//     for (let i = 0; i < arr1.length; i++){
//         if (arr2.indexOf(arr1[i]) === -1) newArr.push(arr1[i]);
//     }
//     for (let j = 0; j < arr2.length; j++){
//         if (arr1.indexOf(arr2[i]) === -1) newArr.push(arr2[i]);
//     }

//     return newArr;
// }

// function destroyer(arr, ...noIncludes) {
//     const newArr = [];
    
//     for (let value of Object.values(arr)){
//       // if not in no includes list, add to new array
//       if (noIncludes.indexOf(value) === -1) newArr.push(value)
  
//     }
    
//     return newArr;
// }
  
// destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// function chunkArrayInGroups(arr, size) {

//     const result = [];

//     for (let i = 0; i < arr.length; i += size){
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// }

// chunkArrayInGroups(["a", "b", "c", "d"], 2);







// function translatePigLatin(str) {
    
//     const vowels = ['a','e','i','o','u'];
//     let pigLatinized = '';

//     let firstVowelIdx = -1;
//     let consonantChunk;

//     // check if word begins with a vowel or has no vowel
//     if (vowels.includes(str[0])){
//         return str + 'way';
//     } 
//     else{
//         // find index of first vowel
//         for ( let [key,value] of Object.entries(str)){
//             if ( vowels.includes(value)){
//                 firstVowelIdx = key;
//                 consonantChunk = str.slice(0,firstVowelIdx);
//                 break;
//             };
//         }
//         // if no vowel is found in word
//         if ( firstVowelIdx === -1) return str + 'ay';
//     }

//     // slice off letters before first vowel
//     pigLatinized = str.slice(firstVowelIdx);
//     // move those initial consonants to end of word
//     pigLatinized += consonantChunk + 'ay';

//     return pigLatinized;
// }
  
//   translatePigLatin("rhythm");


// function myReplace(str, before, after) {
//     // function to make sure whole string matches
//     const checkWholeMatch = startingIdx =>{
//         for ( let i = startingIdx; i < before.length + startingIdx; i++){
//             if (str[i] != before[i - startingIdx ]) return 0;
//         }
//         return 1;
//     };

//     // find first matching letter
//     for (let [key, val] of Object.entries(str)){
//         // if a matching first letter is found...
//         if (val === before[0]){
//             // check if whole search term subsequently matches
//             if (checkWholeMatch(+key)){

//                 // if a match is found
//                 const startingIdx = +key;
//                 // replace substring
//                 const arr = [...str];
//                 // if OG string starts with uppercase letter
//                 if (str[startingIdx] === str[startingIdx].toUpperCase()) {
//                     after = after[0].toUpperCase() + after.slice(1);
//                 }
//                 else{
//                     after = after[0].toLowerCase() + after.slice(1);
//                 }
//                 arr.splice(startingIdx, +before.length, after);
                
//                 return arr.join('');
//             } 
                
//         }
//     }
// }
  
// console.log(myReplace("I dog ok", "dog", "leaped"));            
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


// function pairElement(str) {
//     const arr = [];

//     const returnPair = char =>
//         char === "A" ? "T" :
//         char === "T" ? "A" :
//         char === "C" ? "G" :
//         char === "G" ? "C" : "NA";

//     for ( let val of str){
//         arr.push([val,returnPair(val)]);
//     }
//     return arr;
// }

// pairElement("GCG");

// function returnMissingzLetter(str) {

//     const alpha = [...'abcdefghijklmnopqrstuvwxyz'];

//     for (let [key, val] of Object.entries(str)){
//         const idxInAlpha = alpha.indexOf(val);
//         // check index of next letter 
//         if ( str[+key + 1] != alpha[idxInAlpha + 1] ) return alpha[idxInAlpha + 1];
//     }

//     return undefined;
// }
  
// fearNotLetter("abce");

// function uniteUnique(...arr) {
//     const allVals = [];
//     arr.forEach( el => allVals.push(...el));
//     const uniqueVals = [...new Set(allVals)];
//     return uniqueVals;
// }
  
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// function convertHTML(str) {
//     const strAr = [...str];
//     const specialChars = [`&`,`<`,`>`,`"`,`'`];
//     const htmlEncode = char => {
//         const val = 
//             char === `&` ? `&amp;` :
//             char === `<` ? `&lt;`  :
//             char === `>` ? `&gt;`  :
//             char === `"` ? `&quot;`  :
//             char === `'` ? `&apos;` : "NA";
//         return val;
//     };

//     strAr
//         .forEach( (letter, idx) => {
//             if (specialChars.includes(letter)) {
//                 strAr.splice(idx, 1, htmlEncode(letter));
//             }
//         });
//     console.log(strAr.join(''))

//     return strAr.join('');
// }
  
//   convertHTML("Dolce & Gabbana");

// function sumFibs(num) {
//     if ( num <= 1) return 1;
//     return (num -1) + (num -2);
// }
// console.log(sumFibs(1000));


// function steamrollArray(arr) {

//     const flattenArr = [];
    
//     const extractNonArrays = item =>{

//         for (let val of item){
//             if (val instanceof Array){
//                 extractNonArrays(val);
//             }
//             else{
//                 flattenArr.push(val);
//             }
//         }
//     }
//     extractNonArrays(arr);
//     console.log(flattenArr);
// }
  
//   steamrollArray([7, [2], [3, [[4]]]]);



// function spinalCase(str) {

//     const lettersArr = [];
    
//     let spacedString = str.replace(/[\s-_?]+/g,'-');

//     console.log(spacedString);

//     for (let [k,v] of Object.entries(spacedString)){
//         if (+k === 0) {
//             lettersArr.push(v);
//             continue;
//         }

//         if (v === v.toUpperCase() &&
//             spacedString[+k -1] != "-" &&
//             spacedString[+k -1] === spacedString[+k -1].toLowerCase()
//            ){
//             lettersArr.push(`-${v}`);
//         }
//         else{
//             lettersArr.push(v);
//         }

//     }

//     return lettersArr.join('').replace(/-+/g,'-').toLowerCase();


// }
  
//   spinalCase('This Is Spinal TapPerson');



// function addTogether(num1, num2) {

//     if (typeof num1 != "number") return undefined;

//     if (!num2){
//         return function( num ){
//             if (typeof num != "number") return undefined;
//             return num1 + num;
//         }
//     }

//     return num1 + num2;
// }
  
//   addTogether(2,3);


// function whatIsInAName(collection, source) {
//     var arr = [];
//     // Only change code below this line
    
//     const srcKey = Object.keys(source)[0];
//     const srcVal = Object.values(source)[0];

//     const fullSrcMatch = obj =>{

//         for (let [srcKey, srcVal] of Object.entries(source)){

//             if ( obj[srcKey] !== srcVal ) return;
//         }

//         arr.push(obj);
//     }

//     for (let [key, val] of Object.entries(collection)){
        
//         fullSrcMatch(val)

//     }
//     // Only change code above this line
//     return arr;
// }

// const test1 = whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// const test2 = whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
// [{ "apple": 1, "bat": 2, "cookie": 2 }]

// console.log(test2);

// function truthCheck(collection, pre) {

//     for (let key of collection){

//         if (!!!key[pre]) return false;
//     }

//     return true;
// }
  
// const result = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// console.log(result);

// function dropElements(arr, func) {
    
//     const filteredArr = [];
//     let okToPush = 0;

//     for ( let val of arr){

//         if (!!func(val) && okToPush !== 1){
          
//           okToPush = 1;

//         }
//         if ( okToPush === 1) filteredArr.push(val);

//     }
    
//     return filteredArr;
// }
  
// dropElements([1, 2, 3], function(n) {return n < 3; });





// function smallestCommons(arr) {

//     // sort
//     const sortedAr = arr.sort((a, b) => a - b);

//     const range = [];
    
//     // find elements between (range - non inclusive)
//     for ( let i = sortedAr[0] + 1; i < sortedAr[1]; i++) range.push(i);

//     // check if lowest common multiple passed in is multiple of every range number
//     const isMultipleOfRangeNums = num =>{

//         for ( let val of range){
//             if ( num % val !== 0) return false;
//         }
//         return true;
//     }

//     let lowestCommonMultiple = 0;
    
//     // find a lowest common multiple. Start idx = first multiple of highgest num
//     // increase eacj iteration by multiple of highgest num
//     for (let j = sortedAr[1] * 2; j < Infinity; j += sortedAr[1]){
//         console.log(j);
        
//         if ( 
//             j % sortedAr[0] === 0 &&        // if is multiple of lowest num 
//             j % sortedAr[1] === 0 &&        // if is multiple of highest num           
//             isMultipleOfRangeNums(j)        // if is multiple every num in range
//             )
//         {
//             lowestCommonMultiple = j;
//             break;
//         }
//     }

//     return range;

// }
  
  
// const result = smallestCommons([1,5]);

// console.log(result);

//  fizz buzz

// for ( let i = 1; i < 101; i++){

//     if ( i % 3 === 0 && i % 5 === 0 ) {
//         console.log("fizzbuzz", i);
//         continue;
//     };
//     if ( i % 3 ===0 ) console.log("fizz", i);
//     if ( i % 5 ===0 ) console.log("buzz", i);

// }



// const recursiveLoop = num =>{
//     console.log("counting...");
//     recursiveLoop(5);
// }

// function sumFibs(num) {

//     const fibNums = [];

//     const getFib = number => (num - 1) + (num - 2);

//     getFib(num);

// }

// const result = sumFibs(4);
// console.log(result);

// function sumPrimes(num) {
//     return num;
// }

// sumPrimes(10);


// function sumFibs(num) {
//     // fib sequence
//     let fib = [1, 1 , 2];

//     // while last to nums in fib sequence < num passed in...
//     while ( +fib.slice(-1) + +fib.slice(-2,-1) <= num){
//         // add sum of last two elements in fib array
//         fib.push(+fib.slice(-1) + +fib.slice(-2,-1));
//     }
//     // initiate sum of odd values
//     let sumOfOdd = 0;
//     // loop through each
//     for (let i = 0; i < fib.length; i++){
//         // if curr value in fib sequence is odd... add it
//         if ( fib[i] % 2 !== 0) sumOfOdd += fib[i];
//     }

//     return sumOfOdd;
// }

// sumFibs(75024)


// const reg = /^[Rr]egE(?=x)$/g;
// const reg2 = /A(?=b)/g;


// function sumPrimes(num) {

//     let primesSum = 0;

//     const isAPrimeNum = num =>{

//         for ( let i = 2; i < num; i++){
//             if ( num % i === 0) return false;
//         }
//         return true;

//     }

//     for ( let i = 2; i <= num; i++){

//         if (isAPrimeNum(i)){
//             primesSum += i;
//         }
//     }

//     return primesSum;
// }
  
// sumPrimes(977);


// Make A Person

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function(){
      return this.getFullName().split(' ')[0];
    };
    this.getLastName = function(){
      return this.getFullName().split(' ')[1];
    };
    this.setFirstName = function(first){
      const lastName = this.getFullName().split(' ')[1];
      this.getFullName = function(){
        return first + " " + lastName;
      }
    };
    this.setLastName = function(last){
      const firstName = this.getFullName().split(' ')[0];
      this.getFullName = function(){
        return firstName + " " + last;
      }
    };
    this.setFullName = function(firstAndLast){
      this.getFullName = function(){
        return firstAndLast;
      }
    };
  
  
    // return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  // bob.getFullName();
  // bob.getFirstName();
  bob.setFirstName("Haskell");
  console.log(bob.getFullName);
  // console.log(bob.getFirstName());




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




