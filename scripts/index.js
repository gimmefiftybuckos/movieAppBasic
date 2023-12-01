function update(data) {
    if (data === undefined) { // проверка на случай если сгенерированного id не будет существовать
        getData(Math.floor(Math.random() * 10000)) 
    }
    const info = document.querySelector('.prim-info')
    const poster = info.querySelector('.poster__image')
    const namePrim = info.querySelector('.main-about__name_ru')
    const nameSec = info.querySelector('.main-about__name_en')
    const slogan = info.querySelector('.main-about__slogan')
    const keyList = info.querySelector('.about__list-value')
    const year = keyList.querySelector('.about__year')
    const from = keyList.querySelector('.about__country')
    const genres = keyList.querySelector('.about__genres')
    const desc = info.querySelector('.about__desc')

    poster.setAttribute('src', `${data.posterUrl}`)

    if (data.nameOriginal !== null) {
        nameSec.textContent = `${data.nameOriginal}`
    } else  nameSec.textContent = ''

    if (data.nameRu == null) {
        namePrim.textContent = `${data.nameOriginal}`
        nameSec.textContent = ''
    } else namePrim.textContent = `${data.nameRu}`

    if (data.slogan !== null) {
        slogan.textContent = `${data.slogan}`
    } else slogan.textContent = ''
    
    year.textContent = `${data.year}`

    function list (obj, field, value) {
        return function () {
            let arr = []
            let string = ''
            for (count of data[obj]) {
            arr.push(count[field])
            string = arr.join(', ')
            } 
            value.textContent = `${string}`
        }
    }

    const countryList = list('countries', 'country', from)
    countryList()

    const genreList = list('genres', 'genre', genres)
    genreList()

    if (data.shortDescription !== null) {
        desc.textContent = `${data.shortDescription}`
    } else desc.textContent = ''
}

const updateButton = document.querySelector('.update-button')
updateButton.addEventListener('click', () => {
    const randomId = Math.floor(Math.random() * 10000)
    getData(randomId)
})

getData(Math.floor(Math.random() * 10000)) // Нужно понять какие рамки стоит задать для рандома


