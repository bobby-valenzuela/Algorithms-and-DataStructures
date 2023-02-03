///// Frequency Counter

// Given to numbers find out if the two numbers have same frequency of digits

function sameFrequency(num1, num2){

    const digitFreq = digits =>{
        if( digits.length === 0) return {};
        const digArr = digitFreq(digits.slice(1));
        digArr[digits[0]] = digArr[digits[0]] > 0 ? digArr[digits[0]]+ 1 : 1;
        return digArr;
    };
    const num1Fre = digitFreq(`${num1}`.split(''));
    const num2Fre = digitFreq(`${num2}`.split(''));
    for (let [key,value] of Object.entries(num1Fre)){
        if(num1Fre[key] !== num2Fre[key]) return false;
    }
    return true;
}