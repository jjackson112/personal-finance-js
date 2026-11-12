// create an object with sample data

const transactionOne = {
    id: 1,
    merchant: "Kroger",
    date: "2026-11-11", // YYYY-MM-DD format
    category: "Groceries",
    amount: 85.50,
    type: "expense",
    account: "Checking",
    notes: "random",
    tag: "groceries"
}

const transactionTwo = {
    id: 2,
    merchant: "Walmart",
    date: "2026-11-03", // YYYY-MM-DD format
    category: "Groceries",
    amount: 35.59,
    type: "expense",
    account: "Checking",
    notes: "random",
    tag: "groceries"
}

const transactionThree = {
    id: 3,
    merchant: "Landlord",
    date: "2026-11-01", // YYYY-MM-DD format
    category: "Rent",
    amount: 1500.19,
    type: "expense",
    account: "Checking",
    notes: "random",
    tag: "rent"
}

// testing
console.log(transactionOne.amount)
console.log(transactionTwo.category)
console.log(transactionThree.notes)

// create transactions - array
const transactions = [transactionOne, transactionTwo, transactionThree]

console.log(transactions)