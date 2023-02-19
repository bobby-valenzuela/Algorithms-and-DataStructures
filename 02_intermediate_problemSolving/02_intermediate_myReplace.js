///// Search & Replace

// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).
// Note: Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word Book with the word dog, it should be replaced as Dog


function myReplace(str, before, after) {
    // function to make sure whole string matches
    const checkWholeMatch = startingIdx =>{
        for ( let i = startingIdx; i < before.length + startingIdx; i++){
            if (str[i] != before[i - startingIdx ]) return 0;
        }
        return 1;
    };

    // find first matching letter
    for (let [key, val] of Object.entries(str)){
        // if a matching first letter is found...
        if (val === before[0]){
            // check if whole search term subsequently matches
            if (checkWholeMatch(+key)){

                // if a match is found
                const startingIdx = +key;
                // replace substring
                const arr = [...str];
                // if OG string starts with uppercase letter
                if (str[startingIdx] === str[startingIdx].toUpperCase()) {
                    after = after[0].toUpperCase() + after.slice(1);
                }
                else{
                    after = after[0].toLowerCase() + after.slice(1);
                }
                arr.splice(startingIdx, +before.length, after);
                
                return arr.join('');
            } 
                
        }
    }
}
  
console.log(myReplace("I dog ok", "dog", "leaped"));            
//   myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

