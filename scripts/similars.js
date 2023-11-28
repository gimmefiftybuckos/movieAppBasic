const similarsList = document.querySelector('.similars-list')

function similars(data) {
    // Аналогично здесь наверняка можно реализовать через замыкание, но в моем понимании получится черсчур много параметров для нее 
    for (i = data.items.length; i < similarsList.children.length; i++) {

        const img = similarsList.children[i].querySelector('.similars-list__img')
        const name = similarsList.children[i].querySelector('.similars-list__name')

        similarsList.children[i].style.display = 'none'

        img.setAttribute('src', '')
        name.textContent = ''
    }
    if (data.items.length > 0) { // Проверка чтоб не выскакивала ошибка, если возвращается объект с более чем 6 элементами
        for (i = 0; (i < data.items.length && i < 6); i++) {
            const img = similarsList.children[i].querySelector('.similars-list__img')
            const name = similarsList.children[i].querySelector('.similars-list__name')

            similarsList.children[i].style.display = 'flex'

            similarsList.children[i].id = data.items[i].filmId

            img.setAttribute('src', data.items[i].posterUrl)
            name.textContent = data.items[i].nameRu
        }  
    }
}

similarsList.addEventListener('click', (event) => {
    element = event.target.closest('.similars-list__item')
    getData(element.id)
})