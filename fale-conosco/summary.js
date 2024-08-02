let form = document.querySelector("form");
let inputs = document.querySelectorAll(".input");
let submit = document.querySelector("submit");
let inputContainer = document.querySelectorAll(".input-container");
let errorType = document.querySelectorAll(".error-type");

let estadoList = [
  "Acre (AC)",
  "Alagoas (AL)",
  "Amapá (AP)",
  "Amazonas (AM)",
  "Bahia (BA)",
  "Ceará (CE)",
  "Distrito Federal (DF)",
  "Espírito Santo (ES)",
  "Goiás (GO)",
  "Maranhão (MA)",
  "Mato Grosso (MT)",
  "Mato Grosso do Sul (MS)",
  "Minas Gerais (MG)",
  "Pará (PA)",
  "Paraíba (PB)",
  "Paraná (PR)",
  "Pernambuco (PE)",
  "Piauí (PI)",
  "Rio de Janeiro (RJ)",
  "Rio Grande do Norte (RN)",
  "Rio Grande do Sul (RS)",
  "Rondônia (RO)",
  "Roraima (RR)",
  "Santa Catarina (SC)",
  "São Paulo (SP)",
  "Sergipe (SE)",
  "Tocantins (TO)",
];

console.log("ue");

let estadoContainer = document.querySelector("#estados");
console.log(estadoContainer);

for (i = 0; i <= estadoList.length - 1; i++) {
  let estadoOptions = document.createElement("option");
  estadoOptions.value = estadoList[i];
  estadoOptions.innerHTML = estadoList[i];
  estadoContainer.append(estadoOptions);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  //Se tudo estiver certo
  if (validação()) {
    form.submit();
  }
});
function validação() {
  let listError = [];
  inputs.forEach((element, index) => {
    if (element.value == "") {
      listError.push("o index: " + index);
      element.classList.add("input-error");
      element.classList.remove("input-success");
      errorType.innerHTML = "Campo vazio";
      errorType[index].innerHTML = "Campo Vazio";
    } else {
      listError.pop;
      element.classList.remove("input-error");
      element.classList.add("input-success");
      errorType[index].innerHTML = "";
    }
  });
  if (!telefone_validation(inputs[2].value)) {
    listError.push("telefone invalido");
    inputs[2].classList.add("input-error");

    inputs[2].classList.remove("input-success");
    errorType[2].innerHTML = "Telefone Inválido";
  } else {
    listError.pop;
    inputs[2].classList.remove("input-error");
    inputs[2].classList.add("input-success");
  }

  if (inputs[5].value.length < 20) {
    listError.push("mensagem invalida");
    inputs[5].classList.add("input-error");

    inputs[5].classList.remove("input-success");
    errorType[5].innerHTML = "Mensagem curta demais";
    inputs[5].placeholder = "";
    inputs[5].value = "";
  } else {
    listError.pop;
    inputs[5].classList.remove("input-error");
    inputs[5].classList.add("input-success");
  }
  if (!email_validation(inputs[1].value)) {
    listError.push("email invalido");
    inputs[1].classList.add("input-error");

    inputs[1].classList.remove("input-success");
    errorType[1].innerHTML = "E-mail Inválido";
  } else {
    listError.pop;
    inputs[1].classList.remove("input-error");
    inputs[1].classList.add("input-success");
  }
  if (inputs[0].value.length >= 255) {
    listError.push("nome grande demais");
    inputs[0].classList.add("input-error");
    inputs[0].classList.remove("input-success");
    errorType[0].innerHTML = "Nome grande demais";
    inputs[0].value = "";
  } else if (inputs[0].value.length > 1 && inputs[0].value.length < 255) {
    listError.pop;
    inputs[0].classList.remove("input-error");
    inputs[0].classList.add("input-success");
  }
  if (inputs[1].value.length >= 255) {
    listError.push("nome grande demais");
    inputs[1].classList.add("input-error");
    inputs[1].classList.remove("input-success");
    errorType[1].innerHTML = "Nome grande demais";
    inputs[1].value = "";
  } else if (inputs[1].value.length > 1 && inputs[1].value.length < 255) {
    listError.pop;
    inputs[1].classList.remove("input-error");
    inputs[1].classList.add("input-success");
  }

  if (listError.length == 0) {
    return true;
  }
  //console.log("envio realizado");
  //return true;
}

function typing(element) {
  element.parentElement.childNodes[3].innerHTML = "";
}

function telefone_validation(telefone) {
  //retira todos os caracteres menos os numeros
  telefone = telefone.replace(/\D/g, "");

  //verifica se tem a qtde de numero correto
  if (!(telefone.length >= 10 && telefone.length <= 11)) return false;

  //Se tiver 11 caracteres, verificar se começa com 9 o celular
  if (telefone.length == 11 && parseInt(telefone.substring(2, 3)) != 9)
    return false;

  //verifica se não é nenhum numero digitado errado (propositalmente)
  for (var n = 0; n < 10; n++) {
    //um for de 0 a 9.
    //estou utilizando o metodo Array(q+1).join(n) onde "q" é a quantidade e n é o
    //caractere a ser repetido
    if (telefone == new Array(11).join(n) || telefone == new Array(12).join(n))
      return false;
  }
  //DDDs validos
  var codigosDDD = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
    37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63,
    65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
    89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ];
  //verifica se o DDD é valido (sim, da pra verificar rsrsrs)
  if (codigosDDD.indexOf(parseInt(telefone.substring(0, 2))) == -1)
    return false;

  //  E por ultimo verificar se o numero é realmente válido. Até 2016 um celular pode
  //ter 8 caracteres, após isso somente numeros de telefone e radios (ex. Nextel)
  //vão poder ter numeros de 8 digitos (fora o DDD), então esta função ficará inativa
  //até o fim de 2016, e se a ANATEL realmente cumprir o combinado, os numeros serão
  //validados corretamente após esse período.
  //NÃO ADICIONEI A VALIDAÇÂO DE QUAIS ESTADOS TEM NONO DIGITO, PQ DEPOIS DE 2016 ISSO NÃO FARÁ DIFERENÇA
  //Não se preocupe, o código irá ativar e desativar esta opção automaticamente.
  //Caso queira, em 2017, é só tirar o if.
  if (new Date().getFullYear() < 2017) return true;
  if (
    telefone.length == 10 &&
    [2, 3, 4, 5, 7].indexOf(parseInt(telefone.substring(2, 3))) == -1
  )
    return false;

  //se passar por todas as validações acima, então está tudo certo
  return true;
}

function email_validation(email) {
  const emailRegex = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
  );
  if (emailRegex.test(email)) {
    return true;
  } else {
    return false;
  }
}

//chamada simples
//telefone_validation("(11)99000-3777"); // retorna true
//telefone_validation("11-99000-3777"); // retorna true
//telefone_validation("11990003777"); // retorna true
//telefone_validation("1111111111"); // retorna false
//telefone_validation("1111111111"); // retorna false
//telefone_validation("(01)3444-4444"); // retorna false
//telefone_validation("(01)43444-4444"); // retorna false
