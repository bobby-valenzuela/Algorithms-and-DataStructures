// works on numbers 
// doesn't worry about comparing - but instead takes advantage of the fact that larger numbers have more digits.


///// Helper methods

// pass in num and return the digit at a given place (assumes base 10)
// Example: getDigit(12345,1) --> 4
// Example: getDigit(12345,2) --> 3
function getDigit(num, place, base=10){
    return Math.floor(Math.abs(num)/ Math.pow(base,place)) % 10
}

// Get number of digits in a number
function digitCount(num){
    if(num === 0) return 1  // protects againts returning -Infinity
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// Accetps array of nums and returns highest number digits that any of those numbers have (uses digitCount)
// Example: mostDigits([123,2,1234,2]) --> 4
 function mostDigits(arr){
    let maxDigits = 0
    for(let i=0; i<arr.length;i++){
        maxDigits=Math.max(maxDigits, digitCount(arr[i]))
    }
    return maxDigits

}


/// Radix sort implementation

// == pesudocode ==
// 1. Define a func that accepts a list of numbers
// 2. Figure out how many digits the largest number has
// 3. Loop from k = 0 to the largest number of digits (step 2)
// 4. For each loop iteration   
    //  Create "buckets" for each digit (array)
    // Place each number in each bucket based on it's k-th digit
// 5. Replace out existing array with values in our buckets start with 0 and up to 9
// 6. Return the list at the end!

function radixSort(nums){
    let maxDigitCount = mostDigits(nums)

    // Loop through each digits position (through each "place")
    for(let k=0; k<maxDigitCount; k++){
        // Creates 2D array
        let digitBuckets = Array.from({ length: 10 },  ()=> [])

        // For each num find the value at the current "place"
        for(let i = 0; i<nums.length;i++){
            // now place it into it's respective "bucket"
            let digit = getDigit(nums[i],k)
            digitBuckets[digit].push(nums[i])

        }
        // Now that they are ordered in buckets - recollect them
        nums = [].concat(...digitBuckets)
    }
    return nums
}

const result = radixSort([123,23,44,12,1234])
console.log(result)
