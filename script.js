const burgerBtn = document.getElementById('burgerBtn');
const headerList = document.getElementById('headerList');
const headerLinks = document.querySelectorAll('.header__list-item');

function toggleMenu() {
	burgerBtn.classList.toggle('active');
	headerList.classList.toggle('active');
	document.documentElement.classList.toggle('no-scroll');
	document.body.classList.toggle('no-scroll');
}

function closeMenu() {
	burgerBtn.classList.remove('active');
	headerList.classList.remove('active');
	document.documentElement.classList.remove('no-scroll');
	document.body.classList.remove('no-scroll');
}

burgerBtn.addEventListener('click', toggleMenu);

headerLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});