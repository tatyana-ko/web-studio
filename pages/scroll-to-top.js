const scroll = document.querySelector(".side-scroll-arrow");

scroll.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
