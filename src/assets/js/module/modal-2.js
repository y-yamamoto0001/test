export class Modal2 {
	constructor(el) {
		this.el = el;
	}
	init(){
		var el = this.el;

		el.each(function() {
			var self = $(this);
			$(this).magnificPopup({
				delegate: 'a',
				type: 'inline',
				removalDelay: 150,
				mainClass: 'mfp-fade',
				closeMarkup: '<span class="modal-2-close"></span>',
				gallery: {
					enabled: true,
					arrowMarkup: '<span class="modal-2-arrow modal-2-arrow--%dir%"></span>'
				},
				callbacks: {
					open: function() {
						$('.modal-2-close').on('click', function(){
							self.magnificPopup('close');
						});
					},
					buildControls: function() {
						this.contentContainer.append(this.arrowLeft);
						this.contentContainer.append(this.arrowRight);
					}
				}
			});
		});
	}
}