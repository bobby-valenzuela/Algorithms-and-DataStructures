///// Duplicate counter

function areThereDuplicates(...arr) {
    const frequency = arrayPassed =>{
        if(arrayPassed.length === 0) return {};
        const obj = frequency(arrayPassed.slice(1));
        obj[arrayPassed[0]] = obj[arrayPassed[0]] > 0 ? obj[arrayPassed[0]] + 1 : 1;
        return obj;
    }
    const freqObj = frequency(arr);  
    for(let val of Object.values(freqObj)){
        if(val > 1) return true;
    }
    return false;
}
