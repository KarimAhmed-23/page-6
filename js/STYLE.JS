 $(window).on("load", function(){



 $('.preloader').fadeOut(1000, function(){
     
     $(this).parent().fadeOut();
     
     
 });

    
});



$(document).ready(function () {



         
    $(".language").click(function(){
    $(".dropdown-language").slideToggle();
}) ;
   

  $('.main-slider').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  rtl:true,
 adaptiveHeight: true,

  prevArrow:'<span class="prev-arrow"><i class="fas fa-chevron-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-chevron-left"></i></span>',

  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:481,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
 
  ]
});
  $('.deals-slider').slick({
  dots: false,
  infinite: false,
  accessibility: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  rtl:true,
 adaptiveHeight: true,

  prevArrow:'<span class="prev-arrow"><i class="fas fa-chevron-right"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fas fa-chevron-left"></i></span>',

  responsive: [
   
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint:481,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
 
  ]
});
     
     
     
 $(".product-img").matchHeight();
 $(".product-details ").matchHeight();
 $(".product-item").matchHeight();
 $(".footer-menu h5").matchHeight();
 $(".footer-menu-ul").matchHeight();


    $(".flip").click(function(){
        
        $(this).addClass("active");
});



});

/*
let heartFlip = document.querySelectorAll(".flip");
 heartFlip.forEach(heart => heart.addEventListener('click', function(){
    
this.classList.add("active");  
    
if(this.classList.contains("active")){
    this.removeEventListener("click")
   }    
    */
