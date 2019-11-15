export function WeekdayCalculator(date) {
  this.date = date;
}

WeekdayCalculator.prototype.weekdays = function(weekday) {
  if (weekday === "Sunday"){
    return 0;
  }
  if (weekday === "Monday"){
    return 1;
  }
  if (weekday === "Tuesday"){
    return 2;
  }
  if (weekday === "Wednesday"){
    return 3;
  }
  if (weekday === "Thursday"){
    return 4;
  }
  if (weekday === "Friday"){
    return 5;
  }
  if (weekday === "Saturday"){
    return 6;
  }
};

WeekdayCalculator.prototype.years = function(year) {
  if (year >= 1800 && year <= 1899) {
    return weekdays("Friday");
  }
  if (year >= 1900 && year <= 1999) {
    return weekdays("Wednesday");
  }
  if (year >= 2000 && year <= 2099) {
    return weekdays("Tuesday");
  }
  if (year >= 2100 && year <= 2199) {
    return weekdays("Sunday");
  }
};

WeekdayCalculator.prototype.calculateDate = function() {
  var getLastTwoDigitsOfYear = parseInt(this.date.getFullYear().substr(-2));
  var firstStep = getLastTwoDigitsOfYear / 12;
  var secondStep = getLastTwoDigitsOfYear - 12*6;
  var thirdStep = secondStep / 4;
  var fourthStep = years(parseInt(this.date.getFullYear()));
  var fifthStep = years(fourthStep);
  let sum = firstStep + secondStep +thirdStep +fifthStep;
  let sixStep = sum -(sum/7)*7;
  if(sixStep===0){
    return "Sunday";
  }
  else if(sixStep===1){
    return "Monday";
  }
  else if(sixStep===2){
    return "Tuesday";
  }
  else if(sixStep===3){
    return "Wednesday";
  }
  else if(sixStep===4){
    return "Thursday";
  }
  else if(sixStep===5){
    return "Friday";
  }
  else if(sixStep===6){
    return "Saturday";
  }
};
