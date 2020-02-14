// JavaScript Document  
// author gameflier-Meet  2011.11.03

	function waitinfo(){
		alert('敬請期待');
	}
	var newsPos;
	var showOrHide;
	$(function(){
		$('.newsContainer').fadeOut(0);	
		//--------flash call news position EventListener-------
		newsPos=function(ll,tt){
			var top_pos=tt,
				left_pos=ll;
			// if(canSee==0){
				// $('.newsContainer').fadeOut(300);
			// }else{
				// $('.newsContainer').fadeIn(1000);
			// }
			$('.newsContainer').stop(false,true).animate({
				top:top_pos,
				left:left_pos
			}, 200, 'easeOutQuad');
		}
		// showOrHide=function(aa){
			// if(aa==1){
				// $('.newsContainer').fadeIn("fast");
			// }else{
				// $('.newsContainer').fadeOut("fast");
			// }
		// }
		showOrHide=function(aa){
			$('.newsContainer').fadeToggle("fast");
		};
		//--------flash call news position EventListener END-------

});