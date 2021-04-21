const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Свойства элемента (hero)
 * - Изображение
 * - Текст и textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */
// magicBtn.addEventListener('click', () => {
//   const imageEl = document.querySelector('.hero__image');
// console.log('imageEl :',imageEl);
//   console.log(imageEl.src);
  
// imageEl.src = 'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
//   imageEl.alt = 'это новый котик';
// console.log(imageEl.alt);
  

// const heroTitle = document.querySelector('.hero__title');
//   console.log('heroTitle :',heroTitle)
// console.log(heroTitle.textContent);
// heroTitle.textContent = 'я сладкий пирожочек!';
// console.log(heroTitle.textContent);
// })



/*
 * Атрибуты
 * - get(имя-атрибута)
 * - set(имя-атрибута)
 * - remove(имя-атрибута)
 * - has(имя-атрибута)
 */

// console.log(imageEl.getAttribute('alt'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));
// imageEl.removeAttribute('src')
// console.log(imageEl.hasAttribute('src'))
/*
 * Data-атрибуты
 */
const actions = document.querySelectorAll('.js-actions button');
console.log(actions[0].dataset);

magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl.value);
});