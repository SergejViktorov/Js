/*
 * Паттерн «Объект ссылок»
 *
 * События
 * - focus и blur
 * - input и change
 * - Чекбоксы и свойство checked
 */

const refs = {
  input: document.querySelector('.js-input'),
  nameLabel: document.querySelector('.js-button > span'),
  licenseCheckbox: document.querySelector('.js-license'),
  btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
refs.input.addEventListener('input', onInputChange);
refs.input.addEventListener('blur', onInputBlur);
refs.licenseCheckbox.addEventListener('change', onCheckbox);
// refs.btn.addEventListener('');

function onInputChange(e) {
  console.log(e.currentTarget.value);
}

function onInputBlur(e) {
  console.log(e.currentTarget.value);
  refs.nameLabel.textContent = e.currentTarget.value;
}

function onCheckbox(e) {
  refs.btn.disabled = !e.currentTarget.checked;
  console.log(e.currentTarget.checked);
}
