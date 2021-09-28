function scrollMove() {
	const sections = document.querySelector('.airport-section-content');
	const arrow = document.querySelector('.arrow-section');
	arrow.addEventListener('click', function () {
		if (sections.scrollLeft === 0) {
			arrow.classList.add('arrow-rotate');
			const scrollWidht = sections.scrollWidth;
			sections.scrollTo({
				left: scrollWidht,
				behavior: 'smooth'
			});
		} else {
			arrow.classList.remove('arrow-rotate');
			const scrollWidht = 0;
			sections.scrollTo({
				left: scrollWidht,
				behavior: 'smooth'
			});
		}
	});

	sections.addEventListener('scroll', function () {
		if (sections.scrollLeft === 0) {
			
			arrow.classList.remove('arrow-rotate');
		} else {
			arrow.classList.add('arrow-rotate');
		}
	});

}


try {
	scrollMove();
} catch (e){
	
}
