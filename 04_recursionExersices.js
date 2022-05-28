////////////////////////
// RECURSION EXERCISES

///// Basic exercises

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

// accepts a number - returns array filled with numbers up to that number inclusively
const countdown = n =>{
    if(n < 1) return [];
    const myArr = countdown(n - 1);
    myArr.push(n);
    return myArr;
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


function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) return [];
    const arr = rangeOfNumbers(startNum + 1, endNum);
    arr.unshift(startNum);
    return arr;
};


///// Repeat a string


// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num){
    if ( num < 1 ) return "";
    if (num === 1 ) return str;
    return str + repeatStringNumTimes(str, num - 1);
}

// repeatStringNumTimes("abc", 3);



///// Flatten an array
// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {

    const flattenArr = [];
    
    const extractNonArrays = item =>{

        for (let val of item){
            if (val instanceof Array){
                extractNonArrays(val);
            }
            else{
                flattenArr.push(val);
            }
        }
    }
    extractNonArrays(arr);
    console.log(flattenArr);
}
  
//   steamrollArray([7, [2], [3, [[4]]]]);


///// Flatten an array - purely recursive
function flatten(arr, result = []) {
    for (let i in arr) {
        if (arr[i] instanceof Array) {
            flatten(arr[i], result)
        }
        else result.push(arr[i])
    }
 
    return result;
}



///// Reversed Int

function reversedInt(int){
    const intArr = `${int}`.split('');

    const recur = arr =>{
        if(arr.length === 0) return [];
        const newArr = recur(arr.slice(1));
        newArr.push(arr[0]);
        return newArr;
    }
    return +recur(intArr).join('');
}


///// Power

function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base,exp -1);
}
power(2,9);


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


function countDown(num){

    // base case
    if (num === 0){
        console.log(`you're about to return`);
        return;
    };
    console.log(`counting yo ${num}`);

    // recursive call
    countDown(num -1);
    console.log(`counting yo ${num}`);
}
countDown(5);



const someArr = ["Boy","Bun","Band", "Oh Boy"];

const makeArr = arr =>{
    if(arr.length <= 0) return [];
    const newArr = makeArr(arr.slice(1));
    newArr.unshift((arr[0] + "").replace('B','D'));
    return newArr;
};

const failureItems = makeArr(someArray);
// ["Doy", "Dun", "Dand", "Oh Doy"]


 // Write a recursive function, sum(arr, n), 
// that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    if(n === 0) return 0;
    return arr[0] + sum(arr.slice(1), n-1);
  }


///// Recursive equivalent to a JS array method called 'some'

// 'Write a recursive function called someRecursive which accepts an array and a callback. The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.'
  
// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;
// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(ar, cb){
    // add whatever parameters you deem necessary - good luck!
    if(ar.length === 0) {return false;}
   
    if( cb(ar[0]) ) {return true;}
   
    return someRecursive(ar.slice(1),cb);
     
    
  }



///// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// Ugly initial working solution

function capitalizeFirst (arr) {
  // add whatever parameters you deem necessary - good luck!
    
    if ( arr.length === 0 ) return [];
    const current = capitalizeFirst( arr.slice(0,-1) ) 
    // ^ (above) Using slice(0,-1) as I want to return the array in the same order as before, but I can't make my changes to the returned array before the recursive call, I need to return the arrau first
    let currentItem = arr[ arr.length - 1 ]
    currentItem = `${currentItem[0].toUpperCase()}${currentItem.slice(1)}`
    current.push( currentItem )    
    return current;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']


// Better Solution

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
 
}
