const openModalBtn = document.querySelector('.hero__order-btn');
const closeModalBtn = document.querySelector('.popup__close-button');
const modal = document.querySelector('.popup');

openModalBtn.addEventListener('click', () => {
  modal.showModal();
  document.body.classList.add("scroll-lock");
});

closeModalBtn.addEventListener('click', () => {
  modal.close();
});

modal.addEventListener('close', () => {
  document.body.classList.remove("scroll-lock");
})