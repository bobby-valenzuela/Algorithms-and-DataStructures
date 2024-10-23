

function stair(n){

	const rowLength = 10;

	// Rows
  for(let i = 1; i < n+1; i++){
  
  	let row = '';
  	
    if(i > 0) row = '#'.repeat(i)
    
    row+= '_'.repeat(rowLength- (i))
    
  	console.log(row)
  
  }


}

stair(10)


// OUTPUT
//      #_________
//      ##________
//      ###_______
//      ####______
//      #####_____
//      ######____
//      #######___
//      ########__
//      #########_
//      ##########
