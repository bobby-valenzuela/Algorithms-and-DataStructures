// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.

function sumEvenArgs(){return [...arguments].reduce( ( acc, curr )=> curr % 2 === 0 ? acc + curr : acc,0 )}

/*
Examples:
    sumEvenArgs(1,2,3,4) // 6
    sumEvenArgs(1,2,6) // 8
    sumEvenArgs(1,2) // 2
*/
