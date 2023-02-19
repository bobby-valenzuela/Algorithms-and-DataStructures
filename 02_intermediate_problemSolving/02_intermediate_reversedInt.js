///// Reversed Integer

function reversedInt(int){
    const arr = `${int}`.split('');
    const reversedNum = [];
    for(let num of arr){
        reversedNum.unshift(num);
    }
    return reversedNum.join('');
}

// revised to account for megative nums and 0

function reversedInt(int){
    if(int === 0) return 0;
    const arr = `${Math.abs(int)}`.split('');
    const reversedNum = [];
    for(let num of arr){
        reversedNum.unshift(num);
    }
    return reversedNum.join('') * Math.sign(int);
}