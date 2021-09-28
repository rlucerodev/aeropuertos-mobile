/* Rotacion del menu hamburguesa a x */
function toogleMenu() {
	const menuBtn = document.querySelector('.menu-btn');
	let showMenu = false;

	menuBtn.addEventListener('click', function (e) {
		if (!showMenu) {
			menuBtn.classList.add('close');
			showMenu = true;
			if (isMobile()) {
				document.body.style.overflow = 'hidden';
				document.querySelector('.main-container').style.filter = 'blur(6px)';
			}
		} else {
			menuBtn.classList.remove('close');
			// Reset the menu state
			showMenu = false;
			if (isMobile()) document.body.style.overflow = 'auto';
			document.querySelector('.main-container').style.removeProperty('filter');
		}
	});
}

function isMobile() {
	return (
		navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/BlackBerry/i)
	);
}

toogleMenu();
/* document.addEventListener('DOMContentLoaded', function () {
	toogleMenu();
}); */
