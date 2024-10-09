function selectionSort(arr){

    for (let i=0; i < arr.length; i++ ){

        let lowest = i;

        // Step 1.  Find & Update lowest index
        for(let j=i+1; j < arr.length; j++){

            if( arr[j] < arr[lowest] ) lowest = j

        }

        // Step 2. Updated lowest in array (swap)
        if( arr[lowest] < arr[i] ){

            console.log(`Found a new lowest - swapping ${arr[i]} with ${arr[lowest]} (placing ${arr[lowest]} where ${arr[i]} was) ==> ${arr}`)

            let temp = arr[i]
            arr[i] = arr[lowest]
            arr[lowest] = temp
        }

    }

    return arr
}

const result = selectionSort([9,3,14,8,2,5,1])

console.log(result)