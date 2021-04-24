/*
 * - Событие submit
 * - Действия браузера по умолчанию
 * - Свойство elements
 * - Класс FormData - https://developer.mozilla.org/en-US/docs/Web/API/FormData
 */

const form = document.querySelector('.js-register-form');

form.addEventListener('submit', onFormSubmit);
 function onFormSubmit(event){
 event.preventDefault();
// const formEl = event.currentTarget.elements;

// const mail = formEl.email.value;
// const password = formEl.password.value;
// console.log(mail, password)

const formData = new FormData(event.currentTarget);
console.log(formData)
}
