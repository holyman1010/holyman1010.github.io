// JavaScript Document
// Author meet 11/23...

$(function(){
	var $menu1_3con=$('.menu1_3container'),
	    $li=$menu1_3con.find('li');
	var autoTimer;
	var _html='';
	$li.each(function(){
		var $this=$(this);
		var biglink=$(this).find('img').attr('src').replace(/(\.[^\.]+)$/,'big.jpg');
		_html+='<a href="#"><img src="'+biglink+'"/></a>'
		});
	var $mylink=$menu1_3con.append(_html).children('a').css({
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
			})//.eq(0).find('img').addClass('on');
	$mylink.click(function(){
		return false;
		});
	function autoShow(){
		var nowIcon=$('.menu1_3container ul li img.on').parent().index();
		nowIcon=(nowIcon+1)%($mylink.length);
		$li.eq(nowIcon).click();
		autoTimer=setTimeout(autoShow,3000);
		}
	autoShow();
	});


$(function(){
	var $menu1_3con=$('.menu1_10container'),
	    $li=$menu1_3con.find('li');
	var autoTimer;
	var _html='';
	$li.each(function(){
		var $this=$(this);
		var biglink=$(this).find('img').attr('src').replace(/(\.[^\.]+)$/,'big.jpg');
		_html+='<a href="#"><img src="'+biglink+'"/></a>'
		});
	var $mylink=$menu1_3con.append(_html).children('a').css({
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
			})//.eq(0).find('img').addClass('on');
	$mylink.click(function(){
		return false;
		});
	function autoShow(){
		var nowIcon=$('.menu1_10container ul li img.on').parent().index();
		nowIcon=(nowIcon+1)%($mylink.length);
		$li.eq(nowIcon).click();
		autoTimer=setTimeout(autoShow,3000);
		}
	autoShow();
	});
	
	
	$(function(){
	var $menu1_3con=$('.menu1_11container'),
	    $li=$menu1_3con.find('li');
	var autoTimer;
	var _html='';
	$li.each(function(){
		var $this=$(this);
		var biglink=$(this).find('img').attr('src').replace(/(\.[^\.]+)$/,'big.jpg');
		_html+='<a href="#"><img src="'+biglink+'"/></a>'
		});
	var $mylink=$menu1_3con.append(_html).children('a').css({
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
			})//.eq(0).find('img').addClass('on');
	$mylink.click(function(){
		return false;
		});
	function autoShow(){
		var nowIcon=$('.menu1_11container ul li img.on').parent().index();
		nowIcon=(nowIcon+1)%($mylink.length);
		$li.eq(nowIcon).click();
		autoTimer=setTimeout(autoShow,3000);
		}
	autoShow();
	});
	
	
	
		
	$(function(){
	var $menu1_3con=$('.menu1_13container'),
	    $li=$menu1_3con.find('li');
	var autoTimer;
	var _html='';
	$li.each(function(){
		var $this=$(this);
		var biglink=$(this).find('img').attr('src').replace(/(\.[^\.]+)$/,'big.jpg');
		_html+='<a href="#"><img src="'+biglink+'"/></a>'
		});
	var $mylink=$menu1_3con.append(_html).children('a').css({
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
			})//.eq(0).find('img').addClass('on');
	$mylink.click(function(){
		return false;
		});
	function autoShow(){
		var nowIcon=$('.menu1_13container ul li img.on').parent().index();
		nowIcon=(nowIcon+1)%($mylink.length);
		$li.eq(nowIcon).click();
		autoTimer=setTimeout(autoShow,3000);
		}
	autoShow();
	});