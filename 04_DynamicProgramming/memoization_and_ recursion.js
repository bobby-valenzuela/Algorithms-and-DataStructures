
// Standard fib (recursive)
function fib(n){
    // Base case
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


// Fib-memoized
function fibcache(n, cache = [] ){
    // If we already have result in cache - return that
    if(cache[n] !== undefined) return cache[n];

    // Base case
    if( n <= 2) return 1; 

    // Calculare result and send cache array over
    let result = fib(n-1, cache) + fib(n-2, cache);
    
    // Store result
    cache[n] = result;

    return result;
}


// Fib-memoized - with no base case

// One way to get around the need for our base case is just to place our base case(s) in the cache from the start

function fib(n, cache = [undefined, 1, 1] ){

    // If we already have result in cache - return that
    if(cache[n] !== undefined) return cache[n];

    // Calculate result and send cache array over
    let result = fib(n-1, cache) + fib(n-2, cache);
    
    // Store result
    cache[n] = result;

    return result;
}
