function swap (arr, idx1, idx2){
    let temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    return arr
}

// const result = swap( [2,3,4,5],1,2 )
// console.log(result)

function bubbleSort(arr){
    // Go through each element once
    // With each iteration the the highest value will "bubble to the top" i.e. the rightmost pair(s) will be sorted
        // Going in reverse allows us to use 'i' to represent a decrementing value (decreasing the number of swaps to do)
        // meaning, which each iteration we don't have to try and compare the rightmost pair(s) as they should be sorted (we keep comparing each one less right-most pair on each iteration).

    for (let i=arr.length; i > 0; i-- ){ // <-- This is still one iteration per element in the array - we just using
        
        console.log(`OuterLoopIteration: ${i} | Performing ${i-1} swaps`)
        
        for ( let j=0; j < i-1; j++ ){
    
            process.stdout.write(`\tInnerLoopIteration: ${j}`);
            
            if ( arr[j] > arr[j+1] ) {
                console.log(` => Swapping: ${arr[j]},${arr[j+1]}`)
                arr = swap(arr,j,j+1)
            }else{ console.log("") } // can remove this else - only used for printing output
    
        }
    
    
    }
    return arr

}

// const myarr = [2,5,8,1,9]
const myarr = [9,8,7,1,2]

console.log(myarr)
console.log(bubbleSort(myarr))

// === OUTPUT ===

// [ 9, 8, 7, 1, 2 ]
// OuterLoopIteration: 5 | Performing 4 swaps
//         InnerLoopIteration: 0 => Swapping: 9,8
//         InnerLoopIteration: 1 => Swapping: 9,7
//         InnerLoopIteration: 2 => Swapping: 9,1
//         InnerLoopIteration: 3 => Swapping: 9,2
// OuterLoopIteration: 4 | Performing 3 swaps
//         InnerLoopIteration: 0 => Swapping: 8,7
//         InnerLoopIteration: 1 => Swapping: 8,1
//         InnerLoopIteration: 2 => Swapping: 8,2
// OuterLoopIteration: 3 | Performing 2 swaps
//         InnerLoopIteration: 0 => Swapping: 7,1
//         InnerLoopIteration: 1 => Swapping: 7,2
// OuterLoopIteration: 2 | Performing 1 swaps
//         InnerLoopIteration: 0
// OuterLoopIteration: 1 | Performing 0 swaps
// [ 1, 2, 7, 8, 9 ]