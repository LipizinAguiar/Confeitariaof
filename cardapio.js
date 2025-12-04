


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
console.log(data);
criarItemCardapio(data.titulo,
data.descricao,
data.foto)
})
.catch(error => {
console.error('Erro:', error);
document.getElementById('resultado').innerHTML = `Erro: ${error.message}`;
});
}