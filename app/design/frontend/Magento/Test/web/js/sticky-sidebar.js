require (['jquery', 'mage/url'], function ($, url) {
$(window).scroll(function(){
    if ($(this).scrollTop() > 250) {
    $('body').addClass('fixed');
    } else {
   $('body').removeClass('fixed');
    }
    });
});