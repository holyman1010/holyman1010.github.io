// JavaScript Document
$(function(){
	//alert('123');
	var $li=$('.menu2_1Container li'),
		$tar=$li.find('div');
	$tar.animate({'opacity':'0'},0);
	$tar.css({'display':'block'});
	$li.hover(function(){
		var $this=$(this),
			$show=$this.find('div');
		$show.stop().animate({'opacity':'1'},500);
		},function(){
		var $this=$(this),
			$show=$this.find('div');
		$show.stop().animate({'opacity':'0'},500);
		});
	//$tar.animate({opacity:0},0)
	//-----------關閉-----------
	$li.click(function(){
		alert('敬請期待');
		return false;
		})
	})