$(document).foundation();

jQuery(document).ready(function ($) {

    var links = $('.navigation').find('li');
    slide = $('.slide');
    button = $('.button');
    mywindow = $(window);
    htmlbody = $('html,body');


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
        htmlbody.animate({
            scrollTop: $('.slide[data-slide="' + dataslide + '"]').offset().top
        }, 2000, 'easeInOutQuint');
    }



    links.click(function (e) {
        e.preventDefault();
        dataslide = $(this).data('slide');
        scrollTo(dataslide);
    });

    button.click(function (e) {
        e.preventDefault();
        dataslide = $(this).attr('data-slide');
        scrollTo(dataslide);

    });


});