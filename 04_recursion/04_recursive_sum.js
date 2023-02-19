 // Write a recursive function, sum(arr, n), 
// that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
    if(n === 0) return 0;
    return arr[0] + sum(arr.slice(1), n-1);
  }
