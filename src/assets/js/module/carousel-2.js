export class Carousel2 {
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
			arrows: true,
			prevArrow: '<span class="carousel__btn carousel__btn--prev"></span>',
			nextArrow: '<span class="carousel__btn carousel__btn--next"></span>',
			slidesToShow: 4,
			slidesToScroll: 1,
			useCSS: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}
}