// Import custom module
const account = require('./account');

// Initial balance
console.log("Initial Balance:", account.getBalance());

// Deposit money
account.deposit(2000);

// Withdraw money
account.withdraw(1500);

// Display updated balance
console.log("Updated Balance:", account.getBalance());