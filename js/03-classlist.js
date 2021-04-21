const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Интерфейс classList
 * - add(класс)
 * - remove(класс)
 * - toggle(класс)
 * - replace(старыйКласс, новыйКЛасс)
 * - contains(класс)
 */
// magicBtn.addEventListener('click', () => {
//   const navList = document.querySelector('.site-nav');
// console.log(navList.classList);
//   navList.classList.add('new-class');
//   navList.classList.remove('site-nav');
//   navList.classList.toggle('super-class')
// })

const currentPageUrl = '/portfolio';
const linkEl = document.querySelector('.site-nav__link[href="${currentPageUrl}"]',);
console.log(linkEl);
linkEl.classList.add('new-class');
