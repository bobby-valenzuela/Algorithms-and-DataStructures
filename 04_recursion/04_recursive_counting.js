
const count = val =>{    
    if(val < 0) return;      // 3. (Base case) Where to stop recursion
    console.log(val);        // 1. (Executing case) What to do on each iteration
    count(val -1);       // 2. (Recursive call) How to iterate into next iteration
};
// count(5) ->          [5,4,3,2,1]

const count2 = val =>{    
    if(val < 0) return;      // 3. (Base case) Where to stop recursion
    count2(val -1);       // 2. (Recursive call) How to iterate into next iteration
    console.log(val);        // 1. (Executing case) What to do on each iteration
};
// count2(5) ->          [1,2,3,4,5]

const countDown = endVal =>{    
    if(endVal < 0) return;      // 3. (Base case) Where to stop recursion
    console.log(endVal);        // 1. (Active case) What to do on each iteration
    countDown(endVal -1);       // 2. (Recursive call) How to iterate into next iteration
};

const countUp = startVal =>{    
    if(startVal > 5) return;
    console.log(startVal);    // 1. How to iterate from initial val
    countUp(startVal + 1);    // 1. How to iterate from start val
};

const countUpTo = (startVal, endVal) =>{
    if(startVal > endVal) return;
    console.log(startVal);
    countUp(startVal + 1);
};

// accepts a number - returns array filled with numbers up to that number inclusively
const countdown = n =>{
    if(n < 1) return [];
    const myArr = countdown(n - 1);
    myArr.push(n);
    return myArr;
};
