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
    
    <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="src/e58df148_1.png"
    
  /> 
    <link rel="stylesheet" href="index.css" />
    <link rel="stylesheet" href="index-assets/main.css" />
    <link rel="stylesheet" href="index-assets/catalogo.css" />
    <link rel="stylesheet" href="footer.css" />
    <link rel="stylesheet" href="index-assets/figure.css" />
    <link rel="stylesheet" href="index-assets/summary.css" />
    <title>Leiplast</title>
  </head>
  <body>
    <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."/assets/"; include($IPATH."header.php"); ?>
    <article>
      <div class="produto-container">
        <div class="produto-container-info">
          <h1 class="produto-name">Espaguete Corrugado</h1>
          <p class="produto-desc">
          Corrugados para Linha Automotiva, de PP preto, nas metragens 20, 50 ou 100m.
          </p>
          <button class="saiba-mais-button">Saiba Mais</button>
        </div>
        <div class="produto-container-effect"></div>
        <img class="produto-image" src="src/produtos/espaguete-corrugado.png" alt="" />
      </div>
    </article>
    
    <main>
      <h1 id="automotiva">CATÁLOGO PARA LINHA AUTOMOTIVA</h1>
      <div class="catalogo-container">
        
        <button data-name="espaguete-corrugado" id="1" class="item">
          <div>
            
            <h1>ESPAGUETES CORRUGADOS</h1>
            <p class="item-main-desc">POLIPROPILENO PRETO</p>
            <p class="item-desc">
              SEM ANTI-CHAMAS, NÃO PROPAGANTE DE CHAMAS E 100% ANTI-CHAMAS
            </p>
            
          </div>
          <img src="src/produtos/espaguete-corrugado.png" alt="" />
        </button>
        
        
        <button has-change="true" data-name="tubo-isolante-de-pvc" id="2" class="item">
          <div>
            <h1>TUBOS ISOLANTES DE PVC</h1>
            <p class="item-main-desc">PRETO E COLORIDO</p>
            <p class="item-desc">70°C E 105°C ANTI-CHAMAS</p>
          </div>

          <img style="object-fit: cover;" src="src/produtos/espaguete-pvc-ama.png" alt="" />
        </button>
        <button data-name="fita-de-pvc-sem-cola" id="3" class="item">
          <div>
            <h1>FITAS DE PVC SEM COLA</h1>
            <p class="item-main-desc">30 METROS E 50 METROS</p>
          </div>

          <img src="src/produtos/fita-de-pvc-sem-cola.png" alt="" />
        </button>
        <button data-name="tubo-termo-retratil" class="item">
          <div>
            <h1>TUBOS TERMO RETRÁTEIS</h1>
            <p class="item-main-desc">DE POLIOLEFINA PRETA E COLORIDA</p>
            <p class="item-desc">COM E SEM ADESIVO</p>
          </div>

          <img src="src/produtos/tubo-termo-retratil.png" alt="" />
        </button>
        <button data-name="tubo-de-poliuretano" class="item">
          <div>
            <h1>TUBOS DE POLIURETANO</h1>
            <p class="item-main-desc">PRETO E COLORIDO</p>
          </div>

          <img src="src/produtos/tubo-de-poliuretano.png" alt="" />
        </button>
        <button data-name="perfil-t-e-u" class="item">
          <div>
            <h1>PERFÍS T e U</h1>
            <p class="item-main-desc">DE PVC PRETO</p>
          </div>

          <img src="src/produtos/perfil-t-e-u.png" alt="" />
        </button>
      </div>
      <h1 id="fumo">CATÁLOGO PARA LINHA DE FUMO</h1>
      <div class="catalogo-container" style="display: flex">
        <button data-name="espaguete-cigarro-de-palha" class="item">
          <div>
            <h1>ESPAGUETES PARA CIGARROS DE PALHA</h1>
            <p class="item-main-desc">DE PVC COLORIDO</p>
            <p class="item-desc">CLASSE TÉRMICA 70°C SOB CONSULTA</p>
          </div>

          <img src="src/produtos/espaguete-cigarro-de-palha.png" alt="" />
        </button>
        <button data-name="mangueira-de-narguile" class="item">
          <div>
            <h1>MANGUEIRAS PARA NARGUILE</h1>
            <p class="item-main-desc">DE POLIETILENO DE BAIXA DENSIDADE</p>
            <p class="item-desc">DIVERSAS CORES SOB CONSULTA</p>
          </div>

          <img src="src/produtos/mangueira-de-narguile.png" alt="" />
        </button>
      </div>

      <h1 id="hospitalar">CATÁLOGO PARA LINHA HOSPITALAR</h1>
      <div class="catalogo-container" style="display:flex">
        <button data-name="tubo-liso" class="item">
          <div>
            <h1>TUBO LISO</h1>
            <p class="item-main-desc">
              TUBOS DE PVC FLEXÍVEL, ATÓXICO E TRANSLÚCIDO
            </p>
          </div>

          <img src="src/produtos/tubo-liso.png" alt="" />
        </button>
        <button data-name="tubo-corrugado" class="item">
          <div>
            <h1>TUBO CORRUGADO</h1>
            <p class="item-main-desc">
              TUBOS DE PEBD FLEXÍVEL, ATÓXICO E TRANSLÚCIDO
            </p>
          </div>

          <img src="src/produtos/tubo-corrugado.png" alt="" />
        </button>
      </div>
      <h1 id="alimentícia">CATÁLOGO PARA LINHA ALIMENTÍCIA</h1>
      <div class="catalogo-container" style="display:flex;">
        <button data-name="canudo-liso-e-corrugado" class="item">
          <div>
            <h1>CANUDOS LISOS E CORRUGADOS</h1>
            <p class="item-main-desc">DE PVC E POLIPROPILENO ATÓXICOS</p>
          </div>

          <img  src="src/produtos/canudo-liso-e-corrugado.png" alt="" />
        </button>
      </div>
      <h1 id="outros">OUTROS</h1>
      <div class="catalogo-container">
        <button data-name="perfil-de-pu" class="item">
          <div>
            <h1>PERFÍS DE PU</h1>
            <p class="item-main-desc">PARA ESTEIRAS DE AEROPORTO</p>
          </div>

          <img src="src/produtos/perfil-de-pu.png" alt="" />
        </button>
        <button data-name="raspador-de-pu" class="item">
          <div>
            <h1>RASPADOR DE PU</h1>
            <p class="item-main-desc">PARA ESTEIRA DE MINERAÇÃO</p>
          </div>

          <img src="src/produtos/raspador-de-pu.png" alt="" />
        </button>
        <button data-name="fita-de-pu" class="item">
          <div>
            <h1>FITAS DE PU</h1>
            <p class="item-main-desc">
            <p class="item-main-desc">
            PARA ESTEIRA DE SEPARAÇÃO ALIMENTÍCIA E FARMACÊUTICA
            </p>
            </p>
          </div>

          <img src="src/produtos/fita-de-pu.png" alt="" />
        </button>
        <button data-name="espaguete-de-cadeiras" class="item">
          <div>
            <h1>ESPAGUETES PARA CADEIRAS</h1>
            <p class="item-main-desc">
              FABRICADOS EM PVC VIRGEM, GARANTINDO ASSIM MAIOR QUALIDADE PARA SEU PRODUTO
            </p>
          </div>

          <img src="src/produtos/espaguete-de-cadeiras2.png" alt="" />
        </button>
        <button data-name="tubos-para-brinquedos" class="item">
          <div>
            <h1>TUBOS PARA CONFECÇÃO DE BRINQUEDOS</h1>
            <p class="item-main-desc">
              FABRICADOS EM MATÉRIA PRIMA TOTALMENTE ATÓXICA E LIVRE DE METAIS PESADOS
            </p>
          </div>

          <img src="src/produtos/tubos-para-brinquedos.png" alt="" />
        </button>
        <button data-name="veia-macica" class="item">
          <div>
            <h1>VEIA MACIÇA</h1>
            <p class="item-main-desc">
              FABRICADOS EM MATÉRIA PRIMA TOTALMENTE ATÓXICA E LIVRE DE METAIS PESADOS
            </p>
          </div>

          <img src="src/produtos/veia-macica.png" alt="" />
        </button>
      </div>
    </main>
    <figure>
      <img src="src/background/07102008556.jpg" alt="" />
      <div class="figure-container">
        <p>
        A MMV  - LEIPLAST ® uma empresa fabricante de produtos plásticos extrudados e pioneira a 23 anos no mercado. Iniciou as suas atividades no ano  2000, sempre pautada por uma filosofia e atuação prática, baseada na qualidade dos nossos produtos, no investimento constante em pessoal, informação e tecnologia, e em uma postura ética, profissional e pragmática, diante dos seus clientes e do mercado.
        </p>
        <p>
          A empresa evolui continuamente para atender as necessidades dos seus clientes, fazendo parcerias com fornecedores, buscando agilidade e redução de custos com metodologia própria e treinamentos.
        </p>
        <a href="/empresa.php"><button class="button-orçamento">SAIBA MAIS</button></a> 
      </div>
    </figure>
    <summary>
      <h1>FAÇA SEU ORÇAMENTO</h1>
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
            <option id="vazio" value="" disabled selected hidden>
                Selecione o Estado:
            </option>

          </select>
          <p class="error-type"></p>
        </div>
          <div class="input-container">
          <textarea name="mensagem" class="input" oninput="typing(this)" placeholder="Mensagem" name="mensagem" id="mensagem" cols="30" rows="5"></textarea>
          <p class="error-type"></p>
        </div>

        <button type="submit">Enviar Formulário</button>
      </form>
    </summary>
    

    
    <?php $IPATH = $_SERVER["DOCUMENT_ROOT"]."/assets/"; include($IPATH."footer.html"); ?>
    
    <script src="header.js"></script>
    <script src="index-assets/summary.js"></script>
    <script src="index-assets/image-slider.js"></script>
    <script src="index-assets/catalogo.js"></script>
  </body>
</html>
