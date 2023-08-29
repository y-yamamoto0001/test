export function test() {
	alert("test");
}

export function test_2() {
	alert("test-2");
}

export function test_3() {
	alert("test-3");
}

export function request_anim_frame_polyfill() {
	window.requestAnimFrame = (function() {
		return (
			window.requestAnimationFrame	|| 
			window.webkitRequestAnimationFrame	|| 
			window.mozRequestAnimationFrame	|| 
			window.oRequestAnimationFrame	|| 
			window.msRequestAnimationFrame	|| 
			function(callback) {
				window.setTimeout(callback, 1000 / 60);
			}
		);
	})();
}

export function cancel_anim_frame_polyfill() {
	window.cancelAnimFrame = (function() {
		return (
			window.cancelAnimationFrame		|| 
			window.webkitCancelAnimationFrame	|| 
			window.mozCancelAnimationFrame	|| 
			window.oCancelAnimationFrame	|| 
			window.msCancelAnimationFrame	|| 
			function(id){
				window.clearTimeout(id);
			}
		);
	})();
}