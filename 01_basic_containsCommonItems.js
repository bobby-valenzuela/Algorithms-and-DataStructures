
///// ///// contains shared value (with built-in methods)

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

const containsCommonItems = (arr1, arr2) => arr1.some(item => arr2.includes(item)); 
containsCommonItems(array1, array2)