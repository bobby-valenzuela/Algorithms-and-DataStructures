///// Largest value in sub array

const largestOfFour = arr =>{
    const biggestNums = []; 

    for ( let [k,v] in Object.entries(arr)){
        const biggestNum = arr[k].reduce((accum, curr)=>{
            if (curr > accum) return curr;
            return accum;
        }, -Infinity); // smallest possible value to account for negatives
        console.log(biggestNums);
        biggestNums.push(biggestNum);
    }
    return biggestNums;
};

largestOfFour([[4,5,1,3], [13,27,18,26],[32,35,37,39], [1000,1001,857,1]]);