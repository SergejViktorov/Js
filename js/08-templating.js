/*
 * Свойство innerHTML
 * - чтение
 * - запись
 */

const titleEl = document.querySelector('.title');

titleEl.insertAdjacentHTML('afterbegin', '<a href="#">ссылка </a>')
