let produtoNome = document.querySelector(".produto-nome");
let produtoAplic = document.querySelector(".produto-aplic");
let produtoImagem = document.querySelector(".produto-img");
let produtoPropriedade = document.querySelector(".produto-prop");
let produtoCor = document.querySelector(".produto-cor");
let selectContainer = document.querySelector(".select-container");
let main = document.querySelector("main");
let pdfButton = document.querySelector(".pdf-button");
let pdfContainer = document.querySelector(".pdf-container");
let selectInput = document.querySelector(".summary-input");
let options = document.querySelectorAll("option");

window.onload = function () {
  try {
    function getUrl() {
      let url_string = window.location.href.toLowerCase();
      let url = new URL(url_string);
      let produtoParam = url.searchParams.get("produto");
      return produtoParam;
    }
    fetch("/produtos.json").then((response) => {
      response.json().then((dados) => {
        ProdutoList = dados.produtos;
        ProdutoList.forEach((element) => {
          if (slugify(element.nome) == getUrl()) {
            console.log(element.nome);
            changeProduto(element);
            pdfButton.href = "/catalogo/pdf/" + slugify(element.nome) + ".pdf";
            if (element.hasPdf == "yes") {
              pdfContainer.classList.remove("no-pdf");
            }
            if (element.nome == "Tubo Isolante de PVC") {
              selectContainer.style.display = "flex";
              changeType();
              options[1].value = "70";
              options[2].value = "105";
              options[1].innerText = options[1].value + "°C";
              options[2].innerText = options[2].value + "°C";
              options[0].innerText = options[1].innerText;
            }
            if (element.nome == "Tubo Termo Retrátil") {
              selectContainer.style.display = "flex";
              changeType();
              options[1].value = "Sem Adesivo";
              options[2].value = "Adesivado";
              options[1].innerText = options[1].value;
              options[2].innerText = options[2].value;
              options[0].innerText = options[1].innerText;
            }

            const summaryContainer = document.querySelector("summary");

            if (element.images != undefined) {
              summaryContainer.setAttribute("data-visible", "true");
              const imagesContainer =
                document.querySelector(".images-container");
              for (v = 2; v <= element.images + 1; v++) {
                const productImages = document.createElement("img");
                productImages.classList.add("product-images");
                imagesContainer.append(productImages);

                productImages.src =
                  "/src/produtos/" + slugify(element.nome) + v + ".png";
              }
            } else {
              summaryContainer.setAttribute("data-visible", "false");
            }
            console.log(summaryContainer.getAttribute("data-visible"));
          }
          let i = 0;
          i++;
        });
      });
    });
  } catch (err) {
    console.log("Problemas com os parametros da URL - " + err);
  }
};

function slugify(str) {
  // Remove leading and trailing whitespace
  str = str.trim();

  // Make the string lowercase
  str = str.toLowerCase();

  // Remove accents, swap ñ for n, etc
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Remove invalid characters
  str = str.replace(/[^a-z0-9 -]/g, "");

  // Replace whitespace with a hyphen
  str = str.replace(/\s+/g, "-");

  // Collapse consecutive hyphens
  str = str.replace(/-+/g, "-");

  return str;
}

function changeType() {
  let valor = selectInput.value;

  if (valor == "70") {
    produtoAplic.innerHTML =
      "Indicado para revestimento protetor de chicotes elétricos em ambientes com temperaturas de até 70°C";
    produtoPropriedade.innerHTML =
      "Os espaguetes são fabricados com PVC virgem, garantindo a ausência de metais pesados. Além disso, são atóxicos e possuem alta resistência contra ação de fungos, bactérias, insetos, roedores e a maioria dos agentes químicos. Esses espaguetes destacam-se como excelentes isolantes térmicos, elétricos e acústicos, proporcionando um desempenho superior nesses aspectos. Além disso, eles apresentam solidez e resistência excepcionais a choques, garantindo sua durabilidade e confiabilidade em diversas aplicações. <br> Fabricados com diâmetro Interno de Ø1,00mm até Ø30,00mm <br>  Espessuras a partir de 0,20 até 2,00mm <br> Dureza: 80 ± 2 Shore A 15s <br> Comprimentos de 25, 50 e 100m";
    pdfButton.href = "/catalogo/pdf/tubo-isolante-de-pvc.pdf";
  } else if (valor == "105") {
    produtoAplic.innerHTML =
      "Indicado para revestimento protetor de chicotes elétricos em ambientes com temperaturas de até 105°C, totalmente anti-chamas";
    produtoPropriedade.innerHTML =
      "Os espaguetes são fabricados com PVC virgem, garantindo a ausência de metais pesados. Além disso, são atóxicos e possuem alta resistência contra ação de fungos, bactérias, insetos, roedores e a maioria dos agentes químicos. Esses espaguetes destacam-se como excelentes isolantes térmicos, elétricos e acústicos, proporcionando um desempenho superior nesses aspectos. Além disso, eles apresentam solidez e resistência excepcionais a choques, garantindo sua durabilidade e confiabilidade em diversas aplicações. <br> Fabricados com diâmetro Interno de 1 a 45 mm <br> Espessura de parede padrão de 0,4mm <br> Dureza: 91 ± 5 Shore A 15s";
    pdfButton.href = "/catalogo/pdf/tubo-isolante-de-pvc2.pdf";
  }

  if (valor == "Sem Adesivo") {
    console.log(valor);
    produtoAplic.innerHTML =
      "Ao selecionar um espaguete isolante tubo termo retrátil, a temperatura de trabalho é um fator crucial a ser considerado. Dependendo da aplicação, seja em terminais telefônicos com temperatura ambiente ou em fios e terminais automotivos sujeitos a temperaturas mais elevadas, é necessário escolher o espaguete isolante adequado. Para aplicações em temperaturas comuns, um espaguete isolante tubo termo retrátil convencional, sem aditivos de temperatura, é a escolha adequada. Por outro lado, para fios e terminais de motores automotivos, é necessário optar por um espaguete isolante tubo termo retrátil com aditivos que ofereçam resistência a altas temperaturas, retardante de chamas e capacidade de suportar solventes e óleos.";
    pdfButton.href = "/catalogo/pdf/tubo-termo-retratil.pdf";
  } else if (valor == "Adesivado") {
    console.log(valor);
    produtoAplic.innerHTML =
      "O espaguete termo retrátil adesivado possui uma camada de hot melt interno que, ao ser aplicado com temperatura, cria uma vedação, evitando a penetração de água e umidade. É utilizado em chicotes ou áreas externas com maior exposição a condições úmidas. Possui um maior encolhimento (3:1 e 4:1) e desempenho na isolação elétrica. A temperatura de trabalho é de 125 ºC. Disponível em várias cores e em bobinas de 25 metros, e tem a capacidade de encolher em formas e diâmetros diversos.";
    pdfButton.href = "/catalogo/pdf/tubo-termo-retratil2.pdf";
  }
}

function addImage() {}

function changeProduto(produto) {
  produtoNome.innerHTML = produto.nome;
  produtoAplic.innerHTML = produto.aplicação;
  produtoPropriedade.innerHTML = produto.propriedade;
  produtoCor.innerHTML = produto.cor;
  produtoImagem.src = "/src/produtos/" + slugify(produto.nome) + ".png";
}
