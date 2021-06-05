/////////////////////////
// BASIC ALGORITHM EXCERCISES 

///// Remove falsy ones from array

function bouncer(arr){
    const truthies = [];

    for ( let [k,v] of Object.entries(arr)){

        if (!!arr[k]) truthies.push(arr[k]);

    }

    return truthies;
}

// bouncer([7,"ate","",false, 9]);



///// Pascal Case 

function pascalCase(str){
    let sentence = '';
    const words = str.split(' ');

    for (let el of Object.values(words)){

        let currWord = el[0].toUpperCase() + el.slice(1).toLowerCase();
        sentence += `${currWord} `;

    }
    // removes last space
    return sentence.slice(0, -1);
}

// pascalCase(`I'm a little teapot`);



///// Find true
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true.

function findElement(arr, func){
    
    for ( let el of arr){
        if (func(el)) return el;
    }

}

// findElement([1,2,3,4], num => num % 2 === 0);


///// Find true
// Check if a value is classified as a boolean primitive. Return true or false.

const isABoolean = el => typeof el === "boolean";
// isABoolean(true)
// isABoolean("true")

///// Truncate a string

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num){
    return str.length > num ? `${str.slice(0, num)}...` : str;
}

// truncateString("This is my super long run-on sentence!", 10);


///// Ends width

// Check if a string (first argument, str) ends with the given target string (second argument, target).


function confirmEnding(str, target){
    return str.slice(-target.length) === target;
}

// confirmEnding("Bastian", "n");


///// contains shared value (manual)

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItems2(arr1, arr2){
    // loop through first array and create object where properties === items in the array
    let map = {};
    for ( let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]){
            const item = array1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object
    for (let j = 0; j < array2.length; j++){
        if (map[array2[j]]) return true;
    }
    return false;
}

// containsCommonItems2(array1, array2)



///// ///// contains shared value (with built-in methods)

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'a'];

const containsCommonItems = (arr1, arr2) => arr1.some(item => arr2.includes(item)); 
// containsCommonItems(array1, array2)


///// Has same letters
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
    // loop through second string 
    const str1 = arr[0].toLowerCase();
    const str2 = arr[1].toLowerCase();

    for (let i = 0; i < str2.length; i++){
        // see if each letter in 2nd str is present in 1st
        if (str1.indexOf(str2[i]) === -1) return false;
    }
    return true;
}
  
// mutation(["hello", "Hello"]);


///// Array in pieces
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

    const result = [];

    for (let i = 0; i < arr.length; i + size){
        // result.push(arr.slice(i,size));
        console.log(arr.slice(i,i + size));
    }
    console.log(result);
}
  
// chunkArrayInGroups(["a", "b", "c", "d"], 2);



///// Summing from…to…
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

function sumAll(arr) {
    const sortedArr = arr.sort((a,b)=>a-b);
    let sum = 0;
    for (let i = sortedArr[0]; i < sortedArr[1] + 1; i++){
      sum += i;
    }
    return sum;
}
  
//   sumAll([1, 4]);


///// Find longest length

const findLongestWordLength = str =>{
    // split sentence into words - array
    const words = str.split(' ');
    // get longest length
    const longestLength = words.reduce((accum, curr)=>{
        if (curr.length > accum) return curr.length;
        return accum;
    },0);
    return longestLength;
};

// findLongestWordLength("The quick brown fox jumped over the lazy dog");


///// Largest value in sub array

const largestOfFour = arr =>{
    const biggestNums = []; 

    for ( let [k,v] in Object.entries(arr)){
        const biggestNum = arr[k].reduce((accum, curr)=>{
            if (curr > accum) return curr;
            return accum;
        }, -Infinity); // smallest possible value to account for negatives
        console.log(biggestNums);
        biggestNums.push(biggestNum);
    }
    return biggestNums;
};

// largestOfFour([[4,5,1,3], [13,27,18,26],[32,35,37,39], [1000,1001,857,1]]);


///// Filter
Array.prototype.myFilter = function(callback) {
    var newArray = [];
    const currentArray = this;
    for ( let val of Object.values(currentArray)){
      if (!!callback(val)) newArray.push(val);
    }
    return newArray;
};



function splitify(str) {
    return str.split(/\s|-|,|\./);
}  
splitify("Hello World,I-am code");


function sentensify(str) {
    return str.split(/[-,.\s]/g).join(" ");
}
sentensify("May-the-force-be-with-you");


function sumFibs(num) {
    if ( num <= 1) return 1;
    return (num -1) + (num -2);
}
console.log(sumFibs(1000));


function addTogether(num1, num2) {

    if (typeof num1 != "number") return undefined;

    if (!num2){
        return function( num ){
            if (typeof num != "number") return undefined;
            return num1 + num;
        }
    }

    return num1 + num2;
}
  
  addTogether(2,3);



  
//  fizz buzz

 for ( let i = 1; i < 101; i++){
 
     if ( i % 3 === 0 && i % 5 === 0 ) {
         console.log("fizzbuzz", i);
         continue;
     };
     if ( i % 3 ===0 ) console.log("fizz", i);
     if ( i % 5 ===0 ) console.log("buzz", i);
 
 }
 

const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
  }
  
  
  // ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
  // If the function is passed a valid PIN string, return true, else return false.
  
  function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
  }
  
  
  
  // Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
  // Your task is to write a function maskify, which changes all but the last four characters into '#'.
  
  const maskify = cc =>   [...cc].map((char,idx,arr)=> idx < arr.length - 4 ? '#' : char).join('');
  
  
  // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
  const descendingOrder = n => parseInt([...`${n}`].sort().reverse().join(''));

