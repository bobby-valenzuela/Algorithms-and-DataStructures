///// Reverse Array

const reverseArr = arr =>{

    for (let [i,v] of Object.entries(arr)){

        if (i >= Math.ceil(arr.length / 2)) break;

        [ arr[i], arr[ arr.length - 1 - i] ] = [ arr[ arr.length - 1 - i] , arr[i] ]

    }
    console.log(arr)
    return arr;

};