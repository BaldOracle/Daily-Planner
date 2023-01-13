var currentTime = dayjs().hour();


$(document).ready(function(){

// event listener nfor save button
$('.saveBtn').on('click', function(){
  //pull information being typed in. Use the time ID for when item is logged. 
  var eventDescription = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id');
  
  //set local storage so the information stays if the site is closed 
  localStorage.setItem(time, eventDescription);
})




 function cssClass () {
$(function () {

  $('.time-block').each(function() {
    var scheduleTime = parseInt($(this).attr('id').split('-')[1]);

    if (currentTime === scheduleTime) {
      $(this).addClass('present')
    } else if (currentTime < scheduleTime) {
      $(this).addClass('future')
    } else {
      $(this).addClass('past')
    }
  })

});
}

cssClass();
// pull local storage data 
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
  
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));

})
