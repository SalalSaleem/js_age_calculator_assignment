// var userInput = new Date(prompt('Enter Your DOB',"10 oct 2000")).getTime();
function ageCalculator(){

var userInput = document.getElementById("userInputData").value;
var userinputDate = new Date(userInput);
var date = new Date().getTime();

var remaining = date - userInput;

var resultForSec = remaining/1000;
var resultForMins = resultForSec/60;
var resultForHours = resultForMins/60;
var resultForDays = resultForHours/24;
var resultForMonths = resultForDays/30.4375;
var resultForYears = resultForMonths/12;

var sec = Math.floor(resultForSec)
var mins = Math.floor(resultForMins)
var hours = Math.floor(resultForHours)
var days = Math.floor(resultForDays)
var months = Math.floor(resultForMonths)
var age = Math.floor(resultForYears)

console.log("your age is "+ age + " years " + months + " months " + days + " days " + hours + " hours " + mins + " Minutes " + sec + " Seconds ")
}

// console.log("your age is "+ age + " years " + months + " months " + days + " days " + hours + " hours " + mins + " Minutes " + sec + " Seconds ")