// Merges two sorted arrays
function merge(a,b){

    const result = []
    let i = j = 0

    // While we still have elements in both arrs... Build result arr
    while( i < a.length && j < b.length){
        
        if( a[i] < b[j] ){
            result.push(a[i])
            i++
        }
        else{
            result.push(b[j])
            j++
        }

    }

    // If there any any left over elements that haven't been processed in 1st arr...
    while( i < a.length ){
        result.push(a[i])
        i++
    }
    
    // If there any any left over elements that haven't been processed in 2nd arr...
    while( j < b.length ){
        result.push(b[j])
        i++
    }

    
    return result
    
}

function mergeSort(arr){
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid)) 
    let right = mergeSort(arr.slice(mid))
    return merge(left,right)    // Sort and merge each arr pair
}

const result = mergeSort( [75,3,64,22,2] )
console.log(result)