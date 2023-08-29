export class Carousel {
	constructor(el) {
		this.el = el;
	}
	init(){
		var el = this.el;

		el.slick({
			autoplay: true,
			autoplaySpeed: 3000,
			speed: 300,
			cssEase: "ease",
			easing: "linear",
			fade: false,
			infinite: true,
			swipe: true,
			draggable: false,
			touchMove: true,
			dots: true,
			dotsClass: "carousel__dots",
			customPaging: function(slider, i) {
				return $('<span class="carousel__dot"></span>');
			},
			//customPaging: function(slider, i) {
			//	var thumb = $(slider.$slides[i]).find("img").attr("data-thumb");
			//	return '<img src="' + thumb + '">';
			//},
			arrows: true,
			prevArrow: '<span class="carousel__btn carousel__btn--prev"></span>',
			nextArrow: '<span class="carousel__btn carousel__btn--next"></span>',
			slidesToShow: 1,
			slidesToScroll: 1,
			useCSS: true
		});
	}
}