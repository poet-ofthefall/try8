$(function(){

   $('[data-fancybox]').fancybox({
      youtube : {
          controls : 0,
          showinfo : 0
      }
  });

  $('.header__burger').click(function(event) {
      $('.header__burger, .header__navbar').toggleClass('active');
      $('body').toggleClass('lock');
  });

});