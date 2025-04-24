// Get the current year and set it in the footer
document.getElementById("year").innerHTML = new Date().getFullYear();

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});