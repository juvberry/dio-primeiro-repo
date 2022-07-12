let btn = document.getElementById('change-cat')
let baseUrl = 'https://cataas.com/cat'
let jsonUrl = '?json=true'

function getApi(){
    fetch(baseUrl + jsonUrl)
        .then(response => response.json())
        .then(json => {
            let randomCat = 'https://cataas.com' + json.url
            let domCat = document.getElementById('cat')
            domCat.src = randomCat
        })
        .catch(err => console.log(err.message))
}

btn.addEventListener('click', res => {
    getApi()
})

getApi()