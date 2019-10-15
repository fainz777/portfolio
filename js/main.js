function initProjectCarousel() {
	const options = {
		type: 'carousel',
		gap: 0
	};
	new Glide('.glide', options).mount();
}

function initApp() {
	initProjectCarousel();
}

document.addEventListener('DOMContentLoaded', initApp);