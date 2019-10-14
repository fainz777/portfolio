

function setPreviewClass(className) {
	const previewWrapper = document.querySelector('#previewer_wrapper');

	previewWrapper.className = `previewer_wrapper ${className}`;
}

function previewSwitching() {
	const mobilePreviewBtn = document.querySelector('#mobile_preview');
	const tabletPreviewBtn = document.querySelector('#tablet_preview');
	const desktopPreviewBtn = document.querySelector('#desktop_preview');

	mobilePreviewBtn.addEventListener('click', function() {
		setPreviewClass('mobile');
	});

	tabletPreviewBtn.addEventListener('click', function() {
		setPreviewClass('tablet');
	});

	desktopPreviewBtn.addEventListener('click', function() {
		setPreviewClass('');
	});
}

function initApp() {
	const previewer = document.querySelector('#previewer');
	const path = document.location.pathname.replace('index.html', '');
	let query = document.location.search;
	query = query.slice(1);
	const queriesArr = query.split('&');
	let params = {};
	queriesArr.forEach(q => {
		const o = q.split('=');
		params[o[0]] = o[1];
	});

	if (!params.project) {
		return;
	}

	previewer.src = `${path}${params.project}/index.html`;

	previewSwitching();
}

document.addEventListener('DOMContentLoaded', initApp);