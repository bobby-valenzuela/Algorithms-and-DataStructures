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
  
  steamrollArray([7, [2], [3, [[4]]]]);
