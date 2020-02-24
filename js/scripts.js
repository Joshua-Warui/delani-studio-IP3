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
  portfolioHover(".col-2",".port-image2",".port-text2");
  portfolioHover(".col-3",".port-image3",".port-text3");
  portfolioHover(".col-4",".port-image4",".port-text4");
  portfolioHover(".col-5",".port-image5",".port-text5");
  portfolioHover(".col-6",".port-image6",".port-text6");
  portfolioHover(".col-7",".port-image7",".port-text7");
  portfolioHover(".col-8",".port-image8",".port-text8");
  
});

