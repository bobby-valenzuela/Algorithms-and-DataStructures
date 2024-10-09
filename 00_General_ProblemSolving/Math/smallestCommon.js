///// Smallest common multiple

// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.
// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {

    // sort
    const sortedAr = arr.sort((a, b) => a - b);

    const range = [];
    
    // find elements between (range - non inclusive)
    for ( let i = sortedAr[0] + 1; i < sortedAr[1]; i++) range.push(i);

    // check if lowest common multiple passed in is multiple of every range number
    const isMultipleOfRangeNums = num =>{

        for ( let val of range){
            if ( num % val !== 0) return false;
        }
        return true;
    }

    let lowestCommonMultiple = 0;
    
    // find a lowest common multiple. Start idx = first multiple of highgest num
    // increase eacj iteration by multiple of highgest num
    for (let j = sortedAr[1] * 2; j < Infinity; j += sortedAr[1]){
        console.log(j);
        
        if ( 
            j % sortedAr[0] === 0 &&        // if is multiple of lowest num 
            j % sortedAr[1] === 0 &&        // if is multiple of highest num           
            isMultipleOfRangeNums(j)        // if is multiple every num in range
            )
        {
            lowestCommonMultiple = j;
            break;
        }
    }

    return range;

}
  
  
const result = smallestCommons([1,5]);
console.log(result);
