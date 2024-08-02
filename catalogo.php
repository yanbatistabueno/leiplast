<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" type="image/png" sizes="32x32" href="src/e58df148_1.png" />
    <link rel="stylesheet" href="/index.css" />
    <link rel="stylesheet" href="catalogo/catalogo.css" />
 
    <title>Catalogo</title>
  </head>
  <body>
    <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."/assets/"; include($IPATH."header.php"); ?>
    <main>
      <figure class="produto-img-container">
        <img class="produto-img" src="" alt="foto-do-produto" />
      </figure>
      <article>
        <h1 class="produto-nome">Produto</h1>
        <div class="select-container">
          <h2>Escolha a classe térmica:</h2>
          <select onchange="changeType()" class="summary-input" name="cu">
            <option value="1" disabled selected hidden></option>
            <option></option>
            <option></option>
          </select>
        </div>

        <div class="info">
          <h2>Aplicação:</h2>
          <p class="produto-aplic"></p>
        </div>
        <div class="info">
          <h2>Propriedades:</h2>
          <p class="produto-prop"></p>
        </div>
        <div class="info">
          <h2>Cores:</h2>
          <p class="produto-cor"></p>
        </div>
      </article>

      <div class="pdf-container no-pdf">
        <p class="obs">
          Você pode obter a ficha completa em PDF clicando no botão abaixo.
        </p>
        <button><a target="_blank" class="pdf-button" href="">Ficha completa em PDF</a></button>
        
      </div>
    </main>
    <summary data-visible="false">
      <h1>Mais fotos do produto:</h1>
      <div class="images-container">
      </div>
    </summary>

    <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."/assets/"; include($IPATH."footer.html"); ?>
    <script src="/catalogo/catalogo.js"></script>
  </body>
</html>
