export class ShowHide2 {
	constructor(btn, target, effect, class_name) {
		this.btn = btn;
		this.target = target;
		this.effect = effect;
		this.class_name = class_name;
	}
	init(){
		var btn = this.btn;
		var target = this.target;
		var effect = this.effect;
		var class_name = this.class_name;

		target.css("display", "none");
		btn.on("click", function() {
			if (!$(this).hasClass(class_name)) {
				if (effect == "slide") {
					target.slideDown();
				} else if (effect == "show_hide") {
					target.show();
				} else if (effect == "fade") {
					target.fadeIn();
				}
				$(this).addClass(class_name);
			} else {
				if (effect == "slide") {
					target.slideUp();
				} else if (effect == "show_hide") {
					target.hide();
				} else if (effect == "fade") {
					target.fadeOut();
				}
				$(this).removeClass(class_name);
			}
		});		
	}
}