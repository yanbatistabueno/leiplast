let estadoContainer = document.querySelector(".estado-container");
let estadoNome = document.querySelector(".estado-nome");
let estadoSigla = document.querySelector(".estado-sigla");
let body = document.querySelector("body");
let allPaths = document.querySelectorAll(".map path");
let estadoSelecionado = document.createElement("svg");
let select = document.querySelector("select");

let estadoList = [];

window.onload = function () {
  fetch("/svg-brasil/estados.json").then((response) => {
    response.json().then((dados) => {
      estadoList = dados.ativos;

      estadoList.forEach((element3) => {
        let options = document.createElement("option");
        select.append(options);
        options.innerText = element3.estado;
        options.value = element3.estado;
        allPaths.forEach((element2) => {
          if (element2.getAttribute("title") == element3.estado) {
            element2.classList.add("ativo");
          }
        });
      });
      let path = document.querySelectorAll(".ativo");
      path.forEach((element) => {
        if (window.matchMedia("(min-width: 1027px)").matches) {
          element.addEventListener("mouseenter", function () {
            estadoContainer.style.opacity = 1;
            estadoContainer.style.display = "grid";

            estadoSigla.innerText = "Sigla do estado: " + element.id;

            estadoNome.innerText =
              "Nome do estado: " + element.getAttribute("title");
            window.addEventListener("mousemove", seguirMouse);
          });
          element.addEventListener("mouseleave", function () {
            window.removeEventListener("mousemove", seguirMouse);
            estadoContainer.style.opacity = 0;
            estadoContainer.style.display = "none";
          });
        }

        element.addEventListener("click", function () {
          console.log("clicou no " + element.getAttribute("title"));
          select.value = element.getAttribute("title");
          selectedEstado();
        });
      });
    });
  });
};
function selectedEstado() {
  let empresaNome = document.querySelector(".estado-empresa-nome");
  let empresaContato = document.querySelector(".estado-empresa-contato");
  let empresaEmail = document.querySelector(".estado-empresa-email");
  let empresaEndereço = document.querySelector(".estado-empresa-endereço");
  let empresaTelefone = document.querySelector(".estado-empresa-telefone");
  let estadoInfo = document.querySelectorAll(".estado-info");

  estadoList.forEach((element2) => {
    if (select.value == element2.estado) {
      estadoInfo.forEach((element) => {
        element.style.opacity = 1;
        element.style.position = "static";
      });
      empresaNome.innerHTML = element2.empresa;
      empresaContato.innerHTML = element2.contato;
      empresaEmail.innerHTML = element2.email;
      empresaEndereço.innerHTML = element2.endereço;
      empresaTelefone.innerHTML = element2.telefone;
    }
  });
}

function seguirMouse(e) {
  x = e.clientX;
  y = e.pageY;
  estadoContainer.style.top = y - 0 + "px";
  estadoContainer.style.left = x + 20 + "px";
}
