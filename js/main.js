function setMoreButton() {
	const moreBtns = document.querySelectorAll('.read_more');

	moreBtns.forEach(btn => {
		btn.addEventListener('click', function() {
			const wrapper = this.closest('.projects_carosel__item_info');
			wrapper.classList.toggle('expanded');
		});
	})

}

function initProjectCarousel() {
	const options = {
		type: 'carousel',
		gap: 0,
		dragThreshold: false
	};
	new Glide('.glide', options).mount();
}

function initApp() {
	initProjectCarousel();
	setMoreButton();
}

document.addEventListener('DOMContentLoaded', initApp);