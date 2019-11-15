import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { WeekdayCalculator } from './backend-code';


// $(document).ready(function() {
//
// });

$(document).ready(function() {
  $("form#dateEntry").submit(function(event) {
    event.preventDefault();

    var dateSelected = $("#dateInput").val();
    let date = new Date(dateSelected);
    let weekDay = new WeekdayCalculator(date);
    $("#result").text(weekDay.calculateDate());
  });
});
