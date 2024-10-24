// Explanation of Each Step:
// 1. merge function: This function combines two sorted arrays (a and b) into one sorted array. It keeps comparing the smallest elements from both arrays and adds the smaller one to a new array called result.
// 2. while loops in merge:
//      The first loop compares elements in both arrays until one array runs out of elements.
//      The next two loops check if any elements are left in either array after the first loop ends, and adds the remaining elements to the result array.
// 3. mergeSort function: This function sorts an array by splitting it into smaller and smaller pieces and then merging those pieces back together.
//      The array is split in half repeatedly (recursion) until each piece has only one element (which is already sorted).
//      Then, the merge function is used to combine these small sorted arrays back into a single sorted array.
// 4. if (arr.length <= 1): This is the base case for the recursion. If the array has 1 or 0 elements, it's already sorted, so we just return it.
// 5. mergeSort call: Finally, we test the mergeSort function with an example array [75, 3, 64, 22, 2] and print the sorted result.









// This function merges two sorted arrays (a and b) into one sorted array.
function merge(a, b) {

    // Create an empty array to hold the final result of the merged arrays.
    const result = [];
    
    // Set up two counters, 'i' for array 'a' and 'j' for array 'b'.
    // These counters will help us keep track of which elements we've already looked at.
    let i = j = 0;

    // Keep going as long as both arrays still have elements left to compare.
    while (i < a.length && j < b.length) {
        
        // If the current element in 'a' is smaller than the current element in 'b',
        // add 'a[i]' to the result array and move to the next element in 'a' (i++).
        if (a[i] < b[j]) {
            result.push(a[i]);
            i++;
        } 
        // Otherwise, add 'b[j]' to the result array and move to the next element in 'b' (j++).
        else {
            result.push(b[j]);
            j++;
        }
    }

    // If there are any leftover elements in 'a' (because 'b' finished first),
    // add them all to the result array.
    while (i < a.length) {
        result.push(a[i]);
        i++;
    }
    
    // If there are any leftover elements in 'b' (because 'a' finished first),
    // add them all to the result array.
    while (j < b.length) {
        result.push(b[j]);
        j++;
    }

    // Return the final merged and sorted array.
    return result;
}

// This is the Merge Sort function that sorts an array by breaking it down and merging.
function mergeSort(arr) {
    // Base case: If the array has 1 or fewer elements, it's already sorted.
    if (arr.length <= 1) return arr;
    
    let mid = Math.floor(arr.length / 2);       // Find the middle point of the array.
    let left = mergeSort(arr.slice(0, mid));    // Recursively split and sort the left half of the array.
    let right = mergeSort(arr.slice(mid))       // Recursively split and sort the right half of the array.;
    
    return merge(left, right);                  // Merge the two sorted halves back together.
}

// Test the mergeSort function with a sample array and print the sorted result.
const result = mergeSort([75, 3, 64, 22, 2]);
console.log(result);
