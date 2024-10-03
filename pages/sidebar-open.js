const sidebar = document.querySelector('.header__nav-wrapper');
const sidebarOpenBtn = document.querySelector('.header__sidebar-open-btn');


function openSidebar() {
  const expandedAttribute = sidebarOpenBtn.getAttribute('aria-expanded') === 'true' || false;

  sidebarOpenBtn.setAttribute('aria-expanded', !expandedAttribute);
  sidebarOpenBtn.classList.toggle('is-open');

  sidebar.classList.toggle('is-open');
}


sidebarOpenBtn.addEventListener('click', openSidebar)
