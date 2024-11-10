// Document query selectors
let montrealElement = document.querySelector("#montreal");
let londonElement = document.querySelector("#london");
let tokyoElement = document.querySelector("#tokyo");
let citiesElement = document.querySelector("#cities");

// London Time
function updateLondonTime() {
  if (londonElement.length != 0) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment.tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY");
    londonTimeElement.innerHTML = `${londonTime.format("HH:mm:ss")}`;
  }
}

// Montreal Time
function updateMontrealTime() {
  let montrealDateElement = montrealElement.querySelector(".date");
  let montrealTimeElement = montrealElement.querySelector(".time");
  let montrealTime = moment.tz("America/Montreal");

  montrealDateElement.innerHTML = montrealTime.format("dddd Do MMMM YYYY");
  montrealTimeElement.innerHTML = `${montrealTime.format("HH:mm:ss")}`;
}

// Tokyo Time
function updateTokyoTime() {
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment.tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd Do MMMM YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format("HH:mm:ss")}`;
}

// Selected City time

let cityIntervalId; // Global variable to store the interval ID

function updateNewCity(event) {
  // Clear the previous interval if it exists
  if (cityIntervalId) {
    clearInterval(cityIntervalId); // Stop the previous interval
  }

  // Handling current location too
  let cityTimeZone =
    event.target.value === "current" ? moment.tz.guess() : event.target.value;
  // Capture the selected city's timezone and name

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let citiesElement = document.querySelector("#cities");
  // Define a function to update the city's date and time every second
  function updateCityInterval() {
    let cityTime = moment.tz(cityTimeZone); // Get the current time for the selected city

    // Update the inner HTML of the target element
    citiesElement.innerHTML = `
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
        </div>
        <div class="time" id="current-city-time">${cityTime.format(
          "HH:mm:ss"
        )}</div>
      </div>
      <div class="back"><a href="/"><button>Back</button></a></div>
    `;
  }
  cityIntervalId = setInterval(updateCityInterval, 1000);
}

let selectElement = document.querySelector("#new-city");
selectElement.addEventListener("change", updateNewCity);

updateLondonTime();
if (londonElement) {
  setInterval(updateLondonTime, 1000);
}

updateMontrealTime();
if (montrealElement) {
  setInterval(updateMontrealTime, 1000);
}

updateTokyoTime();
if (tokyoElement) {
  setInterval(updateTokyoTime, 1000);
}
