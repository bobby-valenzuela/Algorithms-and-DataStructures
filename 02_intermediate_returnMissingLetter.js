///// Find missing letter
// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.


function returnMissingLetter(str) {

    const alpha = [...'abcdefghijklmnopqrstuvwxyz'];

    for (let [key, val] of Object.entries(str)){
        const idxInAlpha = alpha.indexOf(val);
        // check index of next letter 
        if ( str[+key + 1] != alpha[idxInAlpha + 1] ) return alpha[idxInAlpha + 1];
    }

    return undefined;
}