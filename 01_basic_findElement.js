///// Find true
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'. This means that given an element x, the 'truth test' is passed if func(x) is true.

function findElement(arr, func){
    
    for ( let el of arr){
        if (func(el)) return el;
    }

}

findElement([1,2,3,4], num => num % 2 === 0);
