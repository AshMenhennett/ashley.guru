/**
* @author: Ashley Menhennett
* @author URI: http://ashley.guru
* @project: ashley.guru
* @version: 0.1
* @license: MIT
* @license URI: https://s3-ap-southeast-2.amazonaws.com/ashleymenhennett/LICENSE
* @updated: 07/09/2016
*/

$(document).ready(function(){

	$("#toggle-navigation").on('click', function(){
		$("#main-navigation-list-container").slideToggle();
	});

	/* Smooth scroll adapted from: https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1500);
                    return false;
                }
            }
        });
    });

    /* Adapted from: http://webdesignerwall.com/tutorials/animated-scroll-to-top/comment-page-3 */
    // hide #back-top first
    $("#back-top").hide();
    
    // fade in #back-top
    $(function () {
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
    });

});