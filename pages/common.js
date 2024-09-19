const scroll = document.querySelector(".side-scroll");

scroll.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
