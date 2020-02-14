//accordion
jQuery(function($){
    $.fn.jqAppMenu = function(o){
	    var defaults = {};		
		o = $.extend(defaults, o);
		return this.each(function(){
		    var oContainer = $(this);
			var oPanel = $("div.section",oContainer);
			var oPanel_length = oPanel.length;
			var oContainer_height = oContainer.height();
			var oPanel_height = oPanel.height();
			var oMin_height = 54;
			oPanel.each(function(i){
			    $(this).css({"z-index" : i, "top" : i == 0 ? 0 : (i-1) * oMin_height + oPanel_height-113 })
				.mouseover(
				    function(){
						oPanel.each(function(j){
						    if(j <= i){
							    $(this).stop().animate({ top : j * oMin_height },{duration : "slow", easing : "easeOutQuart"});
							}else{
							    $(this).stop().animate({ top : ( j - 1 ) * oMin_height + oPanel_height-113 },{duration : "slow", easing : "easeOutQuart"});
							}
						});
					});
			});
		});
	};
	
	$(".accordion").jqAppMenu();
});


