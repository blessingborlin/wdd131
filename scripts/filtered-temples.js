document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    } else {
        menuButton.textContent = "☰";
    }
});
