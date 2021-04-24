/*
 * События.
 * - Создание и удаление слушателей
 * - Именование колбеков для слушателей
 *    - handle*: handleSubjectEvent
 *    - *Handler: subjectEventHandler
 *    - on*: onSubjectEvent
 * - Ссылочная идентичность колбеков
 * - Объект события
 */

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');



addListenerBtn.addEventListener('click', event =>{
  console.log(event);
  console.log('вешаю слушателя на целевую кнопку')
  targetBtn.addEventListener('click', onTargetBtnClick);
})

removeListenerBtn.addEventListener('click', ()=>{
  console.log('снимаю слушателя на целевую кнопку');
  targetBtn.removeEventListener('click', onTargetBtnClick);
 
})
function onTargetBtnClick(event){
  console.log(event)
  console.log('click по целевой кнопке')
}

function logMessage(){
  console.log('клик по целевой кнопке')
}
