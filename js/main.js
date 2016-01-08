//go to the first section
$("#btn-first-item").click(function() {
    $('html, body').animate({
        scrollTop: $("#first-item").offset().top
    }, 1000);
});

//animation bouton
 $(".btn-more").hover(function() {
    $(this).toggleClass("animated tada");
 });

//bouton to top
$(document).ready( function () {
  // Add return on top button
  $('body').append('<div id="go_top" title="Retour en haut"><i class="glyphicon glyphicon-chevron-up"></i></div>');
  
  // On button click, let's scroll up to top
  $('#go_top').click( function() {
      $('html,body').animate({scrollTop: 0}, 'slow');
  });
});

$(window).scroll(function() {
    // If on top fade the bouton out, else fade it in
    if ( $(window).scrollTop() == 0 )
        $('#go_top').fadeOut();
    else
        $('#go_top').fadeIn();
});