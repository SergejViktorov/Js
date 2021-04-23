/*
 * - Создание элементов
 * - Вставка узлов: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Создаём заголовок
 */
const titleEl = document.createElement('h2');
titleEl.textContent = 'привет друзья';

console.log(titleEl)

/*
 * Создаём изображение
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imgElement = document.createElement('img');
imgElement.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imgElement.alt = 'valais-alpine-mountains-glacier';
 imgElement.width = 640;

/*
 * Создаём и добавляем новый пункт меню
 */

// const navItemEl = document.querySelector('.site-nav');
// console.log(navItemEl);
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
const navLinkEl = document.createElement('a');

navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'новая ссылка';
navLinkEl.href = '#';
console.log(navItemEl);

navItemEl.appendChild(navLinkEl);

const navUlEl = document.querySelector('.site-nav');
 navUlEl.insertBefore(navItemEl, navUlEl.children[0]);
console.log(navUlEl.children[0])

const heroEl = document.querySelector('.hero');
heroEl.appendChild(titleEl);
heroEl.appendChild(imgElement)
