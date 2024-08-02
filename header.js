let button = document.querySelector(".mobile-toggle");
let navHeader = document.querySelector(".nav-header");
let produtoButton = document.querySelectorAll(".produto-button");

let noLink = document.querySelectorAll(".no-link");
let produtoWrapper = document.querySelectorAll(".produto-wrapper");

noLink.forEach((element) => {
  element.addEventListener("click", function (e) {
    e.preventDefault();
  });
});

if (window.matchMedia("(min-width: 1027px)").matches) {
  produtoWrapper.forEach((element) => {
    element.addEventListener("mouseenter", function () {
      element.setAttribute("data-visible", "false");

      let produtoList = element.children[1];
      produtoList.setAttribute("data-visible", "true");
      console.log(produtoList);
    });

    element.addEventListener("mouseleave", function () {
      let produtoList = element.children[1];
      produtoList.setAttribute("data-visible", "false");
      console.log(produtoList);
    });
  });
}

produtoWrapper.forEach((element) => {
  element.addEventListener("click", function () {
    const visibility = element.children[1].getAttribute("data-visible");
    if (visibility == "false") {
      element.children[1].setAttribute("data-visible", "true");
    } else {
      element.children[1].setAttribute("data-visible", "false");
    }
  });
});

button.addEventListener("click", function () {
  const visibility = navHeader.getAttribute("data-visible");
  if (visibility == "false") {
    navHeader.setAttribute("data-visible", true);
    button.setAttribute("area-expanded", true);
  } else {
    navHeader.setAttribute("data-visible", false);
    button.setAttribute("area-expanded", false);
  }
});
