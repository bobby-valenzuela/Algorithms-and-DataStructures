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