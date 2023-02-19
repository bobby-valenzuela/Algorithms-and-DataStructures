///// Flatten an array - purely recursive
function flatten(arr, result = []) {
    for (let i in arr) {
        if (arr[i] instanceof Array) {
            flatten(arr[i], result)
        }
        else result.push(arr[i])
    }
 
    return result;
}

