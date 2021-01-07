window.addEventListener("scroll", function() {
 onScrollDiv() 
});
window.addEventListener("DOMContentLoaded", function() { 
	onScrollDiv() 
});

function onScrollDiv() {
	var images = document.querySelectorAll('.lazyload');
	console.log(images);
	for (var i = 0; i < images.length; i++) {
		var img = images[i]
		var rect = img.getBoundingClientRect();
		console.log(rect.top, window.innerHeight)
		var isVisible = ((rect.top - window.innerHeight) < 500 ) ? true : false ;

		if (isVisible) {
			if (!img.src) {
				img.src = img.dataset.src;
			}
		}
	}
}