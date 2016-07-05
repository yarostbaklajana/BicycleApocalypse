(function(){
	var images = document.querySelectorAll('#main img');
	var length = images.length;
	var last = length - 1;
	function toggleImage() {
		for(var i = 0; i < length; i++) {
			var image = images[i];
			if(!image.classList.contains('hidden')) {
				var next = (i == last? 0 : i + 1);
				image.classList.add('hidden');
				images[next].classList.remove('hidden');
				return;
			}
		}
	}
	setInterval(toggleImage, 10000);
	
})();