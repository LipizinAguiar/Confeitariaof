


function criarItemCardapio(titulo, descricao, foto){


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

divItemCardapio.appendChild(h3Titulo)
divItemCardapio.appendChild(pDescricao)
divItemCardapio.appendChild(img)

divC.appendChild(divItemCardapio)

}

criarItemCardapio('Bolo de Chocolate','Um classico irresistivel com camadas de chocolate.', 'https://montarumnegocio.com/wp-content/uploads/2024/07/como-fazer-bolo-de-cenoura-para-vender.jpg')