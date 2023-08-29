export class ToggleClass {
	constructor(btn_1, btn_2, target, class_name) {
		this.btn_1 = btn_1;
		this.btn_2 = btn_2;
		this.target = target;
		this.class_name = class_name;
	}
	init(){
		var btn_1 = this.btn_1;
		var btn_2 = this.btn_2;
		var target = this.target;
		var class_name = this.class_name;

		btn_1.on("click", function(e) {
			target.addClass(class_name);
		});

		btn_2.on("click", function(e) {
			target.removeClass(class_name);
		});
	}
}