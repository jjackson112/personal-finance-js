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
    date: "2026-11-03",
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
    date: "2026-11-01", 
    category: "Rent",
    amount: 1500.19,
    type: "expense",
    account: "Checking",
    notes: "random",
    tag: "rent"
}

const transactionFour = {
    id: 4,
    merchant: "Spotify",
    date: "2026-11-01", 
    category: "Music",
    amount: 10.99,
    type: "expense",
    account: "Checking",
    notes: "beats",
    tag: "music subscription"
}

const transactionFive = {
    id: 5,
    merchant: "Google",
    date: "2026-11-01", 
    category: "Cloud Service",
    amount: 0.99,
    type: "expense",
    account: "Checking",
    notes: "cloud",
    tag: "cloud subscription"
}

// testing
console.log(transactionOne.amount)
console.log(transactionTwo.category)
console.log(transactionThree.notes)
console.log(transactionFive.category)

// create transactions - array
let transactions = [transactionOne, transactionTwo, transactionThree, transactionFour]

console.log(transactions[1].merchant)
console.log(transactions[2].amount)
console.log(transactions[0].date)

// push() - add 4th transaction to existing transactions array
// const newTransactions = transactions.push(transactionFour)

// console.log(newTransactions)
// console.log(transactions)

// create the transaction 
function addTransaction(transaction) {
    // check if id exists or not
    const exists = transactions.some(item => item.id === transaction.id)

    console.log("Transaction ID already exists", exists)

    if (!exists) {
        transactions.push(transaction)
        return true
    }

    return false
}

// addTransaction(transactionFive)
// addTransaction(transactionFive)

// console.log(transactions.length) // to check some()

// update the transaction
function updateTransaction(id, transaction) {
    // find transaction
    const selectedTransaction = transactions.find(item => item.id === id)

    // update selected transaction

}
updateTransaction(3, {
    amount: 1.99,
    notes: "not so beats"
})

// delete a transaction
function deleteTransaction(id) {
    const existingId = transactions.some(item => item.id === id)

    if (existingId) {
        transactions = transactions.filter(item => item.id !== id)
        console.log(`Transaction ${id} deleted.`)
    } else {
        console.log("This transaction does not exist.")
    }

    console.log(transactions)
}

 deleteTransaction(2)
