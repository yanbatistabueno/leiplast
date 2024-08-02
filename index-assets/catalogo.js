let buttons = document.querySelectorAll(".item");
localStorage.setItem("id", null);
localStorage.setItem("hasChange", null);

buttons.forEach((element) => {
  element.addEventListener("click", function () {
    window.location.href =
      "/catalogo.php?" + "produto=" + element.getAttribute("data-name");
    let id = element.getAttribute("id");
    let hasChange = element.getAttribute("has-change");
    localStorage.setItem("id", id);
    localStorage.setItem("hasChange", hasChange);
  });
});
