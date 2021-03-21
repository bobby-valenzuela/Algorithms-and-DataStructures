/////////////////////////
// BASIC ALGORITHM EXCERCISES 

///// Remove falsy ones from array

function bouncer(arr){
    const truthies = [];

    for ( let [k,v] of Object.entries(arr)){

        if (!!arr[k]) truthies.push(arr[k]);

    }

    return truthies;
}

// bouncer([7,"ate","",false, 9]);



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

// pascalCase(`I'm a little teapot`);



///// Find true
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true.

function findElement(arr, func){
    
    for ( let el of arr){
        if (func(el)) return el;
    }

}

// findElement([1,2,3,4], num => num % 2 === 0);


///// Truncate a string

// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num){
    return str.length > num ? `${str.slice(0, num)}...` : str;
}

// truncateString("This is my super long run-on sentence!", 10);


///// Ends width

// Check if a string (first argument, str) ends with the given target string (second argument, target).


function confirmEnding(str, target){
    return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");