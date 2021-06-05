///// Just some scratch paper

// Make A Person

var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    this.getFullName = function() {
      return firstAndLast;
    };
    this.getFirstName = function(){
      return this.getFullName().split(' ')[0];
    };
    this.getLastName = function(){
      return this.getFullName().split(' ')[1];
    };
    this.setFirstName = function(first){
      const lastName = this.getFullName().split(' ')[1];
      this.getFullName = function(){
        return first + " " + lastName;
      }
    };
    this.setLastName = function(last){
      const firstName = this.getFullName().split(' ')[0];
      this.getFullName = function(){
        return firstName + " " + last;
      }
    };
    this.setFullName = function(firstAndLast){
      this.getFullName = function(){
        return firstAndLast;
      }
    };
  
  
    // return firstAndLast;
};
  
  var bob = new Person('Bob Ross');
  bob.getFullName();
  bob.getFirstName();
  bob.setFirstName("Haskell");
  console.log(bob.getFullName);
  console.log(bob.getFirstName());




const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    const makeArr = arr =>{
        if(arr.length <= 0) return [];
        const newArr = makeArr(arr.slice(1));
        newArr.unshift(arr[0]);
        return newArr;
    };
    const failureItems = makeArr(someArray);
    
    // Only change code above this line
  
    return failureItems;
}
  
const failuresList = makeList(result.failure);



