const inputDay = document.getElementById("dayInput");
const inputMonth = document.getElementById("monthInput");
const inputYear = document.getElementById("yearInput");
const display = document.querySelectorAll(".Display");
const errorMsg = document.querySelectorAll(".error");
const form = document.getElementById("form");

const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();
let isError = false;
let year;
let month;
let day;

function ageCalculator() {
   isError = false;
   errorMsg.forEach((value) => (value.textContent = ""));
   if (currentYear >= Number(inputYear.value))
      year = currentYear - Number(inputYear.value);

   if (Number(inputDay.value) < currentDate)
      day = currentDate - Number(inputDay.value);
   else {
      day = 30 - Number(inputDay.value) + currentDate;
      month--;
   }
   if (Number(inputMonth.value) <= currentMonth)
      month = currentMonth - Number(inputMonth.value);
   else {
      month = 12 - Number(inputMonth.value) + currentMonth;
      year--;
   }
}
function error() {
   if (Number(inputYear.value) > currentYear) {
      errorMsg[2].textContent = "Must be in past";
      isError = true;
   }
   if (Number(inputMonth.value) > 12) {
      errorMsg[1].textContent = "Must be Valid Month";
      isError = true;
   }

   if (Number(inputDay.value) > 30) {
      errorMsg[0].textContent = "Must be Valid Date";
      isError = true;
   }

   if (inputDay.value == "") {
      errorMsg[0].textContent = "This Field is required";
      isError = true;
   }
   if (inputMonth.value == "") {
      errorMsg[1].textContent = "This Field is required";

      isError = true;
   }
   if (inputYear.value == "") {
      errorMsg[2].textContent = "This Field is required";
      isError = true;
   }
}
function showResult() {
   if (!isError) {
      display[0].textContent = year;
      display[1].textContent = month;
      display[2].textContent = day;
   } else 
      display.forEach(displays=>displays.textContent='--'); 
}
form.addEventListener("submit", function (e) {
   e.preventDefault();
   ageCalculator();
   error();
   showResult();
});
