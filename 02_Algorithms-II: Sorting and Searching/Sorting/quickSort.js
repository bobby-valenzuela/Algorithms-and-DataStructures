// 1. Choose a pivot index: The value at this index will server as our "anchor" by which all other numbers are compared/moved against (at least for one full pass through the array).


// 2. All values less than the pivot point are moved to the left
// All values greater than the pivot point are moved to the right


// 3. Return the updated values of the pivot index once all elements have been compared against the values in the pivot index and moved as needed.
    // This will server as that values' "final position" once all is sorted.

    // Helper function
function pivot(arr=[], startIdx=0, end=arr.length ){
    let pivotVal = arr[startIdx]      // choose value that will server as our pivot value
    let swapIdx = startIdx         // Determine which index to swap our pivot value to. Start at zero...

    function swap(swapArr,a,b){
        let temp = swapArr[a]
        swapArr[a] = swapArr[b]
        swapArr[b] = temp

    }

    for(let i = startIdx + 1; i < arr.length; i++){
        // If the value we're on is smaller that our pivot then we know some values must be shifted to the left and our swapIdx idx
        if(arr[i] < pivotVal){
            swapIdx++;              // SwapIndx should be equal to the num of times we find an element to movoe "below" pivot; Increase with each match.
            swap(arr,swapIdx,i)    
            
        }   

    }

    // Final swap: Now that we've done all omparisons with pivotVal, and moved "less-than" values to the right of the pivotVal...
    // then we can now move the pivot val to the right - to the correct index (swapIndex - number of elements swapped)
    swap(arr,startIdx,swapIdx)
    return swapIdx  // This is the new index of our pivotVal - the value that is now "cememnted" in place.
}

// [4,8,2,1,5,7,6,3] 
// console.log(pivot([4,8,2,1,5,7,6,3]))

function quickSort(arr, left = 0, right = arr.length - 1){
    // base case
    if(left < right){
        let pivotIndex = pivot(arr, left, right)
        // left
        quickSort(arr, left,pivotIndex-1)
        // Right
        quickSort(arr, pivotIndex+1,right)
    }

    return arr
}
const result =  quickSort([4,6,9,1,2,5])

console.log(result)