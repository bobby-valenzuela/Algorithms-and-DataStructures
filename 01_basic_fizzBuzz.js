//  fizz buzz

for ( let i = 1; i < 101; i++){
 
    if ( i % 3 === 0 && i % 5 === 0 ) {
        console.log("fizzbuzz", i);
        continue;
    };
    if ( i % 3 ===0 ) console.log("fizz", i);
    if ( i % 5 ===0 ) console.log("buzz", i);

}

// Alternative
for ( let i = 1; i < 101; i++ ){

   if ( i % 3 === 0 && i % 5 === 0){
       console.log("FizzBuzz");
   }
   else if( i % 3 === 0 ){
       console.log("Fizz");
   }
   else if( i % 5 === 0 ){
       console.log("Buzz");
   }
   else{ console.log(i)}

}

// FIZBUZZ TERNARY

for ( let i = 1; i < 101; i++ ){

    let result =  i % 3 === 0 && i % 5 === 0 ? "FizzBuzz" :
     i % 3 === 0 ? "Fizz" :
     i % 5 === 0 ? "Buzz" : i ;
    console.log(result);
}

  