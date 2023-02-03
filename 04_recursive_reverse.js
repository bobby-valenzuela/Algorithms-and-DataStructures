function reverse(str){
    if (str.length === 0) return [];
    let revd = reverse(str.slice(1));
    if (revd.length > 0) revd = revd.split('');
    revd.push(str[0]);
    return revd.join('');
}

// with detailed comments
function reverse(str){
    // base case
    if (str.length === 0) return [];
    // recursive case
    let revd = reverse(str.slice(1));
    // if not base case, convert string to arr
    if (revd.length > 0) revd = revd.split('');
    // push current el into revd array
    revd.push(str[0]);
    // return each array as a string
    return revd.join('');
}