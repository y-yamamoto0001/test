export class ConsoleLog {
	constructor(el) {
		this.el = el;
	}
	init(){
		var el = this.el;
		var hoge;

		$(window).on('scroll', function() {
			hoge = $("body").height();
			el.text(hoge);
		});
		el.on('click', function() {
			hoge = $("body").height();
			el.text(hoge);
		});		
	}
}