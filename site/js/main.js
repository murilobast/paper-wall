var loadedImages = 0;

function imageLoaded() {
	(typeof loadedImages === 'undefined')
		? loadedImages = 1
		: loadedImages++;
}

document.addEventListener("DOMContentLoaded", function () {
	var posters = document.querySelector('.posters__list');
	var images = posters.getElementsByTagName('img');
	var loader = document.querySelector('.loader');
	var timer = 0;

	timer = setInterval(function () {
		if (typeof loadedImages !== 'undefined') {
			if (images.length === loadedImages)	{
				var msry = new Masonry(posters, {});
				loader.classList.add('loaded');
				clearInterval(timer);
			}
		}
	}, 100);
});