document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "X";
    } else {
        menuButton.textContent = "☰";
    }

});