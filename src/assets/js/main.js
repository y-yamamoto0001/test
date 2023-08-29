import {request_anim_frame_polyfill} from './module/module.js';
import {cancel_anim_frame_polyfill} from './module/module.js';
/*import {test, test_2, test_3} from './module/module.js';*/

import {PageFixed} from "./module/page-fixed.js";
import {ToggleClass} from "./module/toggle-class.js";
import {Modal} from "./module/modal.js";
import {ShowHide} from './module/show-hide.js';
import {ShowHide2} from './module/show-hide-2.js';
import {Spinner} from './module/spinner.js';
import {Carousel} from './module/carousel.js';
import {Carousel2} from './module/carousel-2.js';
import {Svg4everybodyInit} from './module/svg4everybody-init.js';
import {ScrollObserver} from './module/scroll-observer.js';
/*import {Canvas} from './module/canvas.js';*/
import {Accordion} from './module/accordion.js';
import {AnchorLink} from './module/anchor-link.js';
import {Tab} from './module/tab.js';
import {LineAnimation} from './module/line-animation.js';
import {Modal2} from './module/modal-2.js';
/*import {ConsoleLog} from "./module/console-log.js";*/

window.onload = function() {
	
	//request-anim-frame-polyfill
	request_anim_frame_polyfill();

	//cancel-anim-frame-polyfill
	cancel_anim_frame_polyfill();

	//page-menu
	var page_fixed = new PageFixed($(".js-page-fixed-c"), $(".js-page-fixed-c2"), $(".js-page-fixed-c3"), $(".js-page-fixed-c4"), "is-fixed");
	var toggle_class = new ToggleClass($(".js-toggle-class-c"), $(".js-toggle-class-c2"), $(".js-toggle-class-c3"), "is-show");

	//modal
	var page_fixed__2 = new PageFixed($(".js-page-fixed--2-c"), $(".js-page-fixed--2-c2, .js-page-fixed--2-c3"), $(".js-page-fixed--2-c4"), $(".js-page-fixed--2-c5"), "is-fixed");
	var modal = new Modal($(".js-modal-c"), $(".js-modal-c2, .js-modal-c3"), $(".js-modal-c4"), "is-show");

	//show-hide
	var show_hide = new ShowHide($(".js-show-hide-c"), "slide", "is-current");

	//show-hide-2
	var show_hide_2 = new ShowHide2($(".js-show-hide-2-c"), $(".js-show-hide-2-c2"), "fade", "is-current");

	//spinner
	var spinner = new Spinner($(".js-spinner-c"), 1, 999);

	//carousel
	var carousel = new Carousel($(".js-carousel-c"));

	//carousel-2
	var carousel_2 = new Carousel2($(".js-carousel-2-c"));

	//svg4everybody-init
	var svg4everybody_init = new Svg4everybodyInit();

	//scroll-observer
	var scroll_observer = new ScrollObserver();

	//canvas
	/*var canvas = new Canvas($(".js-canvas-c"), $(".js-canvas-c2"));*/

	//accordion
	var accordion = new Accordion($(".js-accordion-c"), "js-accordion-trigger", "is-open");

	//anchor-link
	var anchor_link = new AnchorLink($(".anchor-link"), 50, 500);

	//tab
	var tab = new Tab($(".js-tab-c > li"), $(".js-tab-c2 > div"), "is-current");

	//line-animation
	var line_animation = new LineAnimation(".js-line-animation-c path", 1, 0);

	//modal-2
	var modal_2 = new Modal2($(".js-modal-2-c"));

	//console-log
	/*var console_log = new ConsoleLog($(".js-console-log-c"));*/

	//page-menu
	page_fixed.init();
	toggle_class.init();

	//modal
	page_fixed__2.init();
	modal.init();

	//show-hide
	show_hide.init();

	//show-hide-2
	show_hide_2.init();

	//spinner
	spinner.init();

	//carousel
	carousel.init();

	//carousel-2
	carousel_2.init();

	//svg4everybody-init
	svg4everybody_init.init();

	//scroll-observer
	scroll_observer.init();

	//canvas
	/*canvas.init();*/

	//accordion
	accordion.init();

	//anchor-link
	anchor_link.init();

	//tab
	tab.init();

	//line-animation
	line_animation.init();

	//modal-2
	modal_2.init();

	//console-log
	/*console_log.init();*/

	//
	if ($("html").hasClass("page--index")) {
		//test();
	} else if ($("html").hasClass("page--company-index")) {
		//test_2();
	} else if ($("html").hasClass("page--company-vision")) {
		//test_3();
	};
}