// JavaScript Document
//author meet iconImgChange V1.0 11/22

$(function(){
	var $icon=$('.v2simg ul li img'),
		_nowBtn=0,
		$bigImg=$('.v2bimg ul');
	var autoTimer;
	$icon.eq(-1).addClass('on');
	$icon.click(function(){
		$(this).addClass('on');
		$(this).parent().siblings().children().removeClass('on');
		//alert($(this).parent().index())抓排序
		_nowBtn=$(this).parent().index();
		$bigImg.stop().animate({'margin-left':-(_nowBtn*423)},{duration:700,easing:"easeOutCubic"});
		$bigImg.find('li').eq(_nowBtn).stop().animate({'opacity':'1'},1000);
		$bigImg.find('li').eq(_nowBtn).siblings().stop().animate({'opacity':'.3'},1000);
		}).hover(function(){
			clearTimeout(autoTimer);
			},function(){
				autoTimer=setTimeout(autoShow,3000);
				var targetNum=$(this).parent().index();
				if(_nowBtn!=targetNum){
					$(this).removeClass('on');
					}
			});/".eq(0).click()*/
	function autoShow(){
		_nowBtn=$('.v2simg ul li img.on').parent().index();//.index();
		_nowBtn=(_nowBtn+1)%($icon.length);
		$icon.eq(_nowBtn).click();
		autoTimer=setTimeout(autoShow,3000);
		}
	autoShow();
	
	})