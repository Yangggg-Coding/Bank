export const Transactions = [
  {
    id: 1,
    description: "Coffee",
    amount: 2,
    type: "Expenses",
    category: "Drinking",
    date: "9 sep 2026",
  },
  {
    id: 2,
    description: "Coffee",
    amount: 2,
    type: "Expenses",
    category: "Drinking",
    date: "9 sep 2026",
  },
  {
    id: 3,
    description: "Coffee",
    amount: 2,
    type: "Expenses",
    category: "Drinking",
    date: "9 sep 2026",
  },
  {
    id: 4,
    description: "Birthday",
    amount: 800,
    type: "Income",
    category: "Birthday",
    date: "9 sep 2026",
  },
  {
    id: 5,
    description: "Coffee",
    amount: 2,
    type: "Expenses",
    category: "Drinking",
    date: "9 sep 2026",
  },
  {
    id: 6,
    description: "Coffee",
    amount: 2,
    type: "Expenses",
    category: "Drinking",
    date: "9 sep 2026",
  },
  {
    id: 7,
    description: "Coffee",
    amount: 100,
    type: "Expenses",
    category: "Drinking",
    date: "9 sep 2026",
  },
];
export let totalIncome = Transactions.reduce((total, transactions) => {
  if (transactions.type === "Income") {
    return total + transactions.amount;
  }
  return total;
}, 0);
export let totalExpenses = Transactions.reduce((total, transactions) => {
  if (transactions.type === "Expenses") {
    return total + transactions.amount;
  }
  return total;
}, 0);
let balance = totalIncome - totalExpenses;

const tran = document.querySelector(".js-transaction");
//check before update
if (tran) {
  Transactions.forEach((transactions) => {
    if (transactions.type === "Expenses") {
      tran.innerHTML += `<div class="services-2">
            <p>${transactions.date}</p>
            <p>${transactions.description}</p>
            <p>${transactions.category}</p>
            <span>${transactions.type}</span>
            <span>$${transactions.amount}</span>
            <button>Edit</button>
          </div>`;
    } else {
      tran.innerHTML += `<div class="services-1">
            <p>${transactions.date}</p>
            <p>${transactions.description}</p>
            <p>${transactions.category}</p>
            <span>${transactions.type}</span>
            <span>$${transactions.amount}</span>
            <button>Edit</button>
          </div>`;
    }
  });
}
