///// Pascal Case 

function pascalCase(str){
    let sentence = '';
    const words = str.split(' ');

    for (let el of Object.values(words)){

        let currWord = el[0].toUpperCase() + el.slice(1).toLowerCase();
        sentence += `${currWord} `;

    }
    // removes last space
    return sentence.slice(0, -1);
}

pascalCase(`I'm a little teapot`);
