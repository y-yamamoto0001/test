export class PageFixed {
	constructor(btn_1, btn_2, target_1, target_2, class_name) {
		this.btn_1 = btn_1;
		this.btn_2 = btn_2;
		this.target_1 = target_1;
		this.target_2 = target_2;
		this.class_name = class_name;
	}
	init(){
		var btn_1 = this.btn_1;
		var btn_2 = this.btn_2;
		var target_1 = this.target_1;
		var target_2 = this.target_2;
		var class_name = this.class_name;
		var scroll_pos = 0;

		btn_1.on("click", function(e) {
			scroll_pos = $(window).scrollTop();
			target_1.addClass(class_name);
			target_2.css({
				"margin-top" : - scroll_pos,
				"padding-bottom" : scroll_pos
			});
		});

		btn_2.on("click", function(e) {
			target_1.removeClass(class_name);
			target_2.css({
				"margin-top" : "0",
				"padding-bottom" : "0"
			});
			$(window).scrollTop(scroll_pos);
		});
	}
}