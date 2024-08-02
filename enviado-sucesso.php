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
    <title>Fale conosco</title>
    <link rel="stylesheet" href="index.css" />

    <link rel="stylesheet" href="enviar-email/figure.css" />
    <link rel="stylesheet" href="enviar-email/main.css" />

    <link rel="icon" type="image/png" sizes="32x32" href="src/e58df148_1.png" />
  </head>
  <body>
    <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."/assets/"; include($IPATH."header.php"); ?>
    <figure>
      <h1>FORMULÁRIO ENVIADO COM SUCESSO</h1>
    </figure>
    <div class="main-container">
      <main>
        <h1>Alguma dúvida?</h1>
        <p>
          Acesse a sua caixa de e-mail para verificar a integridade das
          informações enviadas.
        </p>
        <p>Havendo quaisquer duvidas contate nossa equipe.</p>
      </main>
    </div>

    <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."/assets/"; include($IPATH."footer.html"); ?>
  </body>
</html>
