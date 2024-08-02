let estadoContainer = document.querySelector(".estado-container");
let estadoNome = document.querySelector(".estado-nome");
let estadoSigla = document.querySelector(".estado-sigla");
let body = document.querySelector("body");
let allPaths = document.querySelectorAll(".map path");
let estadoSelecionado = document.createElement("svg");
let select = document.querySelector("select");
let selectDistribuidor = document.querySelector(".distribuidor-select");

selectDistribuidor.style.display = "none";
let estadoList = [];
let empresaList = [];
window.onload = function () {
  fetch("/svg-brasil/distribuidor.json").then((response) => {
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
          selectedEmpresa();
        });
      });
    });
  });
};

function selectedEmpresa() {
  empresaList = [];
  selectDistribuidor.style.display = "block";
  estadoList.forEach((element) => {
    if (select.value == element.estado) {
      //Se o valor do primeiro select for igual ao nome do estado do arquivo json

      element.empresas.forEach((element2) => {
        let distribuidorOption = document.createElement("option");
        distribuidorOption.innerText = element2.Empresa;
        distribuidorOption.classList.add("empresa");
        selectDistribuidor.append(distribuidorOption);
        empresaList.push(distribuidorOption);
      });
    }
  });

  let allOptions = document.querySelectorAll(".empresa");

  if (allOptions.length > empresaList.length) {
    let a = allOptions.length - empresaList.length; //Pega a diferença entre o total de opções criadas e o total de empresas que tem no estado
    for (i = 0; i < a; i++) {
      allOptions[i].remove();
    }
  }
}

function selectedEstado() {
  let empresaNome = document.querySelector(".estado-empresa-nome");
  let empresaContato = document.querySelector(".estado-empresa-contato");
  let empresaEmail = document.querySelector(".estado-empresa-email");
  let empresaEndereço = document.querySelector(".estado-empresa-endereço");
  let empresaTelefone = document.querySelector(".estado-empresa-telefone");
  let estadoInfo = document.querySelectorAll(".estado-info");
  estadoList.forEach((element2) => {
    element2.empresas.forEach((element3) => {
      if (selectDistribuidor.value == element3.Empresa) {
        estadoInfo.forEach((element) => {
          element.style.opacity = 1;
          element.style.position = "static";
        });
        empresaNome.innerHTML = element3.Empresa;
        empresaContato.innerHTML = element3.Contato;
        empresaEmail.innerHTML = element3.Email;
        empresaEndereço.innerHTML = element3.Endereço;
        empresaTelefone.innerHTML = element3.Telefone;
      }
    });
  });
}

function seguirMouse(e) {
  x = e.clientX;
  y = e.pageY;
  estadoContainer.style.top = y - 0 + "px";
  estadoContainer.style.left = x + 20 + "px";
}
