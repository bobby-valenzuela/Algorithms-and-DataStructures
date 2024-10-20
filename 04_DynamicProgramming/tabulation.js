
// Standard fib (recursive)
function fib(n){
    // Base case
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


function fibTabulated(n){
    if( n <= 2 ) return 1;
    let fibNums = [0, 1, 1];

    // Note how we're dynamically adding to the array just before each next iteration which depends on what we add in each iteration
    for (let i = 3; i <= n; i++ ){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }

    return fibNums[n];
}
