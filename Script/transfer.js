import { subtractFromBalance, totalBalance } from "../Script/index.js";
import { Transactions } from "../Data/transactions.js";

const tranferToElement = document.querySelector(".js-accNumUser");
let amountElement = document.querySelector(".js-amount");
const descriptionElement = document.querySelector(".js-description");
const sendElement = document.querySelector(".js-sendBtt");

//generate id
export function getNextId(list) {
  if (list.length === 0) return 1;
  return Math.max(...list.map((t) => t.id)) + 1;
}

if (!sendElement) {
  // This module is also imported for its shared getNextId helper.
} else {
  document.querySelector(".js-balance").textContent =
    `$${totalBalance.toFixed(2)}`;

  sendElement.addEventListener("click", () => {
    let tranferTo = String(tranferToElement.value);
    let amount = Number(amountElement.value);
    let description = String(descriptionElement.value);

    if (!subtractFromBalance(amount)) {
      alert("You do not have enough balance!");
      return;
    } else {
      subtractFromBalance();
    }

    let newTransaction = {
      id: getNextId(Transactions),
      description: description,
      amount: amount,
      type: "Expenses",
      category: tranferTo,
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
}
