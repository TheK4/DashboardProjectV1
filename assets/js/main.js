
// Ativa menu
let menuItem = document.querySelectorAll('.item-menu')

function selectLink () {
    menuItem.forEach((item) => 
        item.classList.remove('ativo')
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) => 
    item.addEventListener('click', selectLink)
)

// Expandir menu

let btnExp = document.querySelector('#btn-exp')
let menuSide = document.querySelector('.side-bar')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})

// Ativa efeito item selecionado
let classEfect = document.querySelectorAll('.selecao-efeito')

function effectSelect () {
    classEfect.forEach((item) => 
        item.classList.remove('effect-active')
    )
    this.classList.add('effect-active')
}

classEfect.forEach((item) => 
    item.addEventListener('click', effectSelect)
)