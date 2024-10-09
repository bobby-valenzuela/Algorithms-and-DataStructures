////////// Roman Numeral Converter

// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.


// no more than three in a row
//  I = 1
//  V = 5
//  X = 10
//  L = 50
//  C = 100
//  D = 500
//  M = 1000

function convertToRoman(number) {
    
    const romanNumerals = ['I','V','X','L','C','D','M'];
    let workingString = '';
    let workingNumber = number;

    const isMultipleOf = (num, multiple) => {

        let remainder = num;
        let multiples = 0;

        if ( num >= multiple){
            multiples = Math.trunc(num / multiple);
            remainder -= Math.trunc(num / multiple) * multiple;
            // Return object with num of multiples and remainder
            return { multiples, remainder};
        }

        return false;
    }
    const addNumerals = (num, mult, numeral) => {

        const multiplesOfNum = isMultipleOf(num, mult);
        
        if ( multiplesOfNum ){
            const numOfM = multiplesOfNum.multiples;

            // Set the working number as the remainder left over
            workingNumber -= mult * numOfM;

            // If we are repeating the same roman numeral more than 3 times ...
            // Include next roman numeral
            if ( numOfM > 3){
                const overAmount = numOfM - 3;
                const currentNumeralIdx = romanNumerals.indexOf(numeral);
                const nextNumeralIdx = currentNumeralIdx + 1;
                const lastLetter = workingString.split('').slice(-1)[0];

                // If the last letter in working string is same as next roman numeral... 
                if (romanNumerals.indexOf(lastLetter) === nextNumeralIdx){

                    // Remove last roman numeral in working string
                    workingString = workingString.split('').slice(0, -1).join('');
                    // Include current number number of times it's over 3
                    workingString += `${numeral}`.repeat(overAmount);
                    // Follow with next Roman numeral
                    workingString += `${romanNumerals[nextNumeralIdx + 1]}`;

                }
                else{
                    workingString += `${numeral}`.repeat(overAmount);
                    workingString += `${romanNumerals[nextNumeralIdx]}`;
                }
            }
            else{
                workingString += `${numeral}`.repeat(numOfM);
            }
        }
    }
    addNumerals( workingNumber, 1000, 'M' );
    addNumerals( workingNumber, 500, 'D' );
    addNumerals( workingNumber, 100, 'C' );
    addNumerals( workingNumber, 50, 'L' );
    addNumerals( workingNumber, 10, 'X' );
    addNumerals( workingNumber, 5, 'V' );
    addNumerals( workingNumber, 1, 'I' );

    console.log(workingString);
    return workingString;
}
   
convertToRoman(9);
convertToRoman(3614);