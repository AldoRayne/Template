// fixed navigation
const $body = $(window),
    $nav_val = $('.navbar');
$(document).on('scroll', function () {
    const position = $body.scrollTop();
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
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top - 70}, 1200);
    });
});

//active menu-btn
$(document).ready(function() {
    $(document).on('scroll', function() {
        const posDoc = $(this).scrollTop();

        $('.main-section').each(function(index, item) {
            const topHeader = $(this).offset().top - 70;
            const botHeader = topHeader + $(this).height();

            if (posDoc > topHeader && posDoc < botHeader) {
                $('.navbar-nav a').removeClass('active');
                $('.navbar-nav a').eq(index).addClass('active');
            }
        });
    });
});