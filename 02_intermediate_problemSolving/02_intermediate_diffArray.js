

///// Difference between arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var newArr = [];

    for (let i = 0; i < arr1.length; i++){
        if (arr2.indexOf(arr1[i]) === -1) newArr.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j++){
        if (arr1.indexOf(arr2[i]) === -1) newArr.push(arr2[i]);
    }

    return newArr;
}