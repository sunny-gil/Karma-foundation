$(document).ready(function() {
 
   

    $('.owl-carousel').owlCarousel({
    loop:true,
    stagePadding: 50,
    margin:10,
    nav: false,
    dots:false,
    autoplay: true ,
    autoplayTimeout: 3000,
    // responsiveClass: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
    });

   
  });
  