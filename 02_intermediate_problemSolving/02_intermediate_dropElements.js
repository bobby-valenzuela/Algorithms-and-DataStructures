///// Drop it

// Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.
// Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array.


function dropElements(arr, func) {
    
    const filteredArr = [];
    let okToPush = 0;

    for ( let val of arr){

        if (!!func(val) && okToPush !== 1){
          
          okToPush = 1;

        }
        if ( okToPush === 1) filteredArr.push(val);

    }
    
    return filteredArr;
}
  
dropElements([1, 2, 3], function(n) {return n < 3; });

