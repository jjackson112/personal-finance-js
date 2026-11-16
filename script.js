// create transactions - array
let transactions = []
// create a unique ID counter - track next available ID
let nextTransactionId = 1

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

// console.log(transactions.length) // to check some()

// edit + update the transaction
function editTransaction(id, updates) {
    // find transaction
    const selectedTransaction = transactions.find(item => item.id === id)

    // update selected transaction - Object.assign replaces selectedTransaction.notes, etc
    Object.assign(selectedTransaction, updates)
}

// editTransaction(1, {amount: 11.99, notes: "one stop shop groceries"})

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

// deleteTransaction()

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

// console.log(formatTransactionAmount(transactionSix))

function displayTransactions() {
    // const transactionTitle = document.querySelector("#headings h2")
    const transactionList = document.querySelector("#transaction-list")
    
    // transactionTitle.style.color = "green"
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

    // submit adding a transaction form
    const form = document.querySelector("#add-transaction-form")
    const merchantInput = document.querySelector("#merchant")
    const dateInput = document.querySelector("#date")
    const amountInput = document.querySelector("#amount")
    const categoryInput = document.querySelector("#category-dropdown")
    const accountInput = document.querySelector("#account-dropdown")
    const notesInput = document.querySelector("#notes")
    const tagInput = document.querySelector("#tag")

    form.addEventListener("submit", function(e) {
        e.preventDefault()
        const merchant = merchantInput.value
        const date = dateInput.value
        const amount = Number(amountInput.value)
        const category = categoryInput.value
        const account = accountInput.value
        const notes = notesInput.value
        const tag = tagInput.value

        // if user selects expense or income
        const typeInput = document.querySelector('input[name="type"]:checked')
        const type = typeInput.value

        // create new transaction object - use newly created variables
        const transaction = {
            id: nextTransactionId++,
            merchant: merchant,
            date: date, 
            amount: amount,
            category: category,
            type: type,
            account: account,
            notes: notes,
            tag: tag
        }

        // console.log(transaction)
        // console.log(nextTransactionId)

        addTransaction(transaction)
        displayTransactions()
        form.reset()
    })