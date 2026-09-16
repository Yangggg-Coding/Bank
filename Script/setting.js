const radio = document.querySelectorAll('input[name="theme"]');
const savedTheme = localStorage.getItem("theme") || "light";
const selectedRadio = document.querySelector(
  `input[name="theme"][value="${savedTheme}"]`,
);

if (selectedRadio) {
  selectedRadio.checked = true;
}

radio.forEach((radios) => {
  radios.addEventListener("change", () => {
    document.documentElement.setAttribute("data-theme", radios.value);
    localStorage.setItem("theme", radios.value);
  });
});
