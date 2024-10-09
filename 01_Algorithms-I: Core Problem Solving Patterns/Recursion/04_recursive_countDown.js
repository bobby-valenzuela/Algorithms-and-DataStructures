function countDown(num){

    // base case
    if (num === 0){
        console.log(`you're about to return`);
        return;
    };
    console.log(`counting yo ${num}`);

    // recursive call
    countDown(num -1);
    console.log(`counting yo ${num}`);
}
countDown(5);
