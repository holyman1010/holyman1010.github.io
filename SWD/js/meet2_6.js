// JavaScript Document
// Author meet  11/25
$( function(){
	var $container=$('.menu2_6cubeWrapp'),
		$div=$container.find('div'),
		$li=$('.menu2_6cubeWrapp ul li');
	//$li.hide(0);
	$div.hover(function(){
		var $this=$(this);
		//alert($this.index());
		$li.eq($this.index()).stop(true,true).fadeIn("slow");
		$li.eq($this.index()).siblings().stop(true,true).hide("slow");
		//$li.(':not(:last-child)').show();
		},function(){
			$li.stop(true,true).hide("slow");
			})
	})