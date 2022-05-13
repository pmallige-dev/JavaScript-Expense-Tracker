const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
    {id: 1, text: 'Charger', amount: -30},
    {id: 2, text: 'Salary', amount: 3000},
    {id: 3, text: 'Mobile', amount: -80},
    {id: 4, text: 'Telly', amount: -900},
];

let transactions = dummyTransactions;

// Add Transactions to DOM list
function addTransactionDOM(transaction) {
    // Get Sign
    const sign = transaction.amount < 0 ? '-' : '+';

    const item = document.createElement('li');

    // Add class based on value
    item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');

    item.innerHTML = `
        ${transaction.text} <span>${sign}${Math.abs(transaction.amount)}</span> <button class="delete-btn">X</button>
    `;

    list.appendChild(item)
}

// Init App
function init() {
    list.innerHTML = '';

    transactions.forEach(addTransactionDOM);
}

init();
