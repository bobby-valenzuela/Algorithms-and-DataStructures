const someArr = ["Boy","Bun","Band", "Oh Boy"];

const makeArr = arr =>{
    if(arr.length <= 0) return [];
    const newArr = makeArr(arr.slice(1));
    newArr.unshift((arr[0] + "").replace('B','D'));
    return newArr;
};

const failureItems = makeArr(someArray);
// ["Doy", "Dun", "Dand", "Oh Doy"]