// Wrap all code that interacts with the DOM in a call to jQuery to 
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  function addToLS(key, value) {
    window.localStorage.setItem(key, value);
  }

  function getFromLS(key) {
    return window.localStorage.getItem(key);
  }
 
   // the id in the containing time-block is used as a key to save the user input in local storage.
  function saveNotes(btn) {
    var parentElem = $(btn).parent();
    var id = parentElem.attr("id");
    var desc = parentElem.find("textarea").val();
     addToLS(id, desc);
   }

   $(".saveBtn").each(function () {
    $(this).on("click", function () {
      saveNotes(this);
    });
  });

// apply past, present, or future class to each time block by comparing the id to the current hour.
var timeBlocks = $(".time-block");
  timeBlocks.each(function (index) {
    var hour = this.id.split("-")[1];
   var currentHour = dayjs().hour();
    if (hour < currentHour) $(this).addClass("past");
    if (hour == currentHour) $(this).addClass("present");
    if (hour > currentHour) $(this).addClass("future");
  });

  // get the user input data that was saved in localStorage and set the values of the corresponding textarea elements
  timeBlocks.each(function () {
    const notes = getFromLS(this.id);
    if (!notes) {
      $(this).find("textarea").text("");
    } else {
      $(this).find("textarea").text(notes);
    }
  });

 // display the current date in the header of the page.
 var formattedDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(formattedDate);

 
});
