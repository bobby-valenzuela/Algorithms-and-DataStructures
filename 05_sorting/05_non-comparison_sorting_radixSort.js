// works on numbers 
// doesn't worry about comparing - but instead takes advantage of the fact that larger numbers have more digits.


///// Helper methods

// pass in num and return the digit at a given place (assumes base 10)
// Example: getDigit(12345,1) --> 4
// Example: getDigit(12345,2) --> 3
function getDigit(num, place){
    return Math.floor(Math.abs(num)/ Math.pow(10,place)) % 10
}