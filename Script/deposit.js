import { totalBalance, deposit } from "../Script/index.js";
import { getNextId } from "../Script/transfer.js";
import { Transactions } from "../Data/transactions.js";

document.querySelector(".js-balance").textContent =
  `$${totalBalance.toFixed(2)}`;

const accUserElement = document.querySelector(".js-accNumUser");
const descriptionElement = document.querySelector(".js-description");
const amountElement = document.querySelector(".js-amount");
const depositEle = document.querySelector(".js-deposit");

depositEle.addEventListener("click", () => {
  let amount = Number(amountElement.value);
  let accUser = String(accUserElement.value);
  let description = descriptionElement.value;

  if (!deposit(amount)) {
    alert("You can not deposit money as minus!");
    return;
  }

  let newTransaction = {
    id: getNextId(Transactions),
    description: description,
    amount: amount,
    type: "Income",
    category: accUser,
    date: new Date()
      .toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
      .toLowerCase(),
  };
  Transactions.push(newTransaction);
  localStorage.setItem("Transactions", JSON.stringify(Transactions));
});
