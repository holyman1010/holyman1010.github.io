$(document).ready(function(){
	// Cache the Window object
	
	
	$window = $(window);
      


   $('section[data-type="background"]').each(function(){
     var $bgobj = $(this); // assigning the object
                    
      $(window).scroll(function() {
                    
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!								
		var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		
		// Put together our final background position
		var coords = '50% '+ yPos + 'px';

		// Move the background
		$bgobj.css({ backgroundPosition: coords });
		
}); // window scroll Ends

 });	

$( "#pre_engagement, #engagement-container" ).hover(
  function() {
    $( "#engagement-container" ).css( "opacity","1" );
  }, function() {
    $( "#engagement-container" ).css( "opacity",".5" );
  }
);

$( "#pre_DLS, #DLS-container" ).hover(
  function() {
    $( "#DLS-container" ).css( "opacity","1" );
  }, function() {
    $( "#DLS-container" ).css( "opacity",".5" );
  }
);

$( "#pre_ehost, #ehost-container" ).hover(
  function() {
    $( "#ehost-container" ).css( "opacity","1" );
  }, function() {
    $( "#ehost-container" ).css( "opacity",".5" );
  }
);

$( "#pre_ayapp, #ayapp-container" ).hover(
  function() {
    $( "#ayapp-container" ).css( "opacity","1" );
  }, function() {
    $( "#ayapp-container" ).css( "opacity",".5" );
  }
);

$( "#pre_user_research, #user_research-container" ).hover(
  function() {
    $( "#user_research-container" ).css( "opacity","1" );
  }, function() {
    $( "#user_research-container" ).css( "opacity",".5" );
  }
);

$( "#pre_ipeen89, #ipeen89-container" ).hover(
  function() {
    $( "#ipeen89-container" ).css( "opacity","1" );
  }, function() {
    $( "#ipeen89-container" ).css( "opacity",".5" );
  }
);

$( "#pre_tripcard, #tripcard-container" ).hover(
  function() {
    $( "#tripcard-container" ).css( "opacity","1" );
  }, function() {
    $( "#tripcard-container" ).css( "opacity",".5" );
  }
);

$( "#pre_flash_buy, #flash_buy-container" ).hover(
  function() {
    $( "#flash_buy-container" ).css( "opacity","1" );
  }, function() {
    $( "#flash_buy-container" ).css( "opacity",".5" );
  }
);

$( "#pre_hotskys, #hotsky-container" ).hover(
  function() {
    $( "#hotsky-container" ).css( "opacity","1" );
  }, function() {
    $( "#hotsky-container" ).css( "opacity",".5" );
  }
);

$( "#pre_apeepee, #apeepee-container" ).hover(
  function() {
    $( "#apeepee-container" ).css( "opacity","1" );
  }, function() {
    $( "#apeepee-container" ).css( "opacity",".5" );
  }
);

$( "#pre_yiabi, #yiabi-container" ).hover(
  function() {
    $( "#yiabi-container" ).css( "opacity","1" );
  }, function() {
    $( "#yiabi-container" ).css( "opacity",".5" );
  }
);

$( "#pre_gmarket, #android-container" ).hover(
  function() {
    $( "#android-container" ).css( "opacity","1" );
  }, function() {
    $( "#android-container" ).css( "opacity",".5" );
  }
);

}); 
/* 
 * Create HTML5 elements for IE's sake
 */

document.createElement("article");
document.createElement("section");