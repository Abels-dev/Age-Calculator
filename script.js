const display = document.querySelectorAll(".Display");
const errorMsg = document.querySelectorAll(".errorMsg");
const label=document.querySelectorAll(".label");
const inputs=document.querySelectorAll(".input")
const form = document.getElementById("form");

const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();
let isError;
let year;
let month;
let day;

function ageCalculator() {
   isError = false;
   label.forEach(lables=>lables.classList.remove("error"))
   inputs.forEach(input=>input.style.borderColor="hsl(0, 0%, 86%)")
   errorMsg.forEach((value) => (value.textContent = ""));
   if (currentYear >= Number(inputs[2].value))
      year = currentYear - Number(inputs[2].value);

   if (Number(inputs[0].value) < currentDate)
      day = currentDate - Number(inputs[0].value);
   else {
      if(Number(inputs[1].value)==4||Number(inputs[1].value)==6||Number(inputs[1].value)==9||Number(inputs[1].value)==11)
          day=30-Number(inputs[0].value)+currentDate;

      day = 31 - Number(inputs[0].value) + currentDate;
      month--;
   }
   if (Number(inputs[1].value) <= currentMonth)
      month = currentMonth - Number(inputs[1].value);
   else {
      month = 12 - Number(inputs[1].value) + currentMonth;
      year--;
   }
}
function error() {
   if ((Number(inputs[2].value) > currentYear)||(Number(inputs[2].value)<0)) {
      inputs[2].style.borderColor="hsl(0, 100%, 67%)";
      label[2].classList.add("error");
      errorMsg[2].textContent = "Must be in past";
      isError = true;
   }
   if ((Number(inputs[1].value) > 12)||(Number(inputs[1].value)<0)) {
      inputs[1].style.borderColor="hsl(0, 100%, 67%)";
      label[1].classList.add("error");
      errorMsg[1].textContent = "Must be valid month";
      isError = true;
   }
   if ((Number(inputs[0].value) > 31)||(Number(inputs[0].value)<0)) {
      inputs[0].style.borderColor="hsl(0, 100%, 67%)";
      label[0].classList.add("error");
      errorMsg[0].textContent = "Must be valid day";
      isError = true;
   }
   inputs.forEach((input,index)=>{
      if(input.value==''){
         input.style.borderColor="hsl(0, 100%, 67%)";
         label[index].classList.add("error");
         errorMsg[index].textContent = "This field is required";
         isError = true;
      }
   })
   if(Number(inputs[1].value)==4||Number(inputs[1].value)==6||Number(inputs[1].value)==9||Number(inputs[1].value)==11){
      if(Number(inputs[0].value)>30){
         inputs[0].style.borderColor="hsl(0, 100%, 67%)";
         label[0].classList.add("error");
         errorMsg[0].textContent = "Must be valid day";
         isError = true;
      }
   }
   else if(Number(inputs[1].value)==2){
      if(Number(inputs[0].value)>28){
         inputs[0].style.borderColor="hsl(0, 100%, 67%)";
         label[0].classList.add("error");
         errorMsg[0].textContent = "Must be valid day";
         isError = true;
      }
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
