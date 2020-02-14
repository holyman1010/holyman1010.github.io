// JavaScript Document
// Author meet 11/23...

$(function(){
	var $menu1_4con=$('.menu1_4container'),
	    $li=$menu1_4con.find('li');
	var autoTimer;
	var _html='';
	$li.each(function(){
		var $this=$(this);
		var biglink=$(this).find('img').attr('src').replace(/(\.[^\.]+)$/,'big$1');
		_html+='<a href="#"><img src="'+biglink+'"/></a>';
		});
	var $mylink=$menu1_4con.append(_html).children('a').css({
			position:'absolute',
			opacity:0
		}).eq(0).animate({
			opacity:1,
			zIndex:10
		}).end();
	$li.click(function(){
		var $this=$(this),
			nowBtn=$this.index();
			$this.find('img').addClass('on');
			$this.siblings().find('img').removeClass('on');			
			$mylink.eq(nowBtn).stop().animate({
				opacity:1,
				zIndex:10
				}).siblings('a').stop().animate({
				opacity:0,
				zIndex:0
			})
			return false;
		}).hover(function(){
			clearTimeout(autoTimer);
			},function(){
			autoTimer=setTimeout(autoShow,3000);
			});//.eq(0).find('img').addClass('on');
	$mylink.click(function(){
		return false;
		});
	function autoShow(){
		var nowIcon=$('.menu1_4container ul li img.on').parent().index();
		nowIcon=(nowIcon+1)%($mylink.length);
		$li.eq(nowIcon).click();
		autoTimer=setTimeout(autoShow,3000);
		}
	autoShow();
	});