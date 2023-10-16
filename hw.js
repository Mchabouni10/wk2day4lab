// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time


/*
function evaluate(grade) {
    if (grade >= 80) {
        console.log("You did a good job");
    } else if (grade >= 70) {
        console.log("Keep trying");
    } else if (grade >= 60) {
        console.log("ehhhh");
    } else if (grade >= 55) {
        console.log("Not too good");
    } else {
        console.log("You need to work harder");
    }
}
*/

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

/* function multipleof10(num) {
    for (let i = 10; i <=num ; i += 10) {
        console.log(i);
    }
        multipleof10(90);
}
*/


// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return
/*
function FChange(bill, item) {
    const change = bill - item;
    if (change >= 0) {
        const quarters = Math.floor(change / 0.25);
        return quarters;
    } else {
        return 0; 
    }
}

const bill = 10;
const item = 7.35;
const quartersInChange = FChange(bill, item);
console.log(`${quartersInChange} `);
*/
//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  
//Return in as large denominations as possible. Parameters should be amount paind and amount cost

function calculateBillsInChange(billAmount, itemPrice) {
    const change = billAmount - itemPrice;
    
    if (change <= 0) {
        return "No change due.";
    }

    const billDenominations = [100, 50, 20, 10, 5, 1]; // Common bill denominations
    let changeToReturn = {};

    for (const denomination of billDenominations) {
        if (change >= denomination) {
            const numberOfBills = Math.floor(change / denomination);
            changeToReturn[denomination] = numberOfBills;
            change -= numberOfBills * denomination;
        }
    }
    return changeToReturn;
}

// Example usage:
const billAmount = 100; // The amount paid
const itemPrice = 34.75; // The cost of the item
const changeInBills = calculateBillsInChange(billAmount, itemPrice);
console.log("Change in Bills:");
for (const denomination in changeInBills) {
    console.log(`$${denomination} bills: ${changeInBills[denomination]}`);
}





// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).


/*for (let i = 1; i <= 100; i++)
{
    if (i % 3 === 0 && i % 5 === 0) 
    {
        console.log("FizzBuzz");
    } 
    else if (i % 3 === 0) 
    {
        console.log("Fizz");
    } 
    else if (i % 5 === 0) 
    {
        console.log("Buzz");
    } 
    else 
    {
        console.log(i);
    }
}
*/