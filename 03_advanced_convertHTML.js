////////// Replace special characters with HTML entities

// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
    const strAr = [...str];
    const specialChars = [`&`,`<`,`>`,`"`,`'`];
    const htmlEncode = char => {
        const val = 
            char === `&` ? `&amp;` :
            char === `<` ? `&lt;`  :
            char === `>` ? `&gt;`  :
            char === `"` ? `&quot;`  :
            char === `'` ? `&apos;` : "NA";
        return val;
    };

    strAr
        .forEach( (letter, idx) => {
            if (specialChars.includes(letter)) {
                strAr.splice(idx, 1, htmlEncode(letter));
            }
        });
    console.log(strAr.join(''))

    return strAr.join('');
}
  
  convertHTML("Dolce & Gabbana");
