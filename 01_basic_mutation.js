///// Has same letters
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

function mutation(arr) {
    // loop through second string 
    const str1 = arr[0].toLowerCase();
    const str2 = arr[1].toLowerCase();

    for (let i = 0; i < str2.length; i++){
        // see if each letter in 2nd str is present in 1st
        if (str1.indexOf(str2[i]) === -1) return false;
    }
    return true;
}
  
mutation(["hello", "Hello"]);