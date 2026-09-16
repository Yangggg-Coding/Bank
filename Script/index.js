import { Transactions } from "../Data/transactions.js";
import { totalExpenses } from "../Data/transactions.js";
import { totalIncome } from "../Data/transactions.js";
export function date() {
  const today = new Date();
  document.getElementById("today").textContent = today.toLocaleDateString();
}
date();

const balance = document.querySelector(".js-balance");
const income = document.querySelector(".js-income");
const expenses = document.querySelector(".js-expenses");

let totalBalance = totalIncome - totalExpenses;

income.textContent = `$${totalIncome.toFixed(2)}`;
expenses.textContent = `$${totalExpenses.toFixed(2)}`;
balance.textContent = `$${totalBalance.toFixed(2)}`;
