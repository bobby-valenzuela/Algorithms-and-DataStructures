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
    return matchMedia.floor(Math.log10(Math.abs(num))) + 1
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