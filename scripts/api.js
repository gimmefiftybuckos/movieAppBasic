const apiKey = '' // Ваш API ключ

// Вывод на главную страницу
function getData(id) {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then((data) => {
            update(data)
        })
}

// Вывод в Down drop menu
function getSearchData(keyWord) {
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${keyWord}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then((data) => {
            search(data)
        })
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
