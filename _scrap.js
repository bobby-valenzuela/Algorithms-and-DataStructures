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





// function sumFibs(num) {
//     if ( num <= 1) return 1;
//     return (num -1) + (num -2);
// }
// console.log(sumFibs(1000));






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



// function sumPrimes(num) {
//     return num;
// }

// sumPrimes(10);








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


// ###############################################################
// Added late
// ###############################################################

 // Write a recursive function, sum(arr, n), 
// that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
  if(n === 0) return 0;
  return arr[0] + sum(arr.slice(1), n-1);
}

// [1,2,3,4,5,6,7] //  n = 3
// 1 + [2,3,4,5,6,7] //  n = 2
// 1 +  2 + [3,4,5,6,7] //  n = 1
//       [4,5,6,7] //  n = 0 -> 0
//         [5,6,7] //  n = -1


const count = val =>{    
    if(val < 0) return;      // 3. (Base case) Where to stop recursion
    console.log(val);        // 1. (Executing case) What to do on each iteration
    countDown(val -1);       // 2. (Recursive call) How to iterate into next iteration
};
// countDown(5) ->          [5,4,3,2,1]

const count = val =>{    
    if(val < 0) return;      // 3. (Base case) Where to stop recursion
    countDown(val -1);       // 2. (Recursive call) How to iterate into next iteration
    console.log(val);        // 1. (Executing case) What to do on each iteration
};
// countDown(5) ->          [1,2,3,4,5]

const countDown = endVal =>{    
    if(endVal < 0) return;      // 3. (Base case) Where to stop recursion
    console.log(endVal);        // 1. (Active case) What to do on each iteration
    countDown(endVal -1);       // 2. (Recursive call) How to iterate into next iteration
};

const countUp = startVal =>{    
    if(startVal > 5) return;
    console.log(startVal);    // 1. How to iterate from initial val
    countUp(startVal + 1);    // 1. How to iterate from start val
};

const countUpTo = (startVal, endVal) =>{
    if(startVal > endVal) return;
    console.log(startVal);
    countUp(startVal + 1);
};

const someArr = [1,2,3,4,5];

const iterateOverArray = arr =>{
    if(arr.length <= 0) return;     // base case -> end condition
    console.log(arr[0]);            // action of current iteration          
    iterateOverArray(arr.slice(1)); // run again with next index
};

iterateOverArray(someArr);       // start at 0 -> 1st element



const iterateOverArray = (arr, idx) =>{
    if(idx > arr.length -1) return; // base case -> end condition
    console.log(arr[idx]);          // action of current iteration          
    iterateOverArray(arr, idx + 1); // run again with next index
};

iterateOverArray(someArr, 0);       // start at 0 -> 1st element

const countdown = n =>{
    if(n < 1) return [];
    const myArr = countdown(n - 1);
    myArr.push(n);
    return myArr;
};

function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) return [];
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
  };


  const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Only change code below this line
    const makeArr = arr =>{
        if(arr.length <= 0) return [];
        const newArr = makeArr(arr.slice(1));
        newArr.unshift(arr[0]);
        return newArr;
    };
    const failureItems = makeArr(someArray);
    
    // Only change code above this line
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);



const someArr = ["Boy","Bun","Band", "Oh Boy"];

const makeArr = arr =>{
    if(arr.length <= 0) return [];
    const newArr = makeArr(arr.slice(1));
    newArr.unshift((arr[0] + "").replace('B','D'));
    return newArr;
};

const failureItems = makeArr(someArray);
// ["Doy", "Dun", "Dand", "Oh Doy"]


// This regex says
// "match the 'q' succeeded by a 'u' "
let text = "qu";
text.match(/q(?=u)/); // Returns ["q"]

// This regex says
// "match the 'q' not succeeded by a 'u' "
let text = "qt";
text.match(/q(?!u)/); // Returns ["q"]

// This regex says
// "match the 'q' preceeded by a 'u' "
let text = "uq";
text.match(/(?<=u)q/); // Returns ["q"]

// This regex says
// "match the 'q' not preceeded by a 'u' "
let text = "tq";
text.match(/(?<!u)q/); // Returns ["q"]



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

let pwRegex = /((.*){4,}(?=.{2}))|((?=.{2})(.*){4,})/; 


function palindrome(str) {
    for(let [k,v] of Object.entries(str)){
        if(v !== str[str.length -1 -k]) return false;
    }  
    return true; 
}

function reversedInt(int){
    const arr = `${int}`.split('');
    const reversedNum = [];
    for(let num of arr){
        reversedNum.unshift(num);
    }
    return reversedNum.join('');
}

function areThereDuplicates(...arr) {
    for(let el,idx of arr){

    }
}

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


document.querySelectorAll(`.userslist input.onoffswitch-checkbox`)


function averagePair(arr, targ){
    for(let i = 0; i < arr.length; i++){
        const avg = (arr[i] + arr[i + 1]) / 2;
        if(avg === targ) return true;
    }
    return false;
}

function averagePair(arr, targAvg){
    for(let i = 0; i < arr.length; i++){
        let numToReachTargAvg = (targAvg * 2) - arr[i];
        if(arr.indexOf(numToReachTargAvg) != -1) return true;
    }
    return false;
}

function isSubsequence(str1, str2) {
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


function isSubsequence(str1, str2) {
    if(str2.indexOf(str1[i]) === -1) return false;
    for(let i = 0; i < str1.length; i++){
        const firstChar = str2.indexOf(str1[0]);
        if(str1[i] != str2[])
        str2.indexOf(str1[i]);
    }
    return false;
}


    function isSubsequence(main, subSeq) {
        console.log(main, subSeq);
        // check if first char in subSeq appears in main
        if(main.indexOf(subSeq[0]) === -1) return false;
        // loop through each char in subSeq string
        for(let i = 1; i < subSeq.length + 1; i++){
            // find index of curr subSeq char in main after position to prev char
            const currIndexsubSeq = main.slice(main.indexOf(subSeq[i])).indexOf(subSeq[i]);
            // return in this char in subSeq is not in main
            if(currIndexsubSeq === -1) return false;
            // find index of prev subSeq char in main
            const prevIndexsubSeq = main.indexOf(subSeq[i -1]);
            console.log(`curinsub:${currIndexsubSeq}, prev:${prevIndexsubSeq}`);
            // if current character in subSeq is <= prev char in subSeq
            if(currIndexsubSeq < prevIndexsubSeq) return false;
        }
        return true;
    }


function isSubsequence(subStr, fullStr) {
    if(fullStr.indexOf(subStr[0]) === -1) return false;
    let idxOfLastFound = fullStr.indexOf(subStr[0]);
    for(let i = 1; i < subStr.length -1; i++){
        const thisLetter = subStr[i];
        const fullStrSlicedFromPrev = fullStr.slice(idxOfLastFound);
        const idxInfullofCurrentAfterPrev = fullStrSlicedFromPrev.indexOf(thisLetter);
        if(idxInfullofCurrentAfterPrev === -1) return false;
    }
    return true;
}

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

[1,2,3,4,5,6,7,8,9,10]
// length: 10
// indices: 9 (0-9)
// < arr.length: every el that doesn't reach index of arr length (which makes sense since arr length os always one greater than total number of indices in the array itself)
// in a loop, when the terminal iteration is denoted by '<' this means don't include the 'last one'
// arr.length - x: 

for( let i = 0; i < arr.length -1; i++){
    console.log(arr[i],arr[i+1]);
}


function maxSubarraySum(arr,num){
    let tempSum = 0;
    let maxSum = 0;
    if (arr.length < num) return null;
    // get first window sum
    for (let i = 0; i < num; i++){
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++){
        tempSum += arr[i];
        tempSum -= arr[i - num];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}


[1,2,3,4,5,6,7,8,9,10] // 16


function minSubArrayLen(arr, num){
    // find sum of each contiguous subarray
    // fin sum eqUAL to num
    // return smallest subarray length
    // if none equal - return 0


}

function findLongestSubstring(str){

}

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

function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base,exp -1);
}
power(2,9);

0 = 1
1 = 2 * 1 = 2
2 = 2 * 2 = 4
3 = 2 * 3 = 6
4 = 2 * 4 = 8
5 = 2 * 5 = 10


function reverse(str){
    if (str.length === 0) return [];
    const strArr = reverse(str.slice(1));
    strArr.push(str[0]);
    return strArr;
}


function factorial(num){
   if (num === 0) return 1;
   return num * factorial(num -1);
}

function productOfArray(arr){
    if (arr.length === 0) return 1;
    return arr[0] * productOfArray(arr.slice(1));
}


function recursiveRange(upto){
    if (upto === 0) return 0;
    return upto + recursiveRange(upto -1);
 }
 
 function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

function reverse(str){
    if (str.length === 0) return [];
    let revd = reverse(str.slice(1));
    if (revd.length > 0) revd = revd.split('');
    revd.push(str[0]);
    return revd.join('');
}

// with detailed comments
function reverse(str){
    // base case
    if (str.length === 0) return [];
    // recursive case
    let revd = reverse(str.slice(1));
    // if not base case, convert string to arr
    if (revd.length > 0) revd = revd.split('');
    // push current el into revd array
    revd.push(str[0]);
    // return each array as a string
    return revd.join('');
}

