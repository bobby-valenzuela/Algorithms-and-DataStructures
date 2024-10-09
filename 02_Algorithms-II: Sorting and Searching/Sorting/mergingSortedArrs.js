// Merges two sorted arrays
function mergeSortedArrays(a,b){

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

    console.log(result)

    return result

}

mergeSortedArrays( [1,3,9],[2,4,6,8] )