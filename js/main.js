(function($) {
    "use strict";
    $(document).on('ready', function() {
      
       
      

    });
    $(window).on("load", function() {
        $('.preloader').fadeOut(500);
        new WOW().init({
            mobile: true,
        });
    });
   
    $(document).ready(function() {  
        $('img').each(function(){  
         var $img = $(this);  
         var filename = $img.attr('src')  
          if (typeof attr == typeof undefined || attr == false) {
              $img.attr('alt','Veridoc Global Certificates');
              $img.attr('title','Veridoc Global Certificates');
             
          }  
        });  
       }); 
       $(".toggle-password").click(function() {
         
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        
        if (input.attr("type") == "password") {
        input.attr("type", "text");
        } else {
        input.attr("type", "password");
        }
        
        }); 

        var pageURL = $(location).attr("href"); 
    $('link[rel="canonical"]').attr('href', pageURL);



    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    // dropdown for mobile
    $(document).ready(function () {
        checkWidth(true);
        $(window).resize(function () {
            checkWidth(false);
        });
    });

    function checkWidth(init) {
        // If browser resized, check width again 
        if ($(window).width() <= 991) {
            $('.dropdown-submenu a').on("click", function (e) {
                $(this).next('ul').toggle();
                e.stopPropagation();
            });
        }
    }
    function navMenu() {

        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').click(function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').click(function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();


})(jQuery);


