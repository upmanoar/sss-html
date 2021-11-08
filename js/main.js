(function ($) {
	"use strict";

    jQuery(document).ready(function($){
       
        
        $(".home-slide").owlCarousel({
        	autoplay:true,
        	margin:10,
        	loop:true,
        	nav:true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'</i>", "<i class='fa fa-angle-right'</i>"],
          	responsiveClass: true,
            responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 1,
			  },
			  768: {
				items: 2,
			  },
			  1000: {
				items: 1,
			  }
			}
        });
        
    	
        $(".video-gallery").owlCarousel({
        	autoplay:true,
        	margin:10,
        	loop:true,
        	nav:true,
            dots: true,
          	responsiveClass: true,
            responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 1,
			  },
			  768: {
				items: 2,
			  },
			  1000: {
				items: 3,
			  }
			}
        });
        
    	
   
       

        $(window).scroll(function(){
		        if ($(this).scrollTop() > 100) {
		            $('.scrollToTop').fadeIn();
		        } else {
		            $('.scrollToTop').fadeOut();
		        }
		    });

		    //Click event to scroll to top
		    $('.scrollToTop').on('click', function(){
		        $('html, body').animate({scrollTop : 0},800);
		        return false;
		    });



    });


    jQuery(window).load(function(){
        jQuery(".page-loader").fadeOut(1000);
    });


}(jQuery));	