// const button = document.getElementById('more');
// const divs = document.querySelectorAll('.hidden');
// const hideBtn = document.getElementById('hide');
const hamburger = document.querySelector('.hamburger');
const menu = document.getElementById('menu');

// Hamburger menu

hamburger.addEventListener('click', () => {
  menu.classList.toggle('nav-link');
});

// button.addEventListener('click', () => {
//   divs.forEach((div) => {
//     div.classList.remove('hidden');
//     button.style.display = 'none';
//     hideBtn.style.display = 'inherit';
//   });
// });

// hideBtn.addEventListener('click', () => {
//   divs.forEach((div) => {
//     div.classList.add('hidden');
//     button.style.display = 'inherit';
//     hideBtn.style.display = 'none';
//   });
// });
