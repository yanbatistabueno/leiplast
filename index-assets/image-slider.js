let name = document.querySelector(".produto-name");
let image = document.querySelector(".produto-image");
let desc = document.querySelector(".produto-desc");
let buttonSaiba = document.querySelector(".saiba-mais-button");

buttonSaiba.addEventListener("click", function () {
  window.location.href =
    "catalogo.php?produto=" + slugify("espaguete-corrugado");
});

window.onload = function () {
  fetch("/produtos.json").then((response) => {
    response.json().then((dados) => {
      i = Math.floor(Math.random() * dados.produtos.length);
      produtoAtual = dados.produtos[i];
      setInterval(function () {
        i = Math.floor(Math.random() * dados.produtos.length);
        produtoAtual = dados.produtos[i];
        name.innerHTML = produtoAtual.nome;
        desc.innerHTML = produtoAtual.desc;
        image.src = "/src/produtos/" + slugify(produtoAtual.nome) + ".png";
        buttonSaiba.addEventListener("click", function () {
          window.location.href =
            "catalogo.php?produto=" + slugify(produtoAtual.nome);
        });
      }, 10000);
    });
  });
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

/*
class Produto {
  constructor(name, img, desc, link) {
    this._name = name;
    this._img = img;
    this._desc = desc;
    this._link = link;
  }
}
var a = [];
let Produto1 = new Produto(
  "Espaguete Corrugado",
  "src/produtos/espaguete-corrugado.png",
  "Descrição corrugado",
  "espaguete-corrugado"
);
let Produto2 = new Produto(
  "Tubo Isolante De PVC",
  "src/produtos/espaguete-pvc.png",
  "Descrição Tubo de pvc",
  "espaguete-corrugado"
);
let Produto3 = new Produto(
  "Fita De PVC Sem Cola",
  "src/produtos/fita-pvc.png",
  "Descrição fita de pvc",
  "espaguete-corrugado"
);
let Produto4 = new Produto(
  "Tubo Termo-Retratil",
  "src/produtos/tubo-retratil-preto.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto5 = new Produto(
  "Tubo De Poliuretano",
  "src/produtos/tubo-pu-azul.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto6 = new Produto(
  "Perfil T e U",
  "src/produtos/perfil-pvc.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto7 = new Produto(
  "Mangueira Narguile",
  "src/produtos/narguile-colorido.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto8 = new Produto(
  "Mangueira Lisa e Corrugada",
  "src/produtos/traqueia.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto9 = new Produto(
  "Cânulas",
  "src/produtos/catater.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto10 = new Produto(
  "Canudo Liso E Corrugado",
  "src/produtos/canudo-sanfo.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto11 = new Produto(
  "Perfil De PU",
  "src/produtos/Perfil-PU.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto12 = new Produto(
  "Raspador De Pu",
  "src/produtos/Raspador-PU.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto13 = new Produto(
  "Fita De Pu",
  "src/logo-65_07.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);
let Produto14 = new Produto(
  "Espaguete Cigarro De Palha",
  "src/produtos/espaguete-cigarro.png",
  "Vai toma no cu piranha",
  "espaguete-corrugado"
);

setInterval(function () {
  let item = Math.floor(Math.random() * a.length);
  image.src = a[item]._img;
  nome.innerHTML = a[item]._name;
  desc.innerHTML = a[item]._desc;
}, 10000);
a.push(
  Produto1,
  Produto2,
  Produto3,
  Produto4,
  Produto5,
  Produto6,
  Produto7,
  Produto8,
  Produto9,
  Produto10,
  Produto11,
  Produto12,
  Produto13,
  Produto14
);
buttonSaiba.addEventListener("click", function () {
  window.location.href = "/catalogo.html?" + item._link;
  console.log(item._link);
});

item = Math.floor(Math.random() * a.length);
image.src = a[item]._img;
nome.innerHTML = a[item]._name;
desc.innerHTML = a[item]._desc;
*/
