const openModalBtn = document.querySelector('.hero__order-btn');
const closeModalBtn = document.querySelector('.popup__close-button');
const modal = document.querySelector('.popup');
const popupWrapper = document.querySelector('.popup__wrapper');

openModalBtn.addEventListener('click', () => {
  modal.showModal();
});

closeModalBtn.addEventListener('click', () => {
  modal.close();
});

function closeOnBackDropClick({ currentTarget, target }) {
  const modal = currentTarget
  const isClickedOnBackDrop = target === modal
  if (isClickedOnBackDrop) {
    modal.close()
  }
}

modal.addEventListener('click', closeOnBackDropClick)