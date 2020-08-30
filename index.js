$(".nav-toggle").click(function(){
  showDiv();
});
function showDiv(){
    $(".quizIntro").addClass("show-quizIntro");
    //$(".durgaImg1").addClass("addPadding");
    $("#durga").addClass("center");
}
$(".close-btn").click(function(){
  closeDiv();
});
function closeDiv(){
  $(".quizIntro").removeClass("show-quizIntro");
  //$(".durgaImg1").removeClass("addPadding");
  $("#durga").removeClass("center");
}
