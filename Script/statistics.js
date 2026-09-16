import { totalBalance, totalIncome, totalExpenses } from "../Script/index.js";

const balance = document.querySelector(".js-balance");
const income = document.querySelector(".js-income");
const expenses = document.querySelector(".js-expenses");

balance.textContent = `$${totalBalance.toFixed(2)}`;
income.textContent = `$${totalIncome.toFixed(2)}`;
expenses.textContent = `$${totalExpenses.toFixed(2)}`;
