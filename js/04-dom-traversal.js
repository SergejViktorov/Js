/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */
const navEl = document.querySelector('.site-nav');

// const firtNavItemEl = navEl.querySelector('.site-nav__item');
const firtNavItemEl = navEl.children;
console.log(firtNavItemEl);
