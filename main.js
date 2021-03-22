
$(document).ready(function(){
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    nav:false,
    dots:false,
    lazyLoad:true,
    autoplayTimeout:3000,
    center:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


});