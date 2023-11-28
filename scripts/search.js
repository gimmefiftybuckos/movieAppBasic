const searchInput = document.querySelector('#search') 
const searchForm = document.querySelector('.header__search-form')
const searchList = document.querySelector('.search-list')
let dropDownList = []

// console.log(searchInput)
function search(data) {
    const searchItemTemplate = document.querySelector('#search-template').content
    
    clearList(searchList)
    console.log(data)
    for (i = 0; i < 3; i++) {
        const searchItemElement = searchItemTemplate.querySelector('.search-list__item').cloneNode(true)
        const poster = searchItemElement.querySelector('.search-list__img')
        const name = searchItemElement.querySelector('.search-list__name')
        
        poster.setAttribute('src', `${data.films[i].posterUrl}`)
        name.textContent = `${data.films[i].nameRu}`

        searchList.append(searchItemElement)
        
        searchItemElement.id = data.films[i].filmId
    }

    searchList.addEventListener('click', (event) => {
        element = event.target.closest('.search-list__item')
        getData(element.id)
        console.log(element.id)
    })
    
}

function clearList () {
    list = document.querySelector('.search-list')
    if (list.hasChildNodes()) {
        const elements = list.querySelectorAll('.search-list__item')
        for (element of elements) {
            element.remove()
        }
    }
    dropDownList = []
}

let input // без выноса этой переменной код не работал
function inputTimeout(value) {
    input = setTimeout(() => {
        getSearchData(value)
        console.log(value)
    }, 1000)
}

// при вводе input value запрос отправляется не через каждый символ, а по прошествие 1s 
searchInput.addEventListener('input', (event) => {
    event.preventDefault()
    let keyWordValue = searchInput.value
    clearTimeout(input) // таймаут сбрасывается при регистрации нового ввода, будет выводится последнее зафиксированное знаение 
    inputTimeout(keyWordValue)
})

// при form submit запрос выполнится, сбросится input timeout 
searchForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let keyWordValue = searchInput.value
    getSearchData(keyWordValue)
    clearTimeout(input)
})

// если input имеет значение value выполянется запрос
searchInput.addEventListener('focus', (event) => {
    event.preventDefault()
    let keyWordValue = searchInput.value
    getSearchData(keyWordValue)
    // clearTimeout(input)
})









