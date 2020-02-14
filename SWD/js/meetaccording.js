// JavaScript Document
//author Meet AccordingV1.0  11/21

$(function(){
	var $visual6IMG=$('.visual6IMG'),
		$ul=$visual6IMG.find('ul'),
		$li=$ul.find('li'),
		_titleWidth=70,
		_width=741,
		_imgWidth=_width-_titleWidth*$li.length;
	var _init = true;		//一開始到你要的做動畫
	$li.click(function(){
		return false;
	})
	$li.each(function(e){
		$(this).css('left',e*_titleWidth).data('left',e*_titleWidth);
		}).mouseover(function(e){
			var $this=$(this),
				$prev=$this.prevAll().andSelf(),
				$next=$this.nextAll();
			if(_init){
			$next.each(function(i){
				$(this).css({'left':_titleWidth * $prev.length + _imgWidth + i * _titleWidth});
				});
			}else{
			$next.each(function(i){
				$(this).stop().animate({'left':_titleWidth * $prev.length + _imgWidth + i * _titleWidth},{duration:1000,easing:"easeOutCubic"});
				});
			}
			$prev.each(function(i){
				$(this).stop().animate({'left':i*_titleWidth},{duration:1000,easing:"easeOutCubic"});
				});
			_init = false;
			}).eq(2).mouseover();
	
	});