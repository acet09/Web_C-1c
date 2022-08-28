"use strict";
// Jquery
$(document).ready(function(){
  // nav#gnb
  $(".gnb__main > li").hover(function(){
    $(this).find(".gnb__sub").stop().slideDown(250);
  },function(){ 
    $(this).find(".gnb__sub").stop().slideUp(250);
  });

  // slide
  $(".slide__box > div").hide();
  $(".slide__box > div:first").show();
  function slidemove(){
    $(".slide__box > div:first").fadeOut().next().fadeIn().end().appendTo(".slide__box");
  }
  setInterval(slidemove, 3000);

  // pop
  $("#pop").hide();
  $(".notice__box > ul li:first").click(function(){
    $("#pop").show();
  });
  $("#pop #popclose").click(function(){
    $("#pop").hide();
  });

  // tab
  $(".notgall__contents > div").hide();
  $(".notgall__contents > div:first").show();
  $(".notgall__title a").click(function(){
    let num=$(this).index();
    $(".notgall__title a").removeClass('active');
    $(this).addClass('active');
    $(".notgall__contents > div").hide();
    $(".notgall__contents > div").eq(num).show();
  });


});