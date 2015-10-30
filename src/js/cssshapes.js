$( "#wishlist_button1" ).click(function() {
  $('.heart').toggleClass("added");
  $('.tick').toggleClass("on");
  $('.plus').toggleClass("on");
});
$("#wishlist_button1").mousedown(function() {
	$('.heart').addClass("twist");
});
$("#wishlist_button1").mouseup(function() {
	$('.heart').removeClass("twist");
});