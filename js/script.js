/**
 * Parallax Scrolling Tutorial
 * For NetTuts+
 *  
 * Author: Mohiuddin Parekh
 *	http://www.mohi.me
 * 	@mohiuddinparekh   
 */


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