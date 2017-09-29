$(document).ready(function(){
  $(".svganim").removeClass("start");
  setTimeout(function(){
    $(".svganim").addClass("start");
  },200);

  $("#opening").removeClass("start");
  setTimeout(function(){
    $("#opening").addClass("start");
  },200);
});
