///// Where do I belong


// Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
// For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

function getIndexToIns(arr, num){

    // if array is empty return 0
    if (arr.length === 0) return 0;

    //sort array
    const sortedArr = arr.sort((a,b)=>a-b);

    // Loop though sortedArray
    // Find idx where num is greater than current & less than lext

    for (let i = 0; i < sortedArr.length - 1; i++){

        // if current element is less than first element - should be first
        if (num <= arr[i]){
            console.log('return first');
            return i;
        }
        // if current element is greater than current one AND less than next element
        else if (num > arr[i] && num <=[i + 1]){
            console.log('return sec');
            return i;
        }
        // if current element is greater than last element
        else if (num > arr[arr.length -1]){
            console.log('return third');
            return sortedArr.length;
        }

    }

}

///// Reversed Integer

function reversedInt(int){
    const arr = `${int}`.split('');
    const reversedNum = [];
    for(let num of arr){
        reversedNum.unshift(num);
    }
    return reversedNum.join('');
}

// revised to account for megative nums and 0

function reversedInt(int){
    if(int === 0) return 0;
    const arr = `${Math.abs(int)}`.split('');
    const reversedNum = [];
    for(let num of arr){
        reversedNum.unshift(num);
    }
    return reversedNum.join('') * Math.sign(int);
}

///// Reversed String

function reverse(string){
    return string.split('').reduce((snowBall, currentChar)=> currentChar + snowBall, '');
}

///// Anagram

function validAnagram(first, second){
    if (first.length !== second.length) return false;

    const lookup = {};

    // get a count of each letter in first word
    for (let i = 0; i < first.length; i++){
        let letter = first[i];
        // if letter exists, increment, otherwise set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    
    // get a count of each letter in second word 
    // verify that each matches first word
    for (let i = 0; i < second.length; i++){
        let letter = second[i];
        // can't find letter or letter is zero - not an anagram
        if(!lookup[letter]){
            return false;
        } 
        // if it is found, decerement count by one
        else{lookup[letter] -= 1;}
    }
    return true;
    
}
