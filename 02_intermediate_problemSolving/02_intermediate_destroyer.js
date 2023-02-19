///// Seek & Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...noIncludes) {
    const newArr = [];
    
    for (let value of Object.values(arr)){
      // if not in no includes list, add to new array
      if (noIncludes.indexOf(value) === -1) newArr.push(value)
  
    }
    
    return newArr;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);