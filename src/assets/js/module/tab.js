export class Tab {
	constructor(nav, content, class_name) {
		this.nav = nav;
		this.content = content;
		this.class_name = class_name;
	}
	init(){
		var nav = this.nav;
		var content = this.content;
		var class_name = this.class_name;

		nav.on("click", function(e) {
			var index = $(this).index();
			content.removeClass(class_name);
			content.eq(index).addClass(class_name);
			nav.removeClass(class_name);
			$(this).addClass(class_name);
		});
	}
}