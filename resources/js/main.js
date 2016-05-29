$(document).ready(function(){
    
     if (matchMedia) {
		var mql = window.matchMedia("(min-width: 765px)");
		mql.addListener(WidthChange);
		WidthChange(mql);
	}

	// media query change
	function WidthChange(mql) {

		if (mql.matches) {

			 $('.js--section-about').waypoint(function(direction){
		      if (direction == "down") {
		        $('nav').addClass('sticky');
                
		      }
		      else{
		        $('nav').removeClass('sticky');
		      }

		    }, {
		      offset:0

		    });
			// window width is at least 500px
		}
    
    }
    
    
    
   
    $('.bxslider').bxSlider();
  
    
   
    
    
    
    /*Google Map Zoom In Disable*/
    $('.map-container').click(function () {
    $('.map-container #googleMap').css("pointer-events", "auto");
    });

    $( ".map-container" ).mouseleave(function() {
    $('.map-container #googleMap').css("pointer-events", "none"); 
    });
    
    
    
    $('.js--nav-icon').click(function(){

		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');


		nav.slideToggle(200);

		if (icon.hasClass('ion-navicon-round')){	

			icon.removeClass('ion-navicon-round');
			icon.addClass('ion-close-round');	
			
		}
		else {
			icon.removeClass('ion-close-round');
			icon.addClass('ion-navicon-round');
			
		}

	});
    
    
    
    
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
          if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html,body').animate({
                scrollTop: target.offset().top -1
              }, 1000);
              return false;
            }
          }
        });
      });
    
    $('.js--scroll-down').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $('.js--section-about').offset().top -1},1000);
	});
    
    
    $('.js--wp-1').waypoint(function(direction){
    	$('.js--wp-1').addClass('animated fadeInLeftBig')
    }, {
      offset:'90%'

    });
    
    $('.js--wp-2').waypoint(function(direction){
    	$('.js--wp-2').addClass('animated swing')
    }, {
      offset:'90%'

    });
    
    
    $('.js--wp-3').waypoint(function(direction){
    	$('.js--wp-3').addClass('animated fadeInLeftBig')
    }, {
      offset:'90%'

    });
    
     $('.js--wp-4').waypoint(function(direction){
    	$('.js--wp-4').addClass('animated fadeInRightBig')
    }, {
      offset:'90%'

    });
    
    
});