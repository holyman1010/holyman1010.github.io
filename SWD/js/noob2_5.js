// JavaScript Document
//Author Meet wtf pm v1.0
$(function(){
	var $movebg=$('.menu2_5btnBG'),
		$btn=$('.menu2_5btnAll ul li'),
		nowTarget=0,
		$_movetxt=$('.menu2_5Img ul'),
		$_moveli=$('.menu2_5Img ul li'),
		_moveWidth=$_moveli.width();
		
	$btn.eq(1).css({left:160});
	$btn.click(function(){
		var $this=$(this);
		nowTarget=$this.index();
		$_movetxt.stop().animate({'margin-left':-(nowTarget*_moveWidth),opacity:1},700);
		$_moveli.eq(nowTarget).stop().animate({opacity:1},1000);
		$_moveli.eq(nowTarget).siblings().stop().animate({opacity:0},700);
		}).hover(function(){
		var $this=$(this);
		var _x=$this.position().left+340;
		$movebg.stop().animate({left:_x},{duration:500,easing:"easeOutBack"});
		},function(){
		var $this=$(this);
		if($this.index()!=nowTarget){
			$movebg.stop().animate({left:$btn.eq(nowTarget).position().left+340},{duration:350,easing:"easeOutBack"});
			}
		});
	})