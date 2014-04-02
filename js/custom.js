$(document).foundation();

jQuery(document).ready(function ($) {

    var navItems = $('.nav-bar').find('li');

    $(".row").waypoint(function (event, direction) {   
        slide = $(this).data('slide');
        if (event === 'down') {
          var currentLink = $('.nav-bar li[data-slide="' + slide + '"]');
          currentLink.addClass('active');
          currentLink.prev().removeClass('active');
        }
        else {
            $('.nav-bar li[data-slide="' + slide + '"]').addClass('active').next().removeClass('active');
        }

    }, {offset:50});
 
    

    function scrollTo(dataslide) {
        $("body").animate({
            scrollTop: $('.row[data-slide="' + dataslide + '"]').offset().top - 50
        }, 1000, 'swing');
    }
    
    navItems.click(function (event) {
        event.preventDefault();
        slide = $(this).data('slide');
        scrollTo(slide);
    });
});