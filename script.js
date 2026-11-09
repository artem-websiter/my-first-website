const burgerBtn = document.getElementById('burgerBtn');
const headerList = document.getElementById('headerList');

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('is-active');
  headerList.classList.toggle('is-active');
});