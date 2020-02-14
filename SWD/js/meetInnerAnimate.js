// JavaScript Documents
var myOpenAnimate;
function waitinfo(){
	alert('敬請期待');
	}
$(function(){
	//進場動畫
	myOpenAnimate=function (){
		$("#logo").delay(200).animate({"top":"-10px",'opacity':'1'},{duration:1000,easing:"easeOutSine",complete:logohover});
		$("#left_menu").delay(250).animate({opacity:1},{duration:1000,easing:"easeOutSine"});
		$("#right_menu").delay(250).animate({opacity:1},{duration:1000,easing:"easeOutSine"});
		$(".bigtxt").delay(300).animate({'opacity':'1','top':'228px'},{duration:1500,easing:"easeOutSine"});
		$(".backToNews").delay(350).animate({'opacity':'1','top':'230px'},{duration:1500,easing:"easeOutSine",oncomplete:asshole()});
		$(".newsContainer").delay(450).animate({'opacity':'1','top':'228px'},{duration:1000,easing:"easeOutSine"});
		$("#menuContainer").delay(450).animate({'opacity':'1','top':'230px'},{duration:1000,easing:"easeOutSine"});
		}
	$("#logo").animate({opacity:0},0);
	$("#left_menu").animate({opacity:0},0);
	$("#right_menu").animate({opacity:0},0);
	$(".bigtxt").animate({'opacity':'0','top':'400px'},0);
	$(".backToNews").animate({'opacity':'0','top':'400px'},0);
	$('#menuContainer').animate({'opacity':'0','top':'300px'},0);
	$(".newsContainer").animate({'opacity':'0','top':'300px'},0);
	$(".content,.dragger_container,.dragger").animate({'opacity':'0'},0);
	//for fuck ie animateway-----------//
	$(".content,.dragger_container,.dragger").delay(2000).animate({'opacity':'1'},1000);
	//---------------
	//------跟屁蟲---------
	function asshole(){
		var $win = $(this);
		$win.bind('scroll resize', function(){
			var $this = $(this);
			$(".backToNews").stop().animate({
				top: $this.scrollTop()+230,
				opacity:1
			},{duration:800,easing:"easeOutQuint"});
		});
		}
	$(".backToNews").hover(function(){
		$(this).stop().animate({left:900},100);
		},function(){
		$(this).stop().animate({left:898},100);
		})
	//--------跟屁蟲END--------
	//logo點選--------
	function logohover(){
		$("#logo").hover(function(){
			$(this).stop().animate({'top':'-20px'});
		},function(){
			$(this).stop().animate({'top':'-10px'});
		});
	}
	//----------------
	//右邊選單動作--
	$('#right_menu ul li').hover(function(){
		$(this).find("img").animate({"margin-top":"-5px"});
		$(this).stop().animate({"margin-top":"17px"},{duration:500,easing:"easeOutExpo"})
		},function(){
			$(this).find("img").stop().animate({"margin-top":"0px"});
			$(this).stop().animate({"margin-top":"0px"},{duration:1000,easing:"easeOutElastic"})
			});	
	//--------------------
	var $firstAni=$('#left_menu ul li').find('.btn0');
	$firstAni.animate({"margin-top":"-200px","opacity":"0"},{duration:0});
	//左邊選單動作--
	//設定選單背景
	$('#left_menu ul li').eq(1).find('.btn0').css('background-image','url(images/btn1bg.png)');
	$('#left_menu ul li').eq(2).find('.btn0').css('background-image','url(images/btn2bg.png)');
	$('#left_menu ul li').hover(function(){
		var $hidTar=$(this).find('.aaa');
		var $showTar=$(this).find('.btn0');
		$hidTar.stop().animate({"margin-top":"-50px"},{duration:1000,easing:"easeOutExpo"});
		$showTar.stop().animate({"margin-top":"10px","opacity":"1"},{duration:700,easing:"easeOutBack"});
		},function(){
		var $hidTar=$(this).find('.aaa');
		var $showTar=$(this).find('.btn0');
		$hidTar.stop().animate({"margin-top":"0px"},{duration:300,easing:"easeOutExpo"});
		$showTar.stop().animate({"margin-top":"-200px","opacity":"0"},{duration:500,easing:"easeOutExpo"});
		});
	$('.btn0').find('div').hover(function(){
		$(this).addClass('jqClass1');
			},function(){
		$(this).removeClass('jqClass1');
	});
	//--------------------
	});//jquery End