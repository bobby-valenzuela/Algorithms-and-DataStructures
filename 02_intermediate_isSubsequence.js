
///// isSubsequence

// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing


function isSubsequence(subStr, fullStr) {
    // confirm if first letter of sub is in full
    if(fullStr.indexOf(subStr[0]) === -1) return false;
    // set idx to start searching search FROM
    let idxOfLastFound = fullStr.indexOf(subStr[0]);
    // loop through sub
    for(let i = 1; i < subStr.length -1; i++){
        const thisLetter = subStr[i];
        const fullStrSlicedFromPrev = fullStr.slice(idxOfLastFound);
        const idxInfullofCurrentAfterPrev = fullStrSlicedFromPrev.indexOf(thisLetter);
        // set lastfoundindex to one we just found
        idxOfLastFound = idxInfullofCurrentAfterPrev;
        // if we didn't find - return false
        if(idxInfullofCurrentAfterPrev === -1) return false;
    }
    return true;
}
