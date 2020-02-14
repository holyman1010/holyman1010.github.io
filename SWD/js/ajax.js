
jQuery(document).ready(function($) {
        function load(num) {
            $('#menucontent').load(num +".html");
        }

        $.history.init(function(url) {
                load(url == "" ? "visual1" : url);
            });

        $('#left_menu a').live('click', function(e) {
                var url = $(this).attr('href');
                url = url.replace(/^.*#/, '');
				ieShit(url);
                $.history.load(url);
                return false;
            });
		function ieShit(a){
			if(swfobject){
				var myobj = swfobject.getObjectById("menu1flashvideo");
				var myobj2= swfobject.getObjectById("menu2flashvideo");
				var dowloadmovie=swfobject.getObjectById('wxcvideo');
				if(myobj){
					myobj.ieCloseSound();
				};
				if(myobj2){
					myobj2.ieCloseSound();
				};
				if(dowloadmovie){
					dowloadmovie.ieCloseSound();
				};
				}}
    });
