
///// Sum All Odd Fibonacci Numbers

// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.


function sumFibs(num) {
    // fib sequence
    let fib = [1, 1 , 2];

    // while last to nums in fib sequence < num passed in...
    while ( +fib.slice(-1) + +fib.slice(-2,-1) <= num){
        // add sum of last two elements in fib array
        fib.push(+fib.slice(-1) + +fib.slice(-2,-1));
    }
    // initiate sum of odd values
    let sumOfOdd = 0;
    // loop through each
    for (let i = 0; i < fib.length; i++){
        // if curr value in fib sequence is odd... add it
        if ( fib[i] % 2 !== 0) sumOfOdd += fib[i];
    }

    return sumOfOdd;
}

sumFibs(75024)