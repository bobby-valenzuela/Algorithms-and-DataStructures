

// This function sorts an array using Selection Sort.
function selectionSort(arr) {

    // Outer loop: We go through each element of the array one by one.
    for (let i = 0; i < arr.length; i++) {

        // Assume the current element at position 'i' is the smallest.
        let lowest = i;

        // Step 1: Look for the smallest element in the rest of the array (from 'i+1' to the end).
        for (let j = i + 1; j < arr.length; j++) {
            // If we find an element smaller than the current lowest,
            // update the 'lowest' index to this new smaller element.
            if (arr[j] < arr[lowest]) lowest = j;
        }

        // Step 2: If we found a new smallest element, swap it with the current element at 'i'.
        if (arr[lowest] < arr[i]) {

            // Print a message showing what elements are being swapped.
            console.log(`Found a new lowest - swapping ${arr[i]} with ${arr[lowest]} (placing ${arr[lowest]} where ${arr[i]} was) ==> ${arr}`);

            // Perform the swap by temporarily storing the value of 'arr[i]'.
            let temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }

    // After all elements have been sorted, return the sorted array.
    return arr;
}

// Test the selectionSort function with a sample array and print the sorted result.
const result = selectionSort([9, 3, 14, 8, 2, 5, 1]);

console.log(result);
