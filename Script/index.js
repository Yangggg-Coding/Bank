import { Transactions } from "../Data/transactions.js";

const balance = document.querySelector(".js-balance");
const income = document.querySelector(".js-income");
const expenses = document.querySelector(".js-expenses");

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

export let totalBalance = totalIncome - totalExpenses;

export function subtractFromBalance(amount) {
  if (!Number.isFinite(amount) || amount <= 0 || amount > totalBalance) {
    return false;
  }

  totalBalance -= amount;
  totalExpenses += amount;

  if (balance) {
    balance.textContent = `$${totalBalance.toFixed(2)}`;
  }
  if (expenses) {
    expenses.textContent = `$${totalExpenses.toFixed(2)}`;
  }

  return true;
}

if (balance) {
  balance.textContent = `$${totalBalance.toFixed(2)}`;
}
if (income) {
  income.textContent = `$${totalIncome.toFixed(2)}`;
}
if (expenses) {
  expenses.textContent = `$${totalExpenses.toFixed(2)}`;
}
