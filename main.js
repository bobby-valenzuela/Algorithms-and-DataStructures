// function countDown(num){

//     // base case
//     if (num === 0){
//         console.log(`you're about to return`);
//         return;
//     };


//     console.log(`counting yo ${num}`);

//     // recursive call
//     countDown(num -1);
 
//     console.log(`counting yo ${num}`);
    
// }

// countDown(5);


// function someRecursive(arr, cb){
//     if (arr.length === 0 ) return 0;
//     if (!!cb(arr[0])) return true;
//     someRecursive(arr.slice(1), cb);
// }

// const arr = [1,2,3];

// //  there is at least one element in arr such that it satisfies condition X
// // condition X = greater than 3

// const resultOfCondtionX = arr.some(element => element > 3 );
// console.log(resultOfCondtionX) // false






// Array.prototype.myFilter = function(callback) {
//     var newArray = [];
//     const currentArray = this;
//     for ( let val of Object.values(currentArray)){
//       if (!!callback(val)) newArray.push(val);
//     }
//     return newArray;
// };



// function splitify(str) {
//     return str.split(/\s|-|,|\./);
// }  
// splitify("Hello World,I-am code");


// function sentensify(str) {
//     return str.split(/[-,.\s]/g).join(" ");
// }
// sentensify("May-the-force-be-with-you");





// function sumFibs(num) {
//     if ( num <= 1) return 1;
//     return (num -1) + (num -2);
// }
// console.log(sumFibs(1000));






// function addTogether(num1, num2) {

//     if (typeof num1 != "number") return undefined;

//     if (!num2){
//         return function( num ){
//             if (typeof num != "number") return undefined;
//             return num1 + num;
//         }
//     }

//     return num1 + num2;
// }
  
//   addTogether(2,3);









//  fizz buzz

// for ( let i = 1; i < 101; i++){

//     if ( i % 3 === 0 && i % 5 === 0 ) {
//         console.log("fizzbuzz", i);
//         continue;
//     };
//     if ( i % 3 ===0 ) console.log("fizz", i);
//     if ( i % 5 ===0 ) console.log("buzz", i);

// }



// const recursiveLoop = num =>{
//     console.log("counting...");
//     recursiveLoop(5);
// }



// function sumPrimes(num) {
//     return num;
// }

// sumPrimes(10);








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
  // bob.getFullName();
  // bob.getFirstName();
  bob.setFirstName("Haskell");
  console.log(bob.getFullName);
  // console.log(bob.getFirstName());




function palindrome(str) {
    // remove any non-alphanumeric characters
    let trimmedString = str.replace(/[\s\W_/]*/g,'').toLowerCase();
    
    const reversedStr = trimmedString
        .split('')              // convert to array
        .sort((a, b) => a - b)  // array sort method
        .reverse()              // array reverse method
        .join('');              // join back into a string

    if ( trimmedString === reversedStr) return true;

    return false;
}




