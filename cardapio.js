


function criarItemCardapio(titulo, descricao, foto){


const divItemCardapio = document.createElement('div')
divItemCardapio.className = 'item-cardapio'

const h3Titulo = document.createElement('h3')
h3Titulo.textContent = titulo

const pDescricao = document.createElement('p')
pDescricao.textContent = descricao
pDescricao.className = 'descricao'


const img = document.createElement('img')
img.src = foto
img.className = 'img-item'

const divC =document.getElementById('cardapio')

divItemCardapio.appendChild(h3Titulo)
divItemCardapio.appendChild(pDescricao)
divItemCardapio.appendChild(img)

divC.appendChild(divItemCardapio)

}

function consultarCardapio() {
  fetch('https://confeitaria-api-1.onrender.com/cardapio')
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na requisição');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Verifique no console a resposta completa
      if (Array.isArray(data)) {
        // Iterando sobre o array de bolos
        data.forEach(item => {
          // Criando os itens do cardápio
          criarItemCardapio(item.titulo, item.descricao, item.foto);
        });
      } else {
        throw new Error('Formato de dados inesperado.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      document.getElementById('resultado').innerHTML = `Erro: ${error.message}`;
    });
}

// Função que cria um item no cardápio dinamicamente
function criarItemCardapio(titulo, descricao, foto) {
  const cardapioContainer = document.getElementById('cardapio');
  const itemCardapio = document.createElement('div');
  itemCardapio.classList.add('item-cardapio');

  // Adiciona conteúdo ao item de cardápio
  itemCardapio.innerHTML = `
    <h3>${titulo}</h3>
    <p class="descricao">${descricao}</p>
    <img class="img-item" src="${foto}" alt="${titulo}" />
  `;

  // Adiciona o item ao container
  cardapioContainer.appendChild(itemCardapio);
}
