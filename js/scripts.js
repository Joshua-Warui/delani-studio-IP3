$(function(){
  $("#design").click(function(){
    $("#img-design").toggle(700, "swing");
    $("#first-p-design").toggle(700,"swing",function(){
      $("#design").toggleClass("opposite")
    });
  });
});

$(function(){
  $("#development").click(function(){
    $("#img-development").toggle(700, "swing");
    $("#first-p-development").toggle(700,"swing",function(){
      $("#development").toggleClass("opposite")
    });
  });
});

$(function(){
  $("#product-management").click(function(){
    $("#img-product").toggle(700, "swing");
    $("#first-p-product").toggle(700,"swing",function(){
      $("#product-management").toggleClass("opposite")
    });
  });
});