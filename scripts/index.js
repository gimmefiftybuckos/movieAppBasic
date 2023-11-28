function update(data) {
    const info = document.querySelector('.prim-info')
    const poster = info.querySelector('.poster__image')
    const namePrim = info.querySelector('.main-about__name_ru')
    const nameSec = info.querySelector('.main-about__name_en')
    const slogan = info.querySelector('.main-about__slogan')
    const keyList = info.querySelector('.about__list-value')
    const year = keyList.querySelector('.about__year')
    const country = keyList.querySelector('.about__country')
    const genres = keyList.querySelector('.about__genres')
    const desc = info.querySelector('.about__desc')

    poster.setAttribute('src', `${data.posterUrl}`)
    namePrim.textContent = `${data.nameRu}`
    
    if (data.nameEn !== null) {
        nameSec.textContent = `${data.nameEn}`
    } else if (data.nameOriginal !== null) {
        nameSec.textContent = `${data.nameOriginal}`
    } else  nameSec.textContent = ''

    if (data.slogan !== null) {
        slogan.textContent = `${data.slogan}`
    } else slogan.textContent = ''
    
    year.textContent = `${data.year}`

    // Я вижу здесь потенциал для функций, но я не очень понимаю как здесь это реализовать

    let countriesArr = []
    let countriesString = ''
    for (count of data.countries) {
        countriesArr.push(count.country)
        countriesString = countriesArr.join(', ')
    } 
    country.textContent = `${countriesString}`

    let genresArr = []
    let genresString = ''
    for (genre of data.genres) {
        genresArr.push(genre.genre)
        genresString = genresArr.join(', ')
    } 
    genres.textContent = `${genresString}`

    if (data.description !== null) {
        desc.textContent = `${data.description}`
    } else desc.textContent = ''
}

const updateButton = document.querySelector('.update-button')
updateButton.addEventListener('click', () => {
    const randomId = Math.floor(Math.random() * 10000)
    getData(randomId)
})

getData(Math.floor(Math.random() * 10000)) // Нужно понять какие рамки стоит задать для рандома



