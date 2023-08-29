export class AnchorLink {
	constructor(el, header_height, speed) {
		this.el = el;
		this.header_height = header_height;
		this.speed = speed;
	}
	init(){
		var el = this.el;
		var header_height = this.header_height;
		var speed = this.speed;

		el.on("click", function(e) {
			var href = $(this).attr("href");
			var target = $(href);
			var position = target.offset().top - header_height;
			$("html, body").animate({scrollTop:position}, speed, "swing");
			e.preventDefault();
		});
	}
}