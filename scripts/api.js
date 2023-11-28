const apiKey = '' // Ваш API ключ

// Вывод на главную страницу
async function getData(id) {
    try {
        const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
        },
        })
        const data = await res.json()
        await update(data)
        await getSimilarsData(id)
    } catch (err) {
        console.error(err)
    }
}

// Вывод в Down drop menu
async function getSearchData(keyWord) {
    try {
        const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyWord}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
        },
        })
        const data = await res.json()
        await search(data)
    } catch (err) {
        console.error(err)
    }
}

// Вывод рекомендаций к фильму
async function getSimilarsData(id) {
    try {
        const res = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`, {
        method: 'GET',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
        },
        })
        const data = await res.json()
        await similars(data)
    } catch (err) {
        console.error(err)
    }
}


// Квота запросов к api
fetch(`https://kinopoiskapiunofficial.tech/api/v1/api_keys/${apiKey}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then((data) => {
            console.log(data)
})

