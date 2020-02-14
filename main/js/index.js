//Hero menu scrollrable
$(window).load(function() {
	$("#mask").animate({
		opacity: 'toggle'
	}, {
		queue: true,
		duration: 800
	});
	$(document).ready(function() {

		/*	$("#jquery_jplayer_1").jPlayer({
		
	swfPath: "/js/Jplayer.swf",
    supplied: "mp3",
    volume: 1,
    wmode:"window",
    solution: "html,flash",
		ready: function () {
			$(this).jPlayer("setMedia", {
		
				mp3:"http://sound26.mp3pk.com/indian/ladiesvsricky/ladiesvsrickybahl01(www.songs.pk).mp3",

			}).jPlayer("play");
		},
		ended: function (event) {
			$(this).jPlayer("play");
		},

	});*/


		$("#jquery_jplayer_1").jPlayer({
			ready: function() {
				$(this).jPlayer("setMedia", {
					mp3: "media/index_login/32.Season 3 Login.mp3",
					oga: "media/index_login/32.Season 3 Login.ogg"
				}).jPlayer("play");
			},
			ended: function(event) {
				$(this).jPlayer("play");
			},
			swfPath: "/js/jplayer.swf",
			supplied: "mp3,oga",
			solution: "html,flash",
			wmode: "window"
		});


		$('#games').coinslider({
			width: 280, // width of slider panel
			height: 158, // height of slider panel
			spw: 7, // squares per width
			sph: 5, // squares per height
			delay: 3000, // delay between images in ms
			sDelay: 30, // delay beetwen squares in ms
			opacity: 0.7, // opacity of title and navigation
			titleSpeed: 500, // speed of title appereance in ms
			effect: '', // random, swirl, rain, straight
			navigation: true, // prev next and buttons
			links: true, // show images as links
			hoverPause: true // pause on hover
		});
		$(function() {
			$('#slides').slidesjs({
				width: 280,
				height: 158,
				play: {
					active: true,
					auto: true,
					interval: 4000,
					swap: true
				}
			});
		});

		var wrapper = $('#wrapper'),
			content = $('#scroll-content'),
			width = 0,
			wrapper_width = wrapper.outerWidth(),
			w_half = wrapper_width / 2;
		var last_pos = 0,
			last_delta = 0;
		var w_left = wrapper.position().left;
		//FIXME wait for images load, to get  width or calculate width other way!
		var $thumbseach = $('#scroll-content').find('.item');

		//calculate inner width;
		$('#scroll-content .item').each(function() {
			width += $(this).width();
		});
		content.css('width', width + 48);
		//
		$thumbseach.toggle();
		$thumbseach.each(function(index) {
			$(this).delay(100 * index)

			//	.animate({opacity: 'toggle'}, {queue:true,duration:200})

			.show("slide", {
				direction: "left"
			}, {
				queue: true,
				duration: 30
			})
				.animate({
					"left": "50px"
				}, {
					queue: false,
					duration: 160,
					easing: "easeInQuad"
				})
				.animate({
					"left": "0px"
				}, {
					queue: true,
					duration: 160,
					easing: "easeOutQuad"
				})

		});


		content_width = content.outerWidth();
		wrapper.bind('mouseenter mousemove drag', mousemove);

		function mousemove(e) {
			var mouse_pos = e.pageX * 1.25 - w_left - 390;
			var content_pos = mouse_pos / wrapper_width * content_width - w_half;
			//console.log(e);
			wrapper.stop();
			wrapper.animate({
				scrollLeft: content_pos
			}, {
				queue: true,
				duration: 1000,
				easing: "easeOutCirc"
			});

			var m_delta = Math.abs(last_pos - mouse_pos);
			var delta = m_delta > 1 ? Math.log(m_delta) * 300 : last_delta;
			delta = m_delta == 1 ? 200 : delta;
			last_pos = mouse_pos;
			last_delta = delta;
		}
	});
});
//圖片遮罩
$(function() {
	// 預設的透明度值
	var _opacity = 0.6;
	var $scrollitem = $('div#wrapper ul#scroll-content li.item a');
	// 在 .mask-div 中加入一個遮罩用的 .cover-mask, 並設定其透明度為預設的透明度值
	// 接著加入 .hover() 事件
	$scrollitem.append('<div id="cover-mask"></div>').find('#cover-mask').css({
		opacity: _opacity
	}).hover(function() {
			// 當滑鼠移入時設為完全透明
			$(this).stop(false, true).fadeTo(200, 0);
		},
		function() {
			// 當滑鼠移出時設為透明度 0.6
			$(this).stop(false, true).fadeTo(200, _opacity);
		});
});
//////
$(function() {
	var $sidelogo = $('div#wrapper div#side h1.intrologo');
	var $sidetxt = $('div#wrapper div#side p.introtxt');
	$sidelogo.stop(true, false).animate({
		marginTop: "48px"
	}, {
		duration: 600,
		easing: 'easeInOutExpo'
	});
	$sidetxt.stop(true, false).animate({
		marginTop: "10px"
	}, {
		duration: 600,
		easing: 'easeInOutExpo'
	});
	$('#gameNav').stop(false, true).animate({
		width: "175px"
	}, {
		duration: 600,
		easing: 'easeInExpo'
	});
});


/////
$(function() {
	var $jp_player = $("#jquery_jplayer_1");
	var $jp_play = $('#footer li.jp-pause');
	var $scrollitem = $('div#wrapper ul#scroll-content li.item a');
	var $iframe = $('#link').find('.intrologo');

	$scrollitem.click(function() {
		$("html, body").animate({
			scrollTop: $('#flash_contend').offset().top
		}, {
			duration: 1300,
			easing: 'easeInOutExpo'
		});
		$("#topcontrol").css("display", "block");
	})
	$('#topcontrol').click(function() {
		$("html, body").animate({
			scrollTop: $('#wrapper').offset().top
		}, {
			duration: 1300,
			easing: 'easeInOutExpo'
		});
		$("#topcontrol").animate({
			opacity: 'toggle'
		}, {
			queue: true,
			duration: 500
		});

		$("#jquery_jplayer_1").jPlayer("setMedia", {
			mp3: "media/index_login/32.Season 3 Login.mp3",
			oga: "media/index_login/32.Season 3 Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});


});
/////


//logo動畫	
$(function() {
	$('div#wrapper ul#scroll-content li.item').hover(function() {
			$(this).find(".logo").stop(true, false).animate({
				marginTop: "430px"
			}, 500);
		},
		function() {
			$(this).find(".logo").stop(true, false).animate({
				marginTop: "460px"
			}, 500);
		});
});


//gameNav satrt//
$(function() {
	$('#gameNav').hover(function() {
			$(this).stop(true, false).animate({
				width: "175px"
			}, 200);
			$('#side').stop(true, false).animate({
				left: "125px"
			}, 200);
		},
		function() {
			$(this).stop(true, false).animate({
				width: "48px"
			}, 200);
			$('#side').stop(true, false).animate({
				left: "0px"
			}, 200);
		});
});
//gameNav end//
//footer start//
$(function() {
	$('#footer').hover(function() {
			$(this).stop(true, false).animate({
				width: "130px"
			}, 200);
			$('#scroll-content').stop(true, false).animate({
				paddingRight: "82px"
			}, 200);
			$('#topcontrol').stop(true, false).animate({
				paddingRight: "82px"
			}, 200);
		},
		function() {
			$(this).stop(true, false).animate({
				width: "48px"
			}, 200);
			$('#scroll-content').stop(true, false).animate({
				paddingRight: "0px"
			}, 200);
			$('#topcontrol').stop(true, false).animate({
				paddingRight: "0px"
			}, 200);
		});
});
//footer end//
//music player//
$(function() {
	var $jp_player = $("#jquery_jplayer_1");
	var $jp_play = $('#footer li.jp-pause');


	$jp_play.click(function() {
		if ($(this).hasClass("jp-pause")) {
			$jp_player.jPlayer("pause");
			$(this).removeClass('jp-pause').addClass('jp-play');

		} else if ($(this).hasClass("jp-play")) {
			$jp_player.jPlayer("play");
			$(this).removeClass('jp-play').addClass('jp-pause');

		}
	});

	/*$jp_play.toggle(
function() {
$jp_player.jPlayer("pause");
    $(this).removeClass('jp-pause').addClass('jp-play');
}, 
function() {
  $jp_player.jPlayer("play");
    $(this).removeClass('jp-play').addClass('jp-pause');
				});
								*/

	//Hero music//
	$("#Annie").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Annie/33.2013 Chinese New Year Login.mp3",
			oga: "media/Annie/33.2013 Chinese New Year Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
$("#Aatrox").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Aatrox/Aatrox_Login_Music.mp3",
			oga: "media/Aatrox/Aatrox_Login_Music.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});

	$("#Cho_Gath").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Cho_Gath/15.Cho'Gath Login.mp3",
			oga: "media/Cho_Gath/15.Cho'Gath Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});

	$("#Darius").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Darius/10.Darius Login.mp3",
			oga: "media/Darius/10.Darius Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Diana").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Diana/16.Diana Login.mp3",
			oga: "media/Diana/16.Diana Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Draven").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Draven/11.Draven Login.mp3",
			oga: "media/Draven/11.Draven Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Elise").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Elise/22.Elise Login_voiceover.mp3",
			oga: "media/Elise/22.Elise Login_voiceover.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Ezreal").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Ezreal/12.Ezreal Login.mp3",
			oga: "media/Ezreal/12.Ezreal Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Fiddlesticks").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Fiddlesticks/Fiddlesticks.mp3",
			oga: "media/Fiddlesticks/Fiddlesticks.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Galio").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Galio/08.Galio login.mp3",
			oga: "media/Galio/08.Galio login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Hecarim").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Hecarim/07.Hecarim Login.mp3",
			oga: "media/Hecarim/07.Hecarim Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Janna").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Janna/Janna.mp3",
			oga: "media/Janna/Janna.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Jayce").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Jayce/13.Jayce Login.mp3",
			oga: "media/Jayce/13.Jayce Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Kayle").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Kayle/30.Kayle Login.mp3",
			oga: "media/Kayle/30.Kayle Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Kha_Zix").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Kha_Zix/19.Kha'Zix Login.mp3",
			oga: "media/Kha_Zix/19.Kha'Zix Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Lucian").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Lucian/Lucian.mp3",
			oga: "media/Lucian/Lucian.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Lissandra").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Lissandra/Lissandra.mp3",
			oga: "media/Lissandra/Lissandra.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Lulu").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Lulu/06.Lulu Login.mp3",
			oga: "media/Lulu/06.Lulu Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Nami").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Nami/26.Nami Login.mp3",
			oga: "media/Nami/26.Nami Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Nocturne").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Nocturne/25.Nocturne Login.mp3",
			oga: "media/Nocturne/25.Nocturne Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Quinn_And_Valor").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Quinn_And_Valor/31.Quinn And Valor Login.mp3",
			oga: "media/Quinn_And_Valor/31.Quinn And Valor Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Thresh").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Thresh/29.Thresh Login.mp3",
			oga: "media/Thresh/29.Thresh Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Udyr").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Udyr/Udyr.mp3",
			oga: "media/Udyr/Udyr.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Varus").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Varus/09.Varus Login.mp3",
			oga: "media/Varus/09.Varus Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Vi").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Vi/28.Vi Login.mp3",
			oga: "media/Vi/28.Vi Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Zac").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Zac/Zac Login.mp3",
			oga: "media/Zac/Zac_Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Zed").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Zed/24.Zed Login.mp3",
			oga: "media/Zed/24.Zed Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
	$("#Zyra").click(function() {
		$jp_player.jPlayer("setMedia", {
			mp3: "media/Zyra/14.Zyra Login.mp3",
			oga: "media/Zyra/14.Zyra Login.ogg"
		}).jPlayer("play");
		$jp_play.removeClass('jp-play').addClass('jp-pause');
	});
});
//music player end//