// ===== Memoization for caching heavy functions ======


// Accepts a function and will execute function and store the results in a local cache.
// Thanks to closures, any future function calls will always have access to the cache.
function memoize(){

    // Create cache to store previously calculated results
    const cache = {};

    // Return the...
    return function memoizedFunction(expensiveFunction){
        // If we've already executed this function with this same value, just get the result from the cache instead of performing the expensive calculation again
        if(cache[number]){
            return cache[number];
        }


        // Perform function and save the result in cache for future use
        return cache[number] = expensiveFunction(number);

    }

}

// Example of an expensive function
function factorial(number){
    // Heavy code here...
    return number * 10;     // sample calculation
}


const memoizedFactorial = memoize(factorial);
