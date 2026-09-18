// Data/transactions.js

export let Transactions =
  JSON.parse(localStorage.getItem("Transactions")) || [];

const tran = document.querySelector(".js-transaction");
const typeFilter = document.getElementById("type-filter");
const categoryFilter = document.getElementById("category-filter");
const dateSort = document.getElementById("date-sort");

function parseTransactionDate(value) {
  if (!value) return 0;

  const directDate = new Date(value);
  if (!Number.isNaN(directDate.getTime())) {
    return directDate.getTime();
  }

  const monthMap = {
    jan: 0,
    feb: 1,
    mar: 2,
    apr: 3,
    may: 4,
    jun: 5,
    jul: 6,
    aug: 7,
    sep: 8,
    oct: 9,
    nov: 10,
    dec: 11,
  };

  const match = String(value)
    .trim()
    .match(/^(\d{1,2})\s+([A-Za-z]{3})\s+(\d{4})$/);

  if (!match) return 0;

  const [, day, monthName, year] = match;
  const monthIndex = monthMap[monthName.toLowerCase()];

  if (monthIndex === undefined) return 0;

  const parsedDate = new Date(Number(year), monthIndex, Number(day));
  return Number.isNaN(parsedDate.getTime()) ? 0 : parsedDate.getTime();
}

function sortTransactions(list, mode = "newest") {
  const sorted = [...list];

  if (mode === "newest") {
    sorted.sort(
      (a, b) => parseTransactionDate(b.date) - parseTransactionDate(a.date),
    );
  } else if (mode === "oldest") {
    sorted.sort(
      (a, b) => parseTransactionDate(a.date) - parseTransactionDate(b.date),
    );
  } else if (mode === "highest") {
    sorted.sort((a, b) => Number(b.amount) - Number(a.amount));
  } else if (mode === "lowest") {
    sorted.sort((a, b) => Number(a.amount) - Number(b.amount));
  }

  return sorted;
}

function renderTransactions(list, mode = "newest") {
  if (!tran) return;

  tran.innerHTML = "";
  const sortedList = sortTransactions(list, mode);

  sortedList.forEach((transactions) => {
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
  if (dateSort) {
    dateSort.value = "newest";
  }
  renderTransactions(Transactions, "newest");
}

if (typeFilter) {
  typeFilter.addEventListener("change", () => {
    const value = typeFilter.value;
    const baseList =
      value === "all"
        ? Transactions
        : Transactions.filter((t) => t.type === value);
    const currentMode = dateSort ? dateSort.value : "newest";
    renderTransactions(baseList, currentMode);
  });
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", () => {
    const type = categoryFilter.value;
    const baseList =
      type === "all"
        ? Transactions
        : Transactions.filter((t) => t.category === type);
    const currentMode = dateSort ? dateSort.value : "newest";
    renderTransactions(baseList, currentMode);
  });
}

if (dateSort) {
  dateSort.addEventListener("change", () => {
    const value = dateSort.value;
    const currentType = typeFilter ? typeFilter.value : "all";
    const currentCategory = categoryFilter ? categoryFilter.value : "all";

    let filtered = Transactions;

    if (currentType !== "all") {
      filtered = filtered.filter((t) => t.type === currentType);
    }

    if (currentCategory !== "all") {
      filtered = filtered.filter((t) => t.category === currentCategory);
    }

    renderTransactions(filtered, value);
  });
}
