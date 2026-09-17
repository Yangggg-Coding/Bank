export let Transactions =
  JSON.parse(localStorage.getItem("Transactions")) || [];

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
