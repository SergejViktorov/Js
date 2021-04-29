/*
 * Типы событий: keypress, keydown, keyup
 * - Ограничения keypress
 * - Свойства KeyboardEvent.key и KeyboardEvent.code
 */

const refs = {
  output: document.querySelector('.js-output'),
  clearBtn: document.querySelector('.js-clear'),
};
window.addEventListener('keypress', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(e) {
  console.log(e.key);
  console.log(e.code);
  refs.output.textContent += e.key;
}

function onClearOutput() {
  refs.output.textContent = '';
}
