const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.controls__dot');
const texts = document.querySelectorAll('.signature__text');

let count = 0;
let prevCount = 0;

function remove(direction) {
	carouselItems[prevCount].classList.add(direction);
	carouselItems[prevCount].addEventListener('animationend', () => {
		carouselItems[prevCount].classList.remove('active', direction);
	})

	texts[prevCount].classList.add('remove-text');
	texts[prevCount].addEventListener('animationend', () => {
		texts[prevCount].classList.remove('remove-text', 'active');
	})
}

function addActive(direction) {
	carouselItems[count].classList.add('next', direction);
	carouselItems[count].addEventListener('animationend', () => {
		carouselItems[count].classList.add('active');
		carouselItems[count].classList.remove('next', direction);
	});

	texts[count].classList.add('next', 'show-text');
	texts[count].addEventListener('animationend', () => {
		texts[count].classList.add('active');
		texts[count].classList.remove('next', 'show-text');
	});
}

dots.forEach(function (dot, i) {
	dot.addEventListener('click', function () {
		prevCount = count;
		count = i;

		if (prevCount > count) {
			remove('to-right');
			addActive('from-left');
		} else if (prevCount === count) {
			return
		} else {
			remove('to-left');
			addActive('from-right');
		}

	})
})

