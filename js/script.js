// fixed navigation

var $body = $(window),
    $nav_val = $('.navbar');
$(document).on('scroll', function () {
    var position = $body.scrollTop();
    if (position > 50) {
        $nav_val.addClass('fixed');
    } else {
        $nav_val.removeClass('fixed');
    }
});

//slow scrolling
$(document).ready(function(){
    $(".navbar-nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
});