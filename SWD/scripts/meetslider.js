$(function(){
	$("#hmenu li a").hover(function(){
		var _this = $(this),
			_height = _this.height() * -1;
		_this.stop().animate({
			backgroundPosition: "(0px " + _height + "px)"
		}, 200);
	}, function(){
		$(this).stop().animate({
			backgroundPosition: "(0px 0px)"
		}, 200);
	});
});
$(function(){
	$("#hmenu2 li a").hover(function(){
		var _this = $(this),
			_height = _this.height() * -1;
		_this.stop().animate({
			backgroundPosition: "(0px " + _height + "px)"
		}, 200);
	}, function(){
		$(this).stop().animate({
			backgroundPosition: "(0px 0px)"
		}, 200);
	});
});