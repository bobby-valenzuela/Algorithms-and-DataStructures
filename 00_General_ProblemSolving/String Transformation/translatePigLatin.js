///// Piglatin-ize

// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
    
    const vowels = ['a','e','i','o','u'];
    let pigLatinized = '';

    let firstVowelIdx = -1;
    let consonantChunk;

    // check if word begins with a vowel or has no vowel
    if (vowels.includes(str[0])){
        return str + 'way';
    } 
    else{
        // find index of first vowel
        for ( let [key,value] of Object.entries(str)){
            if ( vowels.includes(value)){
                firstVowelIdx = key;
                consonantChunk = str.slice(0,firstVowelIdx);
                break;
            };
        }
        // if no vowel is found in word
        if ( firstVowelIdx === -1) return str + 'ay';
    }

    // slice off letters before first vowel
    pigLatinized = str.slice(firstVowelIdx);
    // move those initial consonants to end of word
    pigLatinized += consonantChunk + 'ay';

    return pigLatinized;
}
  
  translatePigLatin("rhythm");