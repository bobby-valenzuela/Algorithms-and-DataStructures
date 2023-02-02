
///// Find longest length

const findLongestWordLength = str =>{
    // split sentence into words - array
    const words = str.split(' ');
    // get longest length
    const longestLength = words.reduce((accum, curr)=>{
        if (curr.length > accum) return curr.length;
        return accum;
    },0);
    return longestLength;
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");