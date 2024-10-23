
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

// Alternate solution
function chunk(array, size){

    const chunked = [];

    for( let element of array ){

        const last = chunked[chunked.length-1]

        // If no array in last chunk, start new one and initialize with first item
        if(!last || last.length === size){
            chunked.push([element])
        }
        else{
            last.push(element)
        }

    }

    return chunked;

}
