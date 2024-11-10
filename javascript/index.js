// London Time
function updateLondonTime() {
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("dddd Do MMMM YYYY");
  londonTimeElement.innerHTML = `${londonTime.format("H:m:s")}`;
}

// Los Angeles Time
function updateLosAngelesTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("dddd Do MMMM YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format("H:m:s")}`;
}

// Montreal Time
function updateMontrealTime() {
  let montrealElement = document.querySelector("#montreal");
  let montrealDateElement = montrealElement.querySelector(".date");
  let montrealTimeElement = montrealElement.querySelector(".time");
  let montrealTime = moment().tz("America/Montreal");

  montrealDateElement.innerHTML = montrealTime.format("dddd Do MMMM YYYY");
  montrealTimeElement.innerHTML = `${montrealTime.format("H:m:s")}`;
}

updateLondonTime();
setInterval(updateLondonTime, 1000);

updateLosAngelesTime();
setInterval(updateLosAngelesTime, 1000);

updateMontrealTime();
setInterval(updateMontrealTime, 1000);
