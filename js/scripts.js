$(function(){
  $("#design").click(function(){
    $("#img-design").toggle(700, "swing");
    $("#first-p-design").toggle(700,"swing",function(){
      $("#design").toggleClass("opposite")
    });
  });

  $("#development").click(function(){
    $("#img-development").toggle(700, "swing");
    $("#first-p-development").toggle(700,"swing",function(){
      $("#development").toggleClass("opposite")
    });
  });

  $("#product-management").click(function(){
    $("#img-product").toggle(700, "swing");
    $("#first-p-product").toggle(700,"swing",function(){
      $("#product-management").toggleClass("opposite")
    });
  });
  $("portfolio-images").hover(function(){
    $("port1").toggle();
  });
});

function submit(){
  alert("Thank you. Your message has been received.")
}