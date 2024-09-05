console.log(dados[5].descricao);
//criar variável para dizer que é uma tag html


function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
      // Cria um novo elemento de resultado com os dados do item atual
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank"><b>Saiba mais</b></a>
          <p><b>Termos relacionados</b>: ${dado.keywords}</p>
        </div>
      `;
    }
  
    // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }