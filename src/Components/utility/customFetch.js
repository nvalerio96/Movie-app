// Consume api segun la pagina en la que te encuentres,
// usa pageCache antes de consumir la api para saber a que pagina se va a dirigir
// luego cambia el estado a la verdadera pagina,
// esto es para mantener el estado de App cambiando y evitar fetchear cosas y que luego no las renderise al ir cambiando de paginas
export const customFetch = (baseUrl, apiKeyLang, apiData, page, setPage, searchInput) => {
    if (page == "") {
              fetch(baseUrl.url + apiKeyLang)
                .then(data => data.json())
                .then(data => {apiData.movies = data.results
                              setPage("home")})
                .catch(error => console.log(`Error: ${error}`))
    }else if(page == "h1") {
              fetch(baseUrl.url + apiKeyLang)
                .then(data => data.json())
                .then(data => {apiData.movies = data.results
                              setPage("home")})
                .catch(error => console.log(`Error: ${error}`))
    }else if (page == "s1") {
              fetch(baseUrl.url + apiKeyLang + `&query=${searchInput.input}`)
                .then(data => data.json())
                .then(data => {apiData.movies = data.results
                              setPage("search")
                              console.log(baseUrl + apiKeyLang + `&query=${searchInput.input}`)})
                .catch(error => console.log(`Error: ${error}`))
    }else if (page == "f1") {
              fetch(baseUrl.url + apiKeyLang)
                .then(data => data.json())
                .then(data => {apiData.movies = data.results
                              setPage("favourites")})
                .catch(error => console.log(`Error: ${error}`))
    }
}