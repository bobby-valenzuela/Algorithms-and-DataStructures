///// Palindrome

// Basically: For each letter I’m searching to see if the current letter is equal to the letter in the string that has an index of the last element (length -1) minus the current index.
// Note: It isn’t ideal/necessary to compare every letter in the string – only the first or last half because if half matches the other half will match as well since we are matching from on end to the other.


function palindrome(str) {
    for(let [k,v] of Object.entries(str)){
        if(v !== str[str.length -1 -k]) return false;
    }  
    return true; 
}

// variation with JS built-in methods
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed; 
}

///// Palindrome II


// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

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
