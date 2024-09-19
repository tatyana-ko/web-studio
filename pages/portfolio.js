const cards = document.querySelectorAll('.card');
const filters = document.querySelectorAll('.filters__input');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    const currentCategory = filter.dataset.filter;
    filterCards(currentCategory, cards);
  })
})

function filterCards(category, items) {
  items.forEach((item) => {
    const isItemFiltered = !item.classList.contains(category);
    const isShowAll = category.toLowerCase() === 'all';

    if (isItemFiltered && !isShowAll) {
      item.classList.add('hide-card')
    } else {
      item.classList.remove('hide-card')
    }
  })
}