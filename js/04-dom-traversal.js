/*
 * Свойства «навигации» по DOM-узлам (взять список)
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-traversal.html
 */
const navEl = document.querySelector('.site-nav');
console.log(navEl)

const firstEl = navEl.firstElementChild.nextElementSibling;
console.log(firstEl)
