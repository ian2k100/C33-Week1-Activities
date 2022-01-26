// activity 1 

// function factorial (n){
//     if ((n === 0) || (n === 1)){
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }

// console.log(factorial(33));

// // turn the Declaration into a Arrow function syntax 

// const factorialA = (number) => {
//     if ((number === 0) || (number === 1)){
//         return 1;
//     } else {
//         return (number * factorialA(number-1));
//     }
// }

// console.log(factorialA(33));

// // activity 2 

// let orderCount = 0;

// const takeOrder = (topping, size, crust) => {
//     console.log(`${size} pizza with ${topping} and ${crust} crust. This is order number ${orderCount}`);
//     orderCount++;
// }

// takeOrder("pineapple", "Medium", "stuffed");
// takeOrder("Ham", "Small", "normal");
// takeOrder("Bacon", "Large", "thin");
// takeOrder("Extra cheese", "Large", "stuffed");

// activity 3 

// const cashWithdrawal = (amount, accnum) => {
//     console.log(`Withdrawing ${amount} from account ${accnum}`);
// }

// cashWithdrawal(300, 50449921);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);


let pin = [1231, 1122, 1324];
let withdrawal = [300, 500, 100];

const accountDetails = (accnum, aPin, balance) => {
    for (let i = 0; i < pin; i++){
    if ((accnum === accnum) && (aPin === pin[i])){
        console.log(`You're pin number for account number ${accnum} is correct. How much money do you want to withdraw.`);
        for (let j = 0; j < withdrawal.length; j++){
        if (balance >= withdrawal[j]){
            console.log(`You're withdrawal of £${withdrawal} was successful.`)
        }
        else{
            console.log(`Not enough money in your account!`)
        }
    }
}   else{
        console.log(`You're pin number was incorrect.`);
    }
}
}

accountDetails(50449921, 1234, 200);
accountDetails(50449922, 1122, 200);
accountDetails(50449923, 1234, 200);
      


