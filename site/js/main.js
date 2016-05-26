function imageLoaded() {
	(typeof window.loadedImages === 'undefined')
		? window.loadedImages = 1
		: window.loadedImages++;
}

document.addEventListener("DOMContentLoaded", function () {
	var posters = document.querySelector('.posters__list');
	var images = posters.querySelectorAll('img');

	setTimeout(function () {
		var msry = new Masonry(posters, {});
	}, 500);

	var timer = setInterval(function () {
		if (typeof loadedImages !== 'undefined') {
			if (images.length === loadedImages)	{
				var msry = new Masonry(posters, {});
				clearInterval(timer);
			}
		}
	}, 100);
});