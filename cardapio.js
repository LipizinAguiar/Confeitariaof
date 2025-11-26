


function criarIteCardapio(titulo, descricao, foto){


const divItemCardapio = document.createElement('div')
divItemCardapio.className = 'item-Cardapio'

const h3Titulo = document.createElement('h3')
h3Titulo.textContent = titulo

const pDescricao = document.createElement('p')
pDescricao.textContent = descricao
pDescricao.className = 'descricao'


const img = document.createElement('img')
img.src = foto
img.className = 'img-item'

const divC =document.getElementById('cardapio')

divItemCardapio.appendChild()
}