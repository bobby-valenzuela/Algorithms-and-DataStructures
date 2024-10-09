///// Spinal Case

// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {

    const lettersArr = [];
    
    let spacedString = str.replace(/[\s-_?]+/g,'-');

    console.log(spacedString);

    for (let [k,v] of Object.entries(spacedString)){
        if (+k === 0) {
            lettersArr.push(v);
            continue;
        }

        if (v === v.toUpperCase() &&
            spacedString[+k -1] != "-" &&
            spacedString[+k -1] === spacedString[+k -1].toLowerCase()
           ){
            lettersArr.push(`-${v}`);
        }
        else{
            lettersArr.push(v);
        }

    }

    return lettersArr.join('').replace(/-+/g,'-').toLowerCase();


}
  
spinalCase('This Is Spinal TapPerson');