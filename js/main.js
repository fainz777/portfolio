function initProjectCarousel() {
	const elem = document.querySelector('#projects_carosel');
	const leftBtn = document.querySelector('#projects_carosel__left');
	const rightBtn = document.querySelector('#projects_carosel__right');
	const options = {
		fullWidth: true
	};
	const carousel = M.Carousel.init(elem, options);

	leftBtn.addEventListener('click', function () {
		carousel.prev();
	})

	rightBtn.addEventListener('click', function () {
		carousel.next();
	})
}

function initApp() {
	initProjectCarousel();
}

document.addEventListener('DOMContentLoaded', initApp);