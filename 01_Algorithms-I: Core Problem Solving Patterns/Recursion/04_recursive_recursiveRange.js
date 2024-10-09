

function recursiveRange(upto){
    if (upto === 0) return 0;
    return upto + recursiveRange(upto -1);
 }