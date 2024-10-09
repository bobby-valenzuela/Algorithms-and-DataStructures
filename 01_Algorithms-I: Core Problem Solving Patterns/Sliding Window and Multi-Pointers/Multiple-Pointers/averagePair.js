
///// Average Pair I

// Given an array and a target average, find if any two consecutive numbers in the array are equal to the target average:7

function averagePair(arr, targ){
    for(let i = 0; i < arr.length; i++){
        const avg = (arr[i] + arr[i + 1]) / 2;
        if(avg === targ) return true;
    }
    return false;
}

// Average Pair variation

function averagePair(arr, targAvg){
    for(let i = 0; i < arr.length; i++){
        let numToReachTargAvg = (targAvg * 2) - arr[i];
        if(arr.indexOf(numToReachTargAvg) != -1) return true;
    }
    return false;
}