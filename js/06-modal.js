/*
 * 1. Открыть и закрыть по кнопке
 * 2. Закрыть по клику в бекдроп: onBackDropClick
 * 3. Закрыть по ESC: onEscapeKeypress
 *
 * В CSS есть класс show-modal, который необходимо добавить на body при открытии модалки
 */

const refs = {
  openModalBtn: document.querySelector('[data-action="open-modal"]'),
  closeModalBtn: document.querySelector('[data-action="close-modal"]'),
  backdrop: document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
const body = document.querySelector('body');
refs.closeModalBtn.addEventListener('click', onCloseModal);
refs.backdrop.addEventListener('click', onCloseBackdrop);

function onOpenModal() {
  window.addEventListener('keydown', onEcsapeCloseModal);
  body.classList.add('show-modal');
}

function onCloseModal() {
  window.removeEventListener('keydown', onEcsapeCloseModal);
  body.classList.remove('show-modal');
}

function onCloseBackdrop(e) {
  if (e.target === e.currentTarget) {
    onCloseModal();
  }
}

function onEcsapeCloseModal(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}
