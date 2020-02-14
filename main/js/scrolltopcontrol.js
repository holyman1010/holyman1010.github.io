var scrolltotop = {
	//startline: �ƹ��V�U�u�ʤF100px��X�{#topcontrol
	//scrollto: �����ȥi�H�O��ơA�]�i�H�O�@��id�аO�C�Y����ơ]���]��n�^�A�h�ưʨ�Z��top��n�Ϥ��B�F�Y��id�аO�A�h�ưʨ��id�аO�Ҧb���P�����B
	//scrollduration:�ưʪ��t��
	//fadeduration:#topcontrol�o��div���H�J�H�X�t�סA�Ĥ@�ӰѼƬ��H�J�t�סA�ĤG�ӰѼƬ��H�X�t��
	//controlHTML:����V�W�ưʪ�html���X�A�q�{��<img src="up.png" style="width:48px; height:48px" />�A�i�H�ۦ���C�ӳB��html�N�X�|�Q�]�t�b�@��id�аO��#topcontrol��div���C
	//controlattrs:����#topcontrol�o��div�Z���k�U�����Ϥ��Z��
	//anchorkeyword:�ưʨ쪺id����
	/*state: isvisible:�O�_#topcontrol�o��div���i��
			shouldvisible:�O�_#topcontrol�o��div�ӥX�{
	*/

	setting: {
		startline: 900,
		scrollto: 0,
		scrollduration: 500,
		fadeduration: [500, 500]
	},
	controlHTML: '<div id="btn0"></div>',
	controlattrs: {
		offsetx: 0,
		offsety: 0
	},
	anchorkeyword: '',

	state: {
		isvisible: false,
		shouldvisible: false
	},

	scrollup: function() {
		if (!this.cssfixedsupport) {
			this.$control.css({
				opacity: 0
			})
		}; //�I��������#topcontrol�o��div
		var dest = isNaN(this.setting.scrollto) ? this.setting.scrollto : parseInt(this.setting.scrollto);
		if (typeof dest == "string" && jQuery('#' + dest).length == 1) { //�ˬd�Yscrollto���ȬO�@��id�аO����
			dest = jQuery('#' + dest).offset().top;
		} else { //�ˬd�Yscrollto���ȬO�@�Ӿ��
			dest = this.setting.scrollto;
		};
		this.$body.animate({
			scrollTop: dest
		}, this.setting.scrollduration);
	},

	keepfixed: function() {
		//��o�y��������������
		var $window = jQuery(window);
		//��o#topcontrol�o��div��x�b�y��
		var controlx = $window.scrollLeft() + $window.width() - this.$control.width() - this.controlattrs.offsetx;
		//��o#topcontrol�o��div��y�b�y��
		var controly = $window.scrollTop() + $window.height() - this.$control.height() - this.controlattrs.offsety;
		//�H�۷ưʶ����ư�#topcontrol�o��div���H�۷ư�
		this.$control.css({
			left: controlx + 'px',
			top: controly + 'px'
		});
	},

	togglecontrol: function() {
		//��e���f���ưʶ�������
		var scrolltop = jQuery(window).scrollTop();
		if (!this.cssfixedsupport) {
			this.keepfixed();
		};
		//�Y�]�m�Fstartline�o�ӰѼơA�hshouldvisible��true
		this.state.shouldvisible = (scrolltop >= this.setting.startline) ? true : false;
		//�Yshouldvisible��true�A�B!isvisible��true
		if (this.state.shouldvisible && !this.state.isvisible) {
			this.$control.stop().animate({
				opacity: 1
			}, this.setting.fadeduration[0]);
			this.state.isvisible = true;
		} //�Yshouldvisible��false�A�Bisvisible��false
		else if (this.state.shouldvisible == false && this.state.isvisible) {
			this.$control.stop().animate({
				opacity: 0
			}, this.setting.fadeduration[1]);
			this.state.isvisible = false;
		}
	},

	init: function() {
		jQuery(document).ready(function($) {
			var mainobj = scrolltotop;
			var iebrws = document.all;
			mainobj.cssfixedsupport = !iebrws || iebrws && document.compatMode == "CSS1Compat" && window.XMLHttpRequest; //not IE or IE7+ browsers in standards mode
			mainobj.$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');

			//�]�t#topcontrol�o��div
			mainobj.$control = $('<div id="topcontrol">' + mainobj.controlHTML + '</div>')
				.css({
					position: mainobj.cssfixedsupport ? 'fixed' : 'absolute',
					bottom: mainobj.controlattrs.offsety,
					right: mainobj.controlattrs.offsetx,
					opacity: 0,
					cursor: 'pointer'
				})
				.attr({
					title: ''
				})
			//.click(function(){mainobj.scrollup(); return false;})
			.appendTo('body');

			if (document.all && !window.XMLHttpRequest && mainobj.$control.text() != '') { //loose check for IE6 and below, plus whether control contains any text
				mainobj.$control.css({
					width: mainobj.$control.width()
				}); //IE6- seems to require an explicit width on a DIV containing text
			};

			mainobj.togglecontrol();

			//�I������
			//$('a[href="' + mainobj.anchorkeyword +'"]').click(function(){
			//	mainobj.scrollup();
			//	return false;
			//});

			$(window).bind('scroll resize', function(e) {
				mainobj.togglecontrol();
			});
		});
	}
};

scrolltotop.init();