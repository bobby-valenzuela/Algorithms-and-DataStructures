
const someArr = [1,2,3,4,5];

const iterateOverArray = arr =>{
    if(arr.length <= 0) return;     // base case -> end condition
    console.log(arr[0]);            // action of current iteration          
    iterateOverArray(arr.slice(1)); // run again with next index
};

iterateOverArray(someArr);       // start at 0 -> 1st element


const iterateOverArray2 = (arr, idx) =>{
    if(idx > arr.length -1) return; // base case -> end condition
    console.log(arr[idx]);          // action of current iteration          
    iterateOverArray2(arr, idx + 1); // run again with next index
};

iterateOverArray2(someArr, 0);       // start at 0 -> 1st element
