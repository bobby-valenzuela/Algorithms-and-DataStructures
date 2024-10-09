///// Reversed Int



function reversedInt(int){

    const intArr = `${int}`.split('');



    const recur = arr =>{

        if(arr.length === 0) return [];

        const newArr = recur(arr.slice(1));

        newArr.push(arr[0]);

        return newArr;

    }

    return +recur(intArr).join('');

}

