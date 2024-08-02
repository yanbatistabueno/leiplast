<!DOCTYPE html>
<html lang="en">
  <head>
  <script src="https://www.google.com/recaptcha/api.js" async defer></script>
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
    <link rel="stylesheet" href="fale-conosco/summary.css">
    <link rel="stylesheet" href="fale-conosco/figure.css">
    <link rel="stylesheet" href="fale-conosco/main.css">
    
    <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="src/e58df148_1.png"
    
  />

  </head>
  <body>
    <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."/assets/"; include($IPATH."header.php"); ?>
    <figure>
        <h1>CONTATO</h1>
    </figure>

    <main>
        <h1>Com duvida em algo?</h1>
        <p>Contamos com profissionais qualificados para atender as suas dúvidas e sugestões. </p>
        <p>Entre em contato conosco escolhendo qual a melhor forma, seja ela via telefone, e-mail ou nosso formulário!</p>
    </main>
    <form method="post" action="enviar-email.php">
      <div class="input-container">
        <input id="nome" name="nome" oninput="typing(this)"  class="input" type="text" placeholder="Nome">
        <p class="error-type"></p>
      </div>
      <div class="input-container">
        <input id="e-mail" name="email" oninput="typing(this)" class="input" type="email" placeholder="E-mail">
        <p class="error-type"></p>
      
      </div> 
      <div class="input-container">
        <input id="telefone" name="telefone" oninput="typing(this)" class="input" type="text" placeholder="Telefone">
        <p class="error-type"></p>
      
      </div>
      <div class="input-container">
        <select name="assunto" onchange="typing(this)" id="assunto" class="input" name="" id="">
        <option id="vazio" value="" disabled selected hidden>
            Assunto:
        </option>
        <option value="Orçamento">Orçamento</option>
        <option value="Duvidas">Duvidas</option>
        <option value="Reclamações">Reclamações</option>
        <option value="Trabalhe Conosco">Trabalhe conosco</option>
        <option value="Outro">Outro</option>
        </select>
        <p class="error-type"></p>
      </div>
      <div class="input-container">
        <select name="estados" onchange="typing(this)" id="estados" class="input" name="" id="">
          <option id="vazio" value="a" disabled selected hidden>
              Selecione o Estado:
          </option>
          <option value="b">
              aaaa
          </option>

        </select>
        <p class="error-type"></p>
      </div>
        <div class="input-container">
        <textarea name="mensagem" class="input" oninput="typing(this)" placeholder="Mensagem" name="mensagem" id="mensagem" cols="30" rows="5"></textarea>
        <p class="error-type"></p>
        <!-- <button class="g-recaptcha"
        data-sitekey="6LdkvRoqAAAAACPtvdNZhJ6eKhyOyAK5KANepz2d"
        data-callback='onSubmit'
        data-action='submit'>
        Submit
      </button> -->
      <div name="g_captcha" class="g-recaptcha" data-sitekey="6LdmihsqAAAAAFLy2r44h9SgsrntConOXa6OEAuN"></div>
      </div>
      
      <button type="submit">Enviar Formulário</button>
    </form>
   
    

    <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."/assets/"; include($IPATH."footer.html"); ?>
    <script src="/fale-conosco/summary.js"></script>
  </body>
</html>
