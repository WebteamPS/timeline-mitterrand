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