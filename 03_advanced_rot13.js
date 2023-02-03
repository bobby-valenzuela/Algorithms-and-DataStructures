////////// Caesars Cipher

// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.
// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.


function rot13(str) {
    const alpha = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let workingString = '';

    for ( let i = 0; i < str.length; i++){
        
        if (alpha.indexOf(str[i]) === -1){
            workingString += str[i];
            continue;
        }

        let alphaIdx = alpha.indexOf(str[i]) - 13;
        if ( alphaIdx < 0) alphaIdx = 26 + alphaIdx;

        workingString += alpha[alphaIdx];
    }
    console.log(workingString);

    return workingString;
}
  
rot13("SERR PBQR PNZC");
