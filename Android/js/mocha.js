	/*
 * --------------------------------------------------------------------
 * Simple Scroller
 * by Siddharth S, www.ssiddharth.com, hello@ssiddharth.com
 * Version: 1.0, 05.10.2009 	
 * --------------------------------------------------------------------
 */

j(document).ready(function() 
{	 
	var index = 0;
	var gallery = j("#gallery");
	var images = j("#gallery img");
	var thumbs = j("#thumbs img");
	var imgHeight = j(thumbs).attr("height");
	j(thumbs).slice(0,4).clone().appendTo("#thumbs");
	for (i=0; i<thumbs.length; i++)
	{
		j(thumbs[i]).addClass("thumb-"+i);
		j(images[i]).addClass("image-"+i);
	}
	
	j("#next").click(sift);
	show(index);
	setInterval(sift, 3000);
	
	function sift()
	{
		if (index<(thumbs.length-1)){index+=1 ; }
		else {index=0}
		show (index);
	}
	
	function show(num)
	{
		j(images).fadeOut(400);
		j(".image-"+num).stop().fadeIn(400);
		var scrollPos = (num+1)*imgHeight;
		j("#thumbs").stop().animate({scrollTop: scrollPos}, 400);		
		console.log(scrollPos, "img.image-"+num);
	}
	
	
});
	j(function(){
		j("#app_container").hover(function(){
		j("#next").animate({"opacity": 1},{duration:200});
			},
			 function(){			
	     			j("#next").animate({"opacity": 0},{duration:200});
		});		
});
