
///// Is Substring

// Check if one string is a substring of the other

function Substring(str1, str2) {
    for(let i = 0; i < str1.length; i++){
        if(str2.indexOf(str1[i]) != -1){
            const testMatch = str2.slice(str2.indexOf(str1[i]),str2.indexOf(str1[i]) + str1.length);
            console.log(testMatch);
            console.log(str2.indexOf(str1[i]),str2.indexOf(str1[i]) + str1.length);
            if(str1 === testMatch) return true;
        }
    }
    return false;
}