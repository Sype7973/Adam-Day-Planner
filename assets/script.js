var saveButtonEl = $('.saveBtn');





console.log(saveButtonEl);


var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));

var twentyFourHourTime = today.format('HH');

// var twentyFourHourTime = today.format('HH');

// $function(officeHoursMatch); 

console.log(twentyFourHourTime);


// .children().eq(1).text()

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function (init) {
  $(".officeHours").each(function () {
    // [1] at the end picks which number in the index of numbers listed in the ID
    var currentOfficeHours = parseInt($(this).attr("id").split("-")[1]);
    var storedTextArea = localStorage.getItem("hour-" + currentOfficeHours);
    console.log(storedTextArea);
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

  $(saveButtonEl).click(function(event) {
    event.preventDefault();
  
    var buttonParentID = $(this).parent().attr('id');
    var textAreainput = $(this).parent().children().eq(1).val() || "";
    localStorage.setItem(buttonParentID, textAreainput);
  });

}); 
//   
// 
    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.


// call functions
// officeHoursMatch();
