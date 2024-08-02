let produtoNome = document.querySelector(".produto-nome");
let produtoImage = document.querySelector(".produto-img");
let produtoAplica = document.querySelector(".produto-aplic");
let produtoPropriedade = document.querySelector(".produto-prop");
let produtoCor = document.querySelector(".produto-cor");
let id = localStorage.getItem("id");
let hasChange = localStorage.getItem("hasChange");
let select = document.querySelector("select");
let selectContainer = document.querySelector(".select-container");

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

class Produto {
  constructor(name, aplic, propiedade, cor) {
    this._name = name;
    this._slug = slugify(name);
    this._img = `src/produtos/${slugify(name)}.png`;
    this._aplic = aplic;
    this._propiedade = propiedade;
    this._cor = cor;
  }
}

let ProdutoList = [];

window.onload = function () {
  const loadProducts = () => {
    ProdutoList.push(
      new Produto(
        "Espaguete Corrugado",
        "Ideal para a cablagem de chicotes elétricos empregados em setores como Indústria Automotiva, Naval, Bélica, Informática e muito mais.",
        "Fabricado em Polipropileno (PP) retardante à chama ou 100% anti-chamas. Com ou sem cortes longitudinais. <br> Fabricados a partir de Ø4,5mm até Ø50mm. Com comprimentos de 20, 25, 50 ou 100m.  ",
        "Padrão preta ou sob consulta."
      )
    );
    ProdutoList.push(
      new Produto(
        "Tubo Isolante De PVC",
        "Indicado para revestimento protetor de chicotes elétricos em ambientes com temperaturas de até 70°C e 105°C.",
        "Pode ser fabricado com diâmetro Interno de Ø1,00mm até Ø30,00mm <br>  Espessuras a partir de 0,20 até 2,00mm <br> Dureza: 80 ± 2 Shore A 15s <br> Comprimentos de 25, 50 e 100m",
        "Preta, Colorida e Transparente (Cristal)"
      )
    );
    ProdutoList.push(
      new Produto(
        "Fita De PVC sem cola",
        "A fita de PVC Leiplast é uma escolha excelente para proporcionar acabamento e proteção a instalações diversas. Com uma superfície autoadesiva sem uso de cola, é perfeita para organizar cabos de áudio, chicotes e outros dispositivos, incluindo cabos de computador e telefonia. Devido à ausência de adesivo, a fita não gruda nos fios, podendo ser facilmente retirada e reutilizada quando necessário. Com sua praticidade, a fita de PVC é uma solução versátil para diversos usos.",
        "Indicada para utilizar em ambientes de até 70°C, fabricadas em rolos de 30m ou 50m. Largura de 18mm e Espessura de 0,20mm. ",
        "Cores: Padrão preta ou sob consulta."
      )
    );
    ProdutoList.push(
      new Produto(
        "Tubo Termo Retratil",
        "Os Tubos Termo-Retráteis, também conhecidos como Espaguete Termo-Contrátil, são revestimentos isolantes de Poliolefina que encolhem ao serem aquecidos, se ajustando perfeitamente a cabos, barramentos e componentes eletrônicos.<br> Além de fornecer isolamento elétrico de até 1 KV, esses tubos oferecem proteção mecânica e facilitam a identificação dos circuitos devido à sua ampla variedade de cores.",
        "Fornecidos com diâmetros a partir de 1,6mm até 50mm. Com e sem adesivos.",
        "Preta, Amarela, Azul, Verde, Roxa, Vermelha, Branca e Transparente"
      )
    );
    ProdutoList.push(
      new Produto("Tubo De Poliuretano", "Vai toma no cu piranha")
    );
    ProdutoList.push(new Produto("Perfil T e U", "Vai toma no cu piranha"));
    ProdutoList.push(
      new Produto("Mangueira Narguile", "Vai toma no cu piranha")
    );
    ProdutoList.push(
      new Produto("Mangueira Lisa e Corrugada", "Vai toma no cu piranha")
    );
    ProdutoList.push(new Produto("Cânulas", "Vai toma no cu piranha"));
    ProdutoList.push(
      new Produto("Canudo Liso E Corrugado", "Vai toma no cu piranha")
    );
    ProdutoList.push(new Produto("Perfil De PU", "Vai toma no cu piranha"));
    ProdutoList.push(new Produto("Raspador De Pu", "Vai toma no cu piranha"));
    ProdutoList.push(new Produto("Fita De Pu", "Vai toma no cu piranha"));
    ProdutoList.push(
      new Produto("Espaguete Cigarro De Palha", "Vai toma no cu piranha")
    );
    return ProdutoList;
  };
  loadProducts();

  try {
    let url_string = window.location.href.toLowerCase();
    let url = new URL(url_string);
    let produtoParam = url.searchParams.get("produto");
    changePage(ProdutoList.find((produto) => produto._slug === produtoParam));
  } catch (err) {
    console.log("Problemas com os parametros da URL - " + err);
  }
};

if (hasChange == "true") {
  selectContainer.style.display = "flex";
} else {
  selectContainer.style.display = "none";
}

function changePage(produto) {
  produtoNome.innerHTML = produto._name;
  produtoImage.src = produto._img;
  produtoAplica.innerHTML = produto._aplic;
  produtoPropriedade.innerHTML = produto._propiedade;
  produtoCor.innerHTML = produto._cor;
}

document.getElementsByTagName("select")[0].onchange = function () {
  var index = this.selectedIndex;
  var inputText = this.children[index].innerHTML.trim();
  console.log(index);

  if (index == 1) {
    ProdutoFinal = ProdutoList[+id - 1];
    produtoNome.innerHTML = ProdutoFinal._name;
    produtoImage.src = ProdutoFinal._img;
    produtoAplica.innerHTML = ProdutoFinal._aplic;
    produtoPropriedade.innerHTML = ProdutoFinal._propiedade;
    produtoCor.innerHTML = ProdutoFinal._cor;
  } else {
    produtoAplica.innerHTML =
      "Indicado para revestimento protetor de chicotes elétricos em ambientes com temperaturas de até 105°C, totalmente anti-chamas.";
    produtoPropriedade.innerHTML =
      "Pode ser fabricado com diâmetro Interno de 1 a 45 mm <br> Espessura padrão de 0,4mm <br> Dureza: 91 ± 5 Shore A 15s";
    console.log("foi");
    /*
      ProdutoFinal = ProdutoList[ProdutoList.length];
      produtoNome.innerHTML = ProdutoFinal._name;
      produtoImage.src = ProdutoFinal._img;
      produtoAplica.innerHTML = ProdutoFinal._aplic;
      produtoPropriedade.innerHTML = ProdutoFinal._propiedade;
      produtoCor.innerHTML = ProdutoFinal._cor;
      */
  }
};
