// Explanation of Each Step:
// 1. Outer loop (for loop): We start from the second element and go through each element one by one, treating everything to the left of the current element as already sorted.
// 2. Saving currentValue: We hold on to the current element (arr[i]) because we need to compare it to the elements before it and possibly move it.
// 3. Inner loop (backward for loop): This loop goes backward, comparing the currentValue with each element before it. If an element is larger than currentValue, it gets moved one step to the right.
// 4. Insert currentValue: Once we've found the right spot, we insert currentValue at the correct position.
// 5. Return the sorted array: After sorting all elements, the array is returned.

function insertionSort(arr){

    // We start from the second element in the array (index 1), because 
    // we consider the first element (index 0) as already "sorted".
    for (let i = 1; i < arr.length; i++){
        // Save the value of the current element we're looking at in a variable.
        // We'll compare it to the elements before it.
        let currentValue = arr[i]
        
        // Start by looking at the element just before the current one (index i-1).
        // This is where we will start comparing from.
        let j = i - 1;

        // We now compare currentValue with elements before it.
        // We keep going back (decreasing j) as long as:
        // 1. j is not negative (meaning we haven't run out of elements to check)
        // 2. The element at index j is greater than currentValue (it needs to move up).
        for(j; j >= 0 && arr[j] > currentValue; j--){
            // Move the element at position j one step forward (to the right),
            // because it's bigger than currentValue and needs to make space for it.
            arr[j + 1] = arr[j];
        }

        // After we finish the loop, j will be one position too far back.
        // So we place the currentValue in the correct spot, which is one step ahead (j + 1).
        arr[j + 1] = currentValue;
    }

    // The array is now sorted, so return it.
    return arr;
}

// Test the function with a sample array and print the result
const result = insertionSort([23, 4, 5, 0, 15, 2]);

console.log(result);
