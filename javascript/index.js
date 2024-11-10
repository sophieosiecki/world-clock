// Document query selectors
let montrealElement = document.querySelector("#montreal");
let londonElement = document.querySelector("#london");
let tokyoElement = document.querySelector("#tokyo");

// London Time
function updateLondonTime() {
  if (londonElement.length != 0) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY");
    londonTimeElement.innerHTML = `${londonTime.format("HH:mm:ss")}`;
  }
}

// Montreal Time
function updateMontrealTime() {
  let montrealDateElement = montrealElement.querySelector(".date");
  let montrealTimeElement = montrealElement.querySelector(".time");
  let montrealTime = moment().tz("America/Montreal");

  montrealDateElement.innerHTML = montrealTime.format("dddd Do MMMM YYYY");
  montrealTimeElement.innerHTML = `${montrealTime.format("HH:mm:ss")}`;
}

// Tokyo Time
function updateTokyoTime() {
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("dddd Do MMMM YYYY");
  tokyoTimeElement.innerHTML = `${tokyoTime.format("HH:mm:ss")}`;
}

// Selected City time
function updateNewCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  citiesElement = document.querySelector("#cities");
  console.log(event);
  citiesElement.innerHTML = `
  <div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format(
                      "dddd Do MMMM YYYY"
                    )}</div>
                </div>
                <div class="time">${cityTime.format("HH:mm:ss")}</div>
            </div>
  `;
}

let selectElement = document.querySelector("#new-city");
selectElement.addEventListener("change", updateNewCity);

updateLondonTime();
if (londonElement.length != 0) {
  setInterval(updateLondonTime, 1000);
}

updateMontrealTime();
if (montrealElement.length != 0) {
  setInterval(updateMontrealTime, 1000);
}

updateTokyoTime();
if (tokyoElement.length != 0) {
  setInterval(updateTokyoTime, 1000);
}
