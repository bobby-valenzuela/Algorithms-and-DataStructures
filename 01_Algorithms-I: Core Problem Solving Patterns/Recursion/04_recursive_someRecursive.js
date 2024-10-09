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


