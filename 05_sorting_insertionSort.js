function insertionSort(arr){

    // Start at first index and iterate
    for (let i = 1; i < arr.length; i++){
        let currentValue = arr[i]
        // work backwards - go through every element before this one
        // But only keep going if the element continues to be larger than the currentValue (i)
        
        let j = i-1; // save last known index of j - start from one left of currentValue

        for(j ; j >=0 && arr[j] > currentValue ; j--){
            // Since we know the current value is greater than the currentValue - move it up one place
            arr[j+1] = arr[j]
            // j_last_index = j; // Update last known value of j
        }

        // With each loop iteration - the loop ends by decrementing 'j'.This means, once we're done looping - the last known index of j will be one less than the last valid one.
        // Lets add one place in to get us right where we left off
        // It's fine to overwrite arr[j+1] because whatever was there - must have already been pushed up if we made it past the inner for loop
        arr[j+1] = currentValue 

    }

    return arr
}


const result = insertionSort([23,4,5,0,15,2])

console.log(result)
