
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos. O document.getElementById conecta com o html
    let section = document.getElementById("resultados-pesquisa");
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
// se campoPesquisa for uma string sem nada
  if (!campoPesquisa) {
      section.innerHTML = "<p> Nada foi encontrado, digite o que você quer saber.</p>"
    return
  }

  campoPesquisa = campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada item de dados e constrói o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        //tags = dado.tags.toLowerCase()
        //Primeiro colocamos todas as letras minusculas para depois fazer a verificação

        //se titulo includes campoPesquisa
          //então, faça a pesquisa... (só se incluir)
        
          if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
      // Cria um novo elemento de resultado com os dados do item atual

      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank"><b>Saiba mais</b></a>
          <p><b>Termos relacionados</b>: ${dado.tags}</p>
        </div>
      `;
        }
      }
        //A exclamação é para dizer que não tem nada de encontrado nos dados
        if (!resultados) {
          resultados = "<p>Nada foi encontrado. Pesquise novamente.</p>"
        }

    // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
  }
