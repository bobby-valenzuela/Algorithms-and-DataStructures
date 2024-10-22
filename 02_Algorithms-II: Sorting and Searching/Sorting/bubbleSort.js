const numbers = [99,23,52,63,23,54,4,2,2,43,22]

function bubbleSortSimple(array){
    const length = array.length;

    for(let i = 0; i < length; i++){

        for(let j=0; j < length; j++){

            if( array[j] > array[j+1] ){
                // Swap numbers
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }

        }

    }

}










// Explanation of Each Step:
// 1. swap function: Swaps two elements in the array. It takes the array and the indices of the two elements that need to be swapped.
// 2. Outer loop (for (let i = arr.length; i > 0; i--)):
//      This loop runs from the end of the array to the beginning. Each time it loops, the largest unsorted element moves to its correct spot on the right.
//      With each iteration, fewer comparisons are needed because the largest values have already been sorted to the end.
// 3. Inner loop (for (let j = 0; j < i-1; j++)):
//      This loop goes through the array from left to right, comparing each pair of elements.
//      If the current element (arr[j]) is bigger than the next one (arr[j+1]), we swap them to move the larger one to the right.
// 4. Swapping elements (if (arr[j] > arr[j+1])):
//      If two elements are out of order (the left one is bigger than the right one), we call the swap function to correct their positions.
// 5. Result: After the loops finish, the array is fully sorted, and we return the sorted array.







// This function swaps two elements in the array.
// It takes the array and the two positions (idx1 and idx2) to swap.
function swap (arr, idx1, idx2){
    // Store the value of the first element in a temporary variable.
    let temp = arr[idx1];
    // Move the value of the second element into the first position.
    arr[idx1] = arr[idx2];
    // Move the stored temporary value into the second position.
    arr[idx2] = temp;
    
    // Return the updated array after the swap.
    return arr;
}

// This is the Bubble Sort function that will sort an array.
function bubbleSort(arr) {
    // Outer loop: It runs from the end of the array to the beginning.
    // We do this because each pass will sort one element at the end of the array.
    for (let i = arr.length; i > 0; i--) {
        // Print statement to show how many swaps we're about to try on this pass.
        console.log(`OuterLoopIteration: ${i} | Performing ${i-1} swaps`);
        
        // Inner loop: This goes through the array, comparing each pair of elements.
        // We stop at (i-1) because the largest elements "bubble" to the right, 
        // so we don't need to compare them again.
        for (let j = 0; j < i - 1; j++) {
            // Print the current inner loop position.
            process.stdout.write(`\tInnerLoopIteration: ${j}`);
            
            // If the current element is bigger than the next one,
            // we need to swap them so the bigger one moves right.
            if (arr[j] > arr[j+1]) {
                console.log(` => Swapping: ${arr[j]},${arr[j+1]}`);
                // Swap the two elements that are out of order.
                arr = swap(arr, j, j+1);
            } else {
                // This else is only here for printing purposes and can be removed.
                console.log("");
            }
        }
    }
    // After all the passes, the array is sorted, so return it.
    return arr;
}

// Sample array to sort.
const myarr = [9, 8, 7, 1, 2];

// Print the unsorted array.
console.log(myarr);

// Sort the array using bubbleSort and print the sorted result.
console.log(bubbleSort(myarr));



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
