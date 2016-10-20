$(window).load(function() {

	$(".account").click(function() {
		var X = $(this).attr('id');

		if (X == 1) {
			$(".submenu").fadeOut('fast');
			$(this).attr('id', '0');

		} else {

			$(".submenu").fadeIn();
			$(".submenu_01").fadeOut('fast');
			$("#submenu_02").fadeOut('fast');
			$(this).attr('id', '1');
			$(".language").attr('id', '0');
			$("#share a").attr('id', '0');
		}
	})


	$(".language").click(function() {
		var X = $(this).attr('id');

		if (X == 1) {
			$(".submenu_01").fadeOut('fast');
			$(this).attr('id', '0');

		} else {

			$(".submenu_01").fadeIn();
			$(".submenu").fadeOut('fast');
			$("#submenu_02").fadeOut('fast');
			$(this).attr('id', '1');
			$(".account").attr('id', '0');
			$("#share a").attr('id', '0');
		}
	})

	$("#share a").click(function() {
		var X = $(this).attr('id');

		if (X == 1) {
			$("#submenu_02").fadeOut('fast');
			$(this).attr('id', '0');

		} else {

			$("#submenu_02").fadeIn();
			$(".submenu").fadeOut('fast');
			$(".submenu_01").fadeOut('fast');
			$(this).attr('id', '1');
			$(".account").attr('id', '0');
			$(".language").attr('id', '0');
		}


	})


	;

	//Mouseup textarea false
	$(".submenu").mouseup(function() {
		return false
	});
	$(".account").mouseup(function() {
		return false
	});

	$(".submenu_01").mouseup(function() {
		return false
	});
	$(".language").mouseup(function() {
		return false
	});
	$("#share a").mouseup(function() {
		return false
	});
	$("#submenu_02").mouseup(function() {
		return false
	});
	//click function//
	$("#International").click(function() {
		$("#Region").text("International");
		$(".submenu").fadeOut('fast');
		$("#submenu_02").fadeOut('fast');
		$(".account").attr('id', '0');
	});
	$("#North_America").click(function() {
		$("#Region").text("North America");
		$(".submenu").fadeOut('fast');
		$("#submenu_02").fadeOut('fast');
		$(".account").attr('id', '0');
	});
	$("#Asia").click(function() {
		$("#Region").text("Asia");
		$(".submenu").fadeOut('fast');
		$("#submenu_02").fadeOut('fast');
		$(".account").attr('id', '0');
	});
	$("#Europe").click(function() {
		$("#Region").text("Europe");
		$(".submenu").fadeOut('fast');
		$("#submenu_02").fadeOut('fast');
		$(".account").attr('id', '0');
	});

	$("#English").click(function() {
		$("#Language").text("English");
		$(".submenu_01").fadeOut('fast');
		$("#submenu_02").fadeOut('fast');
		$(".language").attr('id', '0');
	});
	$("#mandarin_chinese").click(function() {
		$("#Language").text("中文");
		$(".submenu_01").fadeOut('fast');
		$("#submenu_02").fadeOut('fast');
		$(".language").attr('id', '0');
	});
	$("#japanese").click(function() {
		$("#Language").text("日文");
		$(".submenu_01").fadeOut('fast');
		$("#submenu_02").fadeOut('fast');
		$(".language").attr('id', '0');
	});
	$("#English_EU").click(function() {
		$("#Language").text("English(EU)");
		$(".submenu_01").fadeOut('fast');
		$("#submenu_02").fadeOut('fast');
		$(".language").attr('id', '0');
	});
	$("#tell").click(function() {
		$("#submenu_02").fadeOut('fast');
		$("#share a").attr('id', '0');
	});
	$("#copy").click(function() {
		$("#submenu_02").fadeOut('fast');
		$("#share a").attr('id', '0');
	});
	$("#Sh_FB").click(function() {
		$("#submenu_02").fadeOut('fast');
		$("#share a").attr('id', '0');
	});
	$("#Sh_TW").click(function() {
		$("#submenu_02").fadeOut('fast');
		$("#share a").attr('id', '0');
	});
	//Textarea without editing.
	$(document).mouseup(function() {
		$(".submenu").fadeOut('fast');
		$(".account").attr('id', '0');
		$(".submenu_01").fadeOut('fast');
		$(".language").attr('id', '0');
		$("#submenu_02").fadeOut('fast');
		$("#share a").attr('id', '0');
	});
});