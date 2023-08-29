export class Accordion {
	constructor(el, class_name_1, class_name_2) {
		this.el = el;
		this.class_name_1 = class_name_1;
		this.class_name_2 = class_name_2;
	}
	init(){
		var el = this.el;
		var class_name_1 = this.class_name_1;
		var class_name_2 = this.class_name_2;
		var trigger = el.find("." + class_name_1);

		trigger.next().css("display", "none");
		trigger.on("click", function(e) {
			var target = $(this).next();
			if (!$(this).hasClass(class_name_2)) {
				target.slideDown();
				$(this).addClass(class_name_2);
			} else {
				target.slideUp();
				$(this).removeClass(class_name_2);
			}
			e.preventDefault();
		});
	}
}