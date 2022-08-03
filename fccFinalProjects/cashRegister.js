////////////////////////////////////////////////////////////////////////
////////////JavaScript Algorithms and Data Structures Projects//////////
////////////////////////////////////////////////////////////////////////
// 
// Cash Register
// 
// 
// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument 
// (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or 
// if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is 
// equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in 
// highest to lowest order, as the value of the change key.



function checkCashRegister(price, cash, cid) {
    const checkCurrency = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    let changeDue = cash - price;
    let changeDueArray = [
        ['PENNY', 0],
        ['NICKEL', 0],
        ['DIME', 0],
        ['QUARTER', 0],
        ['ONE', 0],
        ['FIVE', 0],
        ['TEN', 0],
        ['TWENTY', 0],
        ['ONE HUNDRED', 0]
    ];
    let storeCashBalance = +cid.reduce((acc, value) => {
        return acc + value[1]
    }, 0).toFixed(2);


    if (changeDue > storeCashBalance) {
        return { "status": "INSUFFICIENT_FUNDS", "change": [] }
    } else if (changeDue === storeCashBalance) {
        return { "status": "CLOSED", "change": cid }
    }


    let i = 8;
    while (i >= 0) {
        if (changeDue > storeCashBalance) {
            return { "status": "INSUFFICIENT_FUNDS", "change": [] }
        }
        let amountInRegister = Math.floor(+(cid[i][1] / checkCurrency[i]).toFixed(2));
        let changeDenominator = Math.floor(+(changeDue / checkCurrency[i]).toFixed(2));
        let qtyOfDenominatorX = amountInRegister >= changeDenominator ? changeDenominator : amountInRegister;
        changeDueArray[i][1] = checkCurrency[i] * qtyOfDenominatorX;

        storeCashBalance -= checkCurrency[i] * amountInRegister;
        changeDue -= changeDueArray[i][1];
        i -= 1;
    }
    return { "status": "OPEN", "change": changeDueArray.filter(x => x[1] !== 0).reverse() }
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));




////////////////////////////////////////////////////////////////////////

