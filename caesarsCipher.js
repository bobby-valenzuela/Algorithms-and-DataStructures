
// Caesars Cipher

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