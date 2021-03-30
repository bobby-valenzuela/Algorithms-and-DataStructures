////////////////////////
// RECURSION EXCERCISES

///// Repeat a string


// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num){
    if ( num < 1 ) return "";
    if (num === 1 ) return str;
    return str + repeatStringNumTimes(str, num - 1);
}

// repeatStringNumTimes("abc", 3);



///// Flatten an array
// Flatten a nested array. You must account for varying levels of nesting.


function steamrollArray(arr) {

    const flattenArr = [];
    
    const extractNonArrays = item =>{

        for (let val of item){
            if (val instanceof Array){
                extractNonArrays(val);
            }
            else{
                flattenArr.push(val);
            }
        }
    }
    extractNonArrays(arr);
    console.log(flattenArr);
}
  
//   steamrollArray([7, [2], [3, [[4]]]]);
