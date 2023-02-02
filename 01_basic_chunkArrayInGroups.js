
///// Array in pieces
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {

    const result = [];

    for (let i = 0; i < arr.length; i + size){
        // result.push(arr.slice(i,size));
        console.log(arr.slice(i,i + size));
    }
    console.log(result);
}
  
chunkArrayInGroups(["a", "b", "c", "d"], 2);