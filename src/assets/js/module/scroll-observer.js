export class ScrollObserver {
	constructor() {

	}
	init() {

		$(".js-scroll-observer-c").waypoint(function(direction) {
			
			var el = $(this.element);

			if (direction === "down") {

				el.addClass("is-animated");

			} else if (direction === "up") {

			}

		}, {

			offset: "50%"

		});
	}
}