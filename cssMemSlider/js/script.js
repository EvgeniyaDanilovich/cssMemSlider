const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel__item');
const dots = document.querySelectorAll('.controls__dot');
const texts = document.querySelectorAll('.signature__text');

let count = 0;

const remove = () => {
	carouselItems.forEach(img => {
		img.classList.remove('active');
	})
	texts.forEach(text => {
		text.classList.remove('active');
	})
}

const addActive = (count) => {
	carouselItems[count].classList.add('active');
	texts[count].classList.add('active');
}

dots.forEach((dot, i) => {
	dot.addEventListener('click', () => {
		count = i;
		remove();
		addActive(count);
	})
})

