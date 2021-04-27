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
// refs.input.addEventListener('input', onInputChange);

refs.input.addEventListener('input', onInputChange)

function onInputChange(event){
  if(refs.input.value ===''){
   return refs.btn.lastElementChild.textContent = 'anonim'
  }
refs.btn.lastElementChild.textContent = event.currentTarget.value;
};


refs.input.addEventListener('focus', onImputFocus);
refs.input.addEventListener('blur', onImputBlur);

function onImputFocus (){
  console.log('go')
}
function onImputBlur(){
  console.log('no go')
}


refs.licenseCheckbox.addEventListener('change', onInputChangeEl);
function onInputChangeEl(event){
  console.log(event.currentTarget.checked);
  refs.btn.disabled = !event.currentTarget.checked
}