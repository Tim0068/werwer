$(document).ready(function() {
  $('#slide1_controls').on('click', 'span', function(){
    $("#slide1_buttons").css("transform","translateX("+$(this).index() * -450+"px)");
    $("#slide1_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});