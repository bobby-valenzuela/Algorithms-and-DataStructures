////////// Binary to text

// Return an English translated sentence of the passed binary string.
// The binary string will be space separated.


function binaryAgent(str) {
    const alpha = [...`abcdefghijklmnopqrstuvwxyx`];
    const nums = str.split(' ').map( el => parseInt(el,2));
    let letters = '';
    
    for (let val of nums){
        
        let currentLetter;
        if (val > 91){
            currentLetter = alpha[+val - 65 -26 -6].toLowerCase();
        }
        else if (val >= 65){
            currentLetter = alpha[+val - 65].toUpperCase();
        }
        else{
            currentLetter = 
                val === 39 ? `'`:
                val === 32 ? ` `:
                val === 33 ? `!`:
                val === 63 ? `?`: 'idk'
            ;
        }
        letters += currentLetter;
    }
    return letters;
}

const val =   binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111")

console.log(val);

