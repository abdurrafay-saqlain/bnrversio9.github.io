// Initialize Wow
$( document ).ready(function() {
  new WOW().init()
});
//Read slider
$(document).ready(function(){

  $('.demo').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 2000,
});
  // $('.read__slider').slick(
  // //   {
  // //   infinite: true,
  // //   slidesToShow: 3,
  // //   slidesToScroll: 3,
  // // }
  // );
});