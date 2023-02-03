function checkCashRegister(price, cash, cid) {

    const cashInDrawer = cid;
    const inDrawer = {
        'PENNY': true,
        'NICKEL': true,
        'DIME': true,
        'QUARTER': true,
        'ONE': true,
        'FIVE': true,
        'TEN': true,
        'TWENTY': true,
        'ONE HUNDRED': true
    };

    var change = (cash - price).toFixed(2);

    let totalCID = 0;

    for (let [k,v] of Object.entries(cashInDrawer)){
        totalCID += v[1];
        if (v[1] === 0) inDrawer[`${v[0]}`] = false;
    }

    const calcChangeReturned = amount =>{

        const changeArr = [];
        let workingRemainder = amount;

        const calcBill = bill => {
            const mults = Math.trunc(workingRemainder / bill);
            // console.log(mults, bill, workingRemainder);
            // workingRemainder = workingRemainder % bill;
            return mults;
        };
        const useAvailableBills = (bill, amountNeeded, billIdx) => {
            console.log("left", workingRemainder, `${bill}s`,"getting amount needed",amountNeeded);
            let billAvailability = +cashInDrawer[billIdx][1];
            let changeUsed = 0;

            if (billAvailability < amountNeeded){

                workingRemainder -= billAvailability;
                changeUsed = billAvailability;
            }
            else{
                workingRemainder -= amountNeeded;
                changeUsed = amountNeeded;
            }
            workingRemainder = (Math.round(workingRemainder * 100) / 100).toFixed(2);
            console.log("Able to get", changeUsed, "remaining", workingRemainder);
            changeArr.push([cashInDrawer[billIdx][0], changeUsed]);
            inDrawer[`${cashInDrawer[billIdx][0]}`] = false;
        };

        while (workingRemainder > 0){
            let amountNeeded;

            if (workingRemainder >= 100 && inDrawer["ONE HUNDRED"]){
                amountNeeded = calcBill(100) * 100;
                useAvailableBills(100, amountNeeded, 8 )
            }
            else if (workingRemainder >= 20 && inDrawer["TWENTY"]){
                amountNeeded = calcBill(20) * 20;
                console.log("Need this much in 20s", amountNeeded);
                useAvailableBills(20, amountNeeded, 7 )
            }
            else if (workingRemainder >= 10 && inDrawer["TEN"]){
                amountNeeded = calcBill(10) * 10;
                useAvailableBills(10, amountNeeded, 6 )
            }
            else if (workingRemainder >= 5 && inDrawer["FIVE"]){
                amountNeeded = calcBill(5) * 5;
                useAvailableBills(5, amountNeeded, 5 )
            }
            else if (workingRemainder >= 1 && inDrawer["ONE"]){
                amountNeeded = calcBill(1) * 1;
                useAvailableBills(1, amountNeeded, 4 )
            }
            else if (workingRemainder >= 0.25 && inDrawer["QUARTER"]){
                amountNeeded = calcBill(0.25) * 0.25;
                useAvailableBills(0.25, amountNeeded, 3 )
            }
            else if (workingRemainder >= 0.10 && inDrawer["DIME"]){
                amountNeeded = calcBill(0.10) * 0.10;
                useAvailableBills(0.10, amountNeeded, 2 )
            }
            else if (workingRemainder >= 0.05 && inDrawer["NICKLE"]){
                amountNeeded = calcBill(0.05) * 0.05;
                useAvailableBills(0.05, amountNeeded, 1 )
            }
            else if (workingRemainder >= 0.01 && inDrawer["PENNY"]){
                amountNeeded = calcBill(0.01) * 0.01;
                useAvailableBills(0.01, amountNeeded, 0 )
            }
            else {
                objToReturn.status = 'INSUFFICIENT_FUNDS';
                return [];
            };
        }

        return changeArr;

    }

    const objToReturn = {};

    if ( totalCID < change ){
        objToReturn.status = 'INSUFFICIENT_FUNDS';
        objToReturn.change = [];
    }
    else if ( totalCID == change) {
        objToReturn.status = 'CLOSED';
        objToReturn.change = cashInDrawer;
    }
    else if ( totalCID >= change) {
        objToReturn.status = 'OPEN';
        objToReturn.change = calcChangeReturned(change);
    }
    else{
        objToReturn.status = 'OPEN'; 
    }
    console.dir(objToReturn)
    return objToReturn;
}
  

checkCashRegister(19.5, 20, [
    ["PENNY", 0.01], 
    ["NICKEL", 0], 
    ["DIME", 0], 
    ["QUARTER", 0], 
    ["ONE", 1], 
    ["FIVE", 0], 
    ["TEN", 0], 
    ["TWENTY", 0], 
    ["ONE HUNDRED", 0]
]) ;

// should return {status: "INSUFFICIENT_FUNDS", change: []}.




// checkCashRegister(19.5, 20, [

//     ["PENNY", 1.01], 
//     ["NICKEL", 2.05], 
//     ["DIME", 3.1], 
//     ["QUARTER", 4.25], 
//     ["ONE", 90], 
//     ["FIVE", 55], 
//     ["TEN", 20], 
//     ["TWENTY", 60], 
//     ["ONE HUNDRED", 100]

// ]);

// checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01], 
//     ["NICKEL", 2.05], 
//     ["DIME", 3.1], 
//     ["QUARTER", 4.25], 
//     ["ONE", 90], 
//     ["FIVE", 55], 
//     ["TEN", 20], 
//     ["TWENTY", 60], 
//     ["ONE HUNDRED", 100]]);
 
//  should return 
// {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}