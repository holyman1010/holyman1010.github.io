// JavaScript Document
//Author Meet slide V1.0 11/21
$(function(){
	//alert('fuck');
	$('.txtbg').css('opacity',.7);
	var _index=1,
		$largeImg=$('#largeImg'),
		$txtinfo=$('.txtinfo'),
		$RA=$('#rightArrow'),
		$LA=$('#leftArrow'),
		$Scontainer=$('.simageContasiner'),
		$sImg=$('.simageContasiner a'),
		$maxLen=Math.ceil($sImg.length/4);
	//------reset--------	
		$LA.hide();
		$sImg.css('opacity',.4);
		if($sImg.length<=4){
			$RA.hide();
			}
	//------reset--------
	//--------arrow clickHandler------------	
	$RA.click(function(){
		$LA.show();
		if(_index<$maxLen){
			_index+=1;
			var leftdis=-(800*(_index-1));
			//alert(_index+'++'+$maxLen);
			$Scontainer.animate({'margin-left':leftdis},{oncomplete:callHide()});
			}
		function callHide(){
			if(_index==$maxLen){
				$RA.hide();
				}
			}
		})
	$LA.click(function(){
		$RA.show();
		if(_index>1){
			_index-=1;
			var leftdis=-(800*(_index-1));
			$Scontainer.animate({'margin-left':leftdis},{oncomplete:callHide()});
			}
		function callHide(){
			if(_index==1){
				$LA.hide();
				}
			}
		});
	//--------arrow clickHandler------------
	$sImg.hover(function(){
		//--mouseIn
		var $this=$(this);
		$this.css('opacity',1);
		},function(){
		//--mouseOut
		var $this=$(this);
		if(!$(this).hasClass('wtf')){
			$this.css('opacity',.4);
		}
		}).click(function(){
		//--mouseClick
		var $this=$(this),
			_path=$this.attr('href'),
			_txt=$this.attr('mytxt');
			
			$this.addClass('wtf').css('opacity',1).siblings().removeClass('wtf').css('opacity',.4);
			$largeImg.attr({
				src:_path
			})
			$txtinfo.html(_txt);
		return false;
		}).eq(0).click();
});
