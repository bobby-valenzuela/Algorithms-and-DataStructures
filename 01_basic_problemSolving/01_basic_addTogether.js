function addTogether(num1, num2) {

    if (typeof num1 != "number") return undefined;

    if (!num2){
        return function( num ){
            if (typeof num != "number") return undefined;
            return num1 + num;
        }
    }

    return num1 + num2;
}
  
  addTogether(2,3);
