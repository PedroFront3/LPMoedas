$(function(){
   $('.bottom-scroll').click(function(){
      var href = $(this).attr('herf');
      var offSetTop = $(href).offset().top();

      $('html,body').animate({'scrollTop':offSetTop});

      return false;
   })
});





