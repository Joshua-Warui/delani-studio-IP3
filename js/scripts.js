function submit(){
  alert("Thank you. Your message has been received.")
};

function portfolioHover(column,portImage,portName){
  $(column).hover(function(){
    $(portImage).animate({opacity:'0.4'});
    $(portName).show();
  },
  function(){
    $(portImage).animate({opacity:'1'});
    $(portName).hide();
  });
};


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

  portfolioHover(".col-1",".port-image1",".port-text1");

  // $(".project").hover(function(){
    // $(this).animate({opacity:'1'});
  // },
  // function(){
    // $(this).animate({opacity:'0'});
  // });
  
});

