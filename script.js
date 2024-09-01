"use strict";

let alertDay = document.getElementById("alert-day");
let alertMonth = document.getElementById("alert-month");
let alertYear = document.getElementById("alert-year");

const fieldAlertsRemove = function () {
  alertDay.classList.remove("hidden");
  alertMonth.classList.remove("hidden");
  alertYear.classList.remove("hidden");
};

const changeColorDates = function (color) {
  document.getElementById("date").style.color = color;
  document.getElementById("month").style.color = color;
  document.getElementById("year").style.color = color;
};

const changeColorBoxes = function (color) {
  document.getElementById("inputDay").style.borderColor = color;
  document.getElementById("inputMonth").style.borderColor = color;
  document.getElementById("inputYear").style.borderColor = color;
};
const btnCalculate = document.getElementById("btn-calculate");
btnCalculate.addEventListener("click", function () {
  const inputDay = document.getElementById("inputDay").value;
  const inputMonth = document.getElementById("inputMonth").value;
  const inputYear = document.getElementById("inputYear").value;

  if (inputDay > 30) {
    changeColorBoxes("hsl(0, 100%, 67%)");
    changeColorDates("hsl(0, 100%, 67%)");
    fieldAlertsRemove();
    alertDay.textContent = "Must be a valid Day";
    alertMonth.textContent = "";
    alertYear.textContent = "";
  } else if (inputMonth > 12) {
    changeColorBoxes("hsl(0, 100%, 67%)");
    changeColorDates("hsl(0, 100%, 67%)");
    fieldAlertsRemove();
    alertDay.textContent = "";
    alertMonth.textContent = "Must be a valid Month";
    alertYear.textContent = "";
  } else if (inputYear > 2024) {
    changeColorBoxes("hsl(0, 100%, 67%)");
    changeColorDates("hsl(0, 100%, 67%)");
    fieldAlertsRemove();
    alertDay.textContent = "";
    alertMonth.textContent = "";
    alertYear.textContent = "Must be in the past";
  } else if (!inputDay && !inputMonth && !inputYear) {
    changeColorBoxes("hsl(0, 100%, 67%)");
    fieldAlertsRemove();
    changeColorDates("hsl(0, 100%, 67%)");
  } else {
    alertDay.classList.add("hidden");
    alertMonth.classList.add("hidden");
    alertYear.classList.add("hidden");
    changeColorDates("hsl(0, 1%, 44%)");
    changeColorBoxes("hsl(0, 0%, 86%)");

    let day = 31 - inputDay;
    let month = 12 - inputMonth;
    let year = 2024 - inputYear;
    document.getElementById("display-days").textContent = day;
    document.getElementById("display-months").textContent = month;
    document.getElementById("display-years").textContent = year;
  }
});
