document.getElementById("lastModified").textContent = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

const temperature = 12;
const windSpeed = 4;
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed);
    windChill = `${windChill.toFixed(1)} °C`;
}
document.querySelector("#windChill").textContent = windChill;