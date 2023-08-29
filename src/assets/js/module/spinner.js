export class Spinner {
	constructor(el, min, max) {
		this.el = el;
		this.min = min;
		this.max = max;
	}
	init() {
		var el = this.el;
		var min = this.min;
		var max = this.max;
		var step = 1;
		var text_box = el.find("input");
		var btn_up = el.find("span").eq(0);
		var btn_down = el.find("span").eq(1);
		var qty;

		btn_up.on("click", function() {
			qty = parseInt(text_box.val());
			qty += step;
			if (qty > max) {
				qty = max;
			}			
			text_box.val(qty);
		});

		btn_down.on("click", function() {
			qty = parseInt(text_box.val());
			qty -= step;
			if (qty < min) {
				qty = min;
			}
			text_box.val(qty);
		});		
	}
}