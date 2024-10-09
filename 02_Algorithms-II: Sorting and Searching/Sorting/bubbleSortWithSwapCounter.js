// Same as regular bubble sort but stops trying to sort if we're already sorted

function swap (arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    return arr
}

// const result = swap( [2,3,4,5],1,2 )
// console.log(result)

function bubbleSort(arr){
    // default to false - keep swapping
    let noSwaps = false;

    for (let i=arr.length; i > 0; i-- ){ 
        
        console.log(`OuterLoopIteration: ${i} | Performing ${i-1} swaps`)
        
        for ( let j=0; j < i-1; j++ ){
            noSwaps = true  // set to true for the duration of this inner loop - if we make it through this inner loop and it's still true then we are done
            process.stdout.write(`\tInnerLoopIteration: ${j}`);
            
            if ( arr[j] > arr[j+1] ) {
                console.log(` => Swapping: ${arr[j]},${arr[j+1]}`)
                arr = swap(arr,j,j+1)
                noSwaps = false
            }else{ console.log("") }

        }
        
        if(noSwaps) break
    
    }
    return arr

}

const myarr = [9,1,2,3,4,5]

console.log(bubbleSort(myarr))

// OUTPUT

// OuterLoopIteration: 6 | Performing 5 swaps
//         InnerLoopIteration: 0 => Swapping: 9,1
//         InnerLoopIteration: 1 => Swapping: 9,2
//         InnerLoopIteration: 2 => Swapping: 9,3
//         InnerLoopIteration: 3 => Swapping: 9,4
//         InnerLoopIteration: 4 => Swapping: 9,5
// OuterLoopIteration: 5 | Performing 4 swaps
//         InnerLoopIteration: 0
//         InnerLoopIteration: 1
//         InnerLoopIteration: 2
//         InnerLoopIteration: 3
// [ 1, 2, 3, 4, 5, 9 ]