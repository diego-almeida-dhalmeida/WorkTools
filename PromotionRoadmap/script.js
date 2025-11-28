// Tema
const body = document.body;
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Carregar tema salvo
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
}
