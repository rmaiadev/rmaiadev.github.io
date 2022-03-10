const menuItems = document.querySelectorAll(".header-menu a");

menuItems.forEach((item) => {
  item.addEventListener("click", scrollmenu);
});

function scrollmenu(event) {
  event.preventDefault();
  const elemento = event.target;
  const id = elemento.getAttribute("href");
  const to = document.querySelector(id).offsetTop;

  window.scroll({
    top: to,
    behavior: "smooth",
  });
}

const headerTop = document.querySelectorAll(".subir a");

headerTop.forEach((item) => {
  item.addEventListener("click", scrollheader);
});

function scrollheader(event) {
  event.preventDefault();
  const cima = event.target;
  const id = cima.getAttribute("href");
  const t = document.querySelector(id).offsetTop;

  window.scroll({
    top: t,
    behavior: "smooth",
  });
}