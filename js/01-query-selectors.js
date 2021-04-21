const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - любой валидный CSS-селектор
 *
 * Что возвращают?
 */
magicBtn.addEventListener('click', () => {
    const navItemEl = document.querySelector('.site-nav');
console.log(navItemEl);


const navLinksEl = navItemEl.querySelectorAll('.site-nav__link');
    console.log(navLinksEl);
})

/*
 * Document.querySelector* и Element.querySelector*
 */
