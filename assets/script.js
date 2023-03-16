var saveButtonEl = $('.saveBtn');
var clearDayButton = $('.clearBtn');

// creates variable for current time from Day.js api then sets format for header
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY, HH:mm A'));


var twentyFourHourTime = today.format('HH');

console.log(twentyFourHourTime);

// main function to run all functionality once page loads.
$(function (init) {
  $(".officeHours").each(function () {
    // [1] at the end picks which number in the index of numbers listed in the ID
    var currentOfficeHours = parseInt($(this).attr("id").split("-")[1]);
    
    console.log(currentOfficeHours);

    if (twentyFourHourTime === currentOfficeHours){
      $(this).removeClass('future');
      $(this).removeClass('past');
      $(this).addClass('present');
    }
    else if (twentyFourHourTime < currentOfficeHours) {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
    else {
      $(this).removeClass('future');
      $(this).removeClass('present');
      $(this).addClass('past')
      
    };
    init();
  })
// save button functionality on each individual button; allows blank storage for text area
  $(saveButtonEl).click(function(event) {
    event.preventDefault();
  
    var buttonParentID = $(this).parent().attr('id');
    var textAreainput = $(this).parent().children().eq(1).val() || "";
    localStorage.setItem(buttonParentID, textAreainput);
 
  });
  // sets text area value with input text
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  // Clear Day function that clears text area and local storage then renders empty text area
  $(clearDayButton).click(function(event) {
    event.preventDefault(); 
    localStorage.clear();
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));
 
  });
}); 


