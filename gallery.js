(function(){
	var container = document.querySelector('.bike-site-container');
	var gallery = document.querySelector("#bike-gallery");
	var modalWindow = document.querySelector('#modal-window');
	var photo = document.querySelector('#photo');

	gallery.addEventListener('click', function(e) {
		if(!e.target.hasAttribute('data-path')) {
			return;
		} else {
			showModal(e.target.dataset.path);
		}
	});

	function showModal(path) {
		modalWindow.classList.remove('closed');
		container.classList.add('fix');		
		photo.setAttribute('src', path);
	}

	modalWindow.addEventListener('click', function(e) {
		if(!e.target.hasAttribute('data-close')) {
			return;
		} else {
			closeModal();
		}
	});

	function closeModal() {
		photo.removeAttribute('src');
		container.classList.remove('fix');
		modalWindow.classList.add('closed');
	}
})();