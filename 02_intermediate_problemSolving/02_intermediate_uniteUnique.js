///// Flatten and uniqued
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

function uniteUnique(...arr) {
    const allVals = [];
    arr.forEach( el => allVals.push(...el));
    const uniqueVals = [...new Set(allVals)];
    return uniqueVals;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
