import './styles/style.scss';
import 'animate.css';
import feather from 'feather-icons';

feather.replace();

// Bottom Navigation
let navItems = document.querySelectorAll('.bottom-nav__item');

navItems.forEach(function (e, i) {
	e.addEventListener('click', function (e) {
		navItems.forEach(function (e2, i2) {
			e2.classList.remove('bottom-nav__item--active');
		});
		this.classList.add('bottom-nav__item--active');
	});
});
