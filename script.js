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

const transactionSix = {
    id: 6,
    merchant: "Employer",
    date: "2026-10-30", 
    category: "Income",
    amount: 1900.43,
    type: "income",
    account: "Checking",
    notes: "cloud",
    tag: "paycheck"
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

// edit + update the transaction
function editTransaction(id, updates) {
    // find transaction
    const selectedTransaction = transactions.find(item => item.id === id)

    // update selected transaction - Object.assign replaces selectedTransaction.notes, etc
    Object.assign(selectedTransaction, updates)
}

editTransaction(1, {
    amount: 11.99,
    notes: "one stop shop groceries"
})

console.log(transactions)

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

// using the type property + format transaction amount to return signed amount as a string
function formatTransactionAmount(transaction) {
    // return a string with a signed amount
    const amount = transaction.amount

    if (transaction.type === "expense") {
        return (`-${amount}`)
    } else {
        return (`+${amount}`)
    }
}

console.log(formatTransactionAmount(transactionSix))

function displayTransactions() {
    const transactionTitle = document.querySelector("h2")
    const transactionList = document.querySelector("#transaction-list")
    
    transactionTitle.style.color = "green"
    // transactionList.textContent = transactions[0].merchant

    // prevent duplicates
    transactionList.textContent = ""

    transactions.forEach((transaction) => {
        const singleTransaction = document.createElement("p")
        singleTransaction.textContent = `${transaction.merchant}: ${formatTransactionAmount(transaction)}`
        transactionList.append(singleTransaction)

        console.log(transaction)
    })
}
    displayTransactions()
