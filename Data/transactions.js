// Data/transactions.js

export let Transactions =
  JSON.parse(localStorage.getItem("Transactions")) || [];

const tran = document.querySelector(".js-transaction");
const typeFilter = document.getElementById("type-filter");
const categoryFilter = document.getElementById("category-filter");
const dateSort = document.getElementById("date-sort");

function renderTransactions(list) {
  tran.innerHTML = "";
  list.forEach((transactions) => {
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

if (tran) {
  renderTransactions(Transactions);
}

if (typeFilter) {
  typeFilter.addEventListener("change", () => {
    const value = typeFilter.value;
    if (value === "all") {
      renderTransactions(Transactions);
    } else {
      const filtered = Transactions.filter((t) => t.type === value);
      renderTransactions(filtered);
    }
  });
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", () => {
    const type = categoryFilter.value;
    if (type === "all") {
      renderTransactions(Transactions);
    } else {
      const filtered = Transactions.filter((t) => t.category === type);
      renderTransactions(filtered);
    }
  });
}

if (dateSort) {
  dateSort.addEventListener("change", () => {
    let value = dateSort.value;
    const sorted = [...Transactions];// copy from transactions 

    if (value === "newest") {
      sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (value === "oldest") {
      sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (value === "highest") {
      sorted.sort((a, b) => b.amount - a.amount);
    } else if (value === "lowest") {
      sorted.sort((a, b) => a.amount - b.amount);
    }
    renderTransactions(sorted);
  });
}
