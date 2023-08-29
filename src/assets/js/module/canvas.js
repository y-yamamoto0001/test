export class Canvas {
	constructor(el, wrapper) {
		this.el = el;
		this.wrapper = wrapper;		
		this.ctx = undefined;
		this.flag = true;
	}
	init(){
		var el = this.el;
		if (el[0].getContext){
			this.ctx = el[0].getContext("2d");
			this.size();
			window.addEventListener("resize", this.resize.bind(this));
			this.draw_wrapper();
		}
	}
	resize(){
		if (this.flag) {
			this.flag = false;
			setTimeout(this.size_wrapper.bind(this), 1000 / 60);
		}
	}
	draw_wrapper(){
		this.clear();
		this.draw();
		window.requestAnimFrame(this.draw_wrapper.bind(this));
	}	
	size_wrapper(){
		this.flag = true;
		this.size();
		this.clear();
		this.draw();
	}
	size(){
		var w = this.wrapper.width();
		var h = this.wrapper.height();
		this.el.attr("width", w);
		this.el.attr("height", h);
	}
	clear(){
		this.ctx.clearRect(0,0, this.el.attr("width"), this.el.attr("height"));
	}
	draw(){
		this.ctx.fillStyle = "#ff0000";
		this.ctx.fillRect(0, 0, 100, 100);
	}
}