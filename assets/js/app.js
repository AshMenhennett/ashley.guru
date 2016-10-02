/**
* @author: Ashley Menhennett <ashleymenhennett@gmail.com>
* @license: MIT
*/

$(document).ready(function () {

	$("#toggle-navigation").on('click', function(){
		$("#main-navigation-list-container").slideToggle();
	});

	smoothScroll.init({
        speed: 1600,
        easing: 'easeInOutQuad',
    });

    /* Adapted from: http://webdesignerwall.com/tutorials/animated-scroll-to-top/comment-page-3 */
    // hide #back-top first
    // $("#back-top").hide();
    
    // fade in #back-top
    /*$(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#back-top a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });*/

});