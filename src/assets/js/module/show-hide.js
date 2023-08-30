export class ShowHide {
	constructor(el, effect, class_name) {
		this.el = el;
		this.effect = effect;
		this.class_name = class_name;
	}
	init(){
		var el = this.el;
		var effect = this.effect;
		var class_name = this.class_name;

		el.children(":odd").css("display", "none");
		el.children(":even").on("click", function() {
			if (!$(this).hasClass(class_name)) {
				if (effect == "slide") {
					$(this).next().slideDown();
					$(this).siblings("." + class_name).next().slideUp();
				} else if (effect == "show_hide") {
					$(this).next().show();
					$(this).siblings("." + class_name).next().hide();
				} else if (effect == "fade") {
					$(this).next().fadeIn();
					$(this).siblings("." + class_name).next().fadeOut();
				}
				$(this).addClass(class_name);
				$(this).siblings("." + class_name).removeClass(class_name);
			} else {
				if (effect == "slide") {
					$(this).next().slideUp();
				} else if (effect == "show_hide") {
					$(this).next().hide();
				} else if (effect == "fade") {
					$(this).next().fadeOut();
				}
				$(this).removeClass(class_name);
			}
		});
	}
}