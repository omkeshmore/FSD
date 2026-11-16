// Initial account balance
let balance = 5000;

// Deposit operation
function deposit(amount) {
    balance = balance + amount;
    console.log("Deposited:", amount);
}

// Withdrawal operation
function withdraw(amount) {
    if (amount <= balance) {
        balance = balance - amount;
        console.log("Withdrawn:", amount);
    } else {
        console.log("Insufficient Balance!");
    }
}

// Display balance
function getBalance() {
    return balance;
}

// Export functions
module.exports = {
    deposit,
    withdraw,
    getBalance
};