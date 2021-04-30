$(function(){

  $('.wrapper').fadeIn(500);
  // $('.main_title').addClass('active');
  // $('.main_description').addClass('active');
  // $('.main_arrow').addClass('active');



  $('.open-contact').on('click', function(event){
  // event.preventDefault();
  $('.main').addClass('move-out');
  $('.main-nav').addClass('is-visible');
});
//close menu
$('.cd-close-menu').on('click', function(event){
  event.preventDefault();
  $('.main').removeClass('move-out');
  $('.main-nav').removeClass('is-visible');
});


});
