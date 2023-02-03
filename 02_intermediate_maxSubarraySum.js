

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
