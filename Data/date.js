export function date() {
  const today = new Date();
  document.getElementById("today").innerHTML = today.toLocaleDateString();
}
date();
