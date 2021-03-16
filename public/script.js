const burger = document.querySelector('#burger');
const toggle = document.querySelector('#toggle');

burger.addEventListener('click', () => {
 if (toggle.classList.contains('hidden')) {
  toggle.classList.remove('hidden')
 } else {
  toggle.classList.add('hidden');
 }
});