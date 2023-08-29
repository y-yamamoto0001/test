export class LineAnimation {
	constructor(selector, speed, interval) {
		this.selector = selector;
		this.path_node_list = document.querySelectorAll(this.selector);
		this.path_arr = Array.prototype.slice.call(this.path_node_list, 0);
		this.speed = speed;
		this.interval = interval;
		this.frame_arr = [];
		this.draw_instance_arr = [];
		this.delay_arr = [];
	}
	init(){
		this.path_setting(this.path_arr);
		this.draw_setting(this.path_arr);
		this.delay_setting();
		this.play();
	}
	path_setting(arr) {
		var path_length;
		arr.forEach(function(path) {
			path_length = path.getTotalLength();
			path.style.strokeDasharray = path_length + ' ' + path_length;
			path.style.strokeDashoffset = path_length;
		});
	}

	draw_setting(arr) {
		var path_length;
		var frame;
		var draw_instance;
		arr.forEach(function(path) {
			path_length = path.getTotalLength();
			frame = Math.ceil(path_length / this.speed);
			this.frame_arr.push(frame);
			draw_instance = new DrawPath(path, path_length, frame);
			this.draw_instance_arr.push(draw_instance);
		}, this);
	}

	delay_setting() {
		var delay_arr_length;
		var time;
		this.frame_arr.unshift(0);
		this.frame_arr.pop();
		this.delay_arr = this.frame_arr.map(function(frame) {
			return frame * (1000 / 60);
		});
		delay_arr_length = this.delay_arr.length;
		for (var i = 0; i < delay_arr_length; i += 1) {
			if (i !== 0) {
				time = this.delay_arr[i] + this.delay_arr[i - 1] + this.interval;
				this.delay_arr.splice(i, 1, time);
			}
		}
	}

	play() {
		this.draw_instance_arr.forEach(function(instance, i) {
			setTimeout(function() {
				instance.draw();
			}, this.delay_arr[i]);
		}, this);
	}
}

class DrawPath {
	constructor(path, path_length, frame) {
		this.path = path;
		this.path_length = path_length;
		this.frame = frame;
	    this.current_frame = 0;
	    this.progress = 0;
	    this.request_id = null;
	}
	draw() {
		this.progress = this.current_frame / this.frame;
		if (this.progress > 1) {
			window.cancelAnimFrame(this.request_id);
		} else {
			this.current_frame += 1;
			this.path.style.strokeDashoffset = Math.floor(this.path_length * (1 - this.progress));
			this.request_id = window.requestAnimFrame(this.draw.bind(this));
		}
	}
}