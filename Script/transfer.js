import { totalBalance } from "../Script/index.js";

document.querySelector(".js-balance").innerHTML = `$${totalBalance.toFixed(2)}`;
