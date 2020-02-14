$(function() {
	var moveLeft = -50;
	var moveDown = 30;


	/*  $('a#trigger').hover(function(e) {
          $('div#pop-up').show();
          //.css('top', e.pageY + moveDown)
          //.css('left', e.pageX + moveLeft)
          //.appendTo('body');
        }, function() {
          $('div#pop-up').hide();
        });*/
	$('ul li.skill_passive').mousemove(function(e) {
		$("div#skill_passive").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft).fadeIn(10);
	});
	$('ul li.skill_passive').mouseout(function(e) {
		$("div#skill_passive").toggle();
	});
	$('ul li.skill_q').mousemove(function(e) {
		$("div#skill_q").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft).fadeIn(10);
	});
	$('ul li.skill_q').mouseout(function(e) {
		$("div#skill_q").toggle();
	});
	$('ul li.skill_w').mousemove(function(e) {
		$("div#skill_w").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft).fadeIn(10);
	});
	$('ul li.skill_w').mouseout(function(e) {
		$("div#skill_w").toggle();
	});
	$('ul li.skill_e').mousemove(function(e) {
		$("div#skill_e").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft).fadeIn(10);
	});
	$('ul li.skill_e').mouseout(function(e) {
		$("div#skill_e").toggle();
	});
	$('ul li.skill_r').mousemove(function(e) {
		$("div#skill_r").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft - 50).fadeIn(10);
	});
	$('ul li.skill_r').mouseout(function(e) {
		$("div#skill_r").toggle();
	});
	$("#Attact").mousemove(function(e) {
		$("#atk_pop_up").css('top', e.pageY + 10).css('left', e.pageX + 10).fadeIn(10);
	});
	$("#Attact").mouseout(function(e) {
		$("#atk_pop_up").toggle();
	});
	$("#Health").mousemove(function(e) {
		$("#hea_pop_up").css('top', e.pageY + 10).css('left', e.pageX + 10).fadeIn(10);
	});
	$("#Health").mouseout(function(e) {
		$("#hea_pop_up").toggle();
	});
	$("#Spells").mousemove(function(e) {
		$("#spe_pop_up").css('top', e.pageY + 10).css('left', e.pageX + 10).fadeIn(10);
	});
	$("#Spells").mouseout(function(e) {
		$("#spe_pop_up").toggle();
	});
	$("#Difficulty").mousemove(function(e) {
		$("#dif_pop_up").css('top', e.pageY + 10).css('left', e.pageX + 10).fadeIn(10);
	});
	$("#Difficulty").mouseout(function(e) {
		$("#dif_pop_up").toggle();
	});
});