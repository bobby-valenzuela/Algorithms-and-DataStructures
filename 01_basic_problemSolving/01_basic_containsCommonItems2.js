///// contains shared value (manual)

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItems2(arr1, arr2){
    // loop through first array and create object where properties === items in the array
    let map = {};
    for ( let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]){
            const item = array1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in second array exists on created object
    for (let j = 0; j < array2.length; j++){
        if (map[array2[j]]) return true;
    }
    return false;
}

containsCommonItems2(array1, array2)