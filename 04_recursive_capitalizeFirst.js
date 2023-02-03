
///// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// Ugly initial working solution

function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
      
      if ( arr.length === 0 ) return [];
      const current = capitalizeFirst( arr.slice(0,-1) ) 
      // ^ (above) Using slice(0,-1) as I want to return the array in the same order as before, but I can't make my changes to the returned array before the recursive call, I need to return the arrau first
      let currentItem = arr[ arr.length - 1 ]
      currentItem = `${currentItem[0].toUpperCase()}${currentItem.slice(1)}`
      current.push( currentItem )    
      return current;
  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  
  
  // Better Solution
  
  function capitalizeWords (array) {
    if (array.length === 1) {
      return [array[0].toUpperCase()];
    }
    let res = capitalizeWords(array.slice(0, -1));
    res.push(array.slice(array.length-1)[0].toUpperCase());
    return res;
   
  }