///// Ends width

// Check if a string (first argument, str) ends with the given target string (second argument, target).


function confirmEnding(str, target){
    return str.slice(-target.length) === target;
}

confirmEnding("Bastian", "n");