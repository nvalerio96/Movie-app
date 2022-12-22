import '../styles/displayPage.css'
import { CardContainer } from './CardContainer'
import { ShowCardInfo } from './ShowCardInfo'
import { customFetch } from './utility/customFetch'
import { searchInput } from '../App'
export const BASE_DISCOVER_URL = "https://api.themoviedb.org/3/discover/movie?"
export const BASE_SEARCH_URL = "https://api.themoviedb.org/3/search/movie?"
export const API_KEY_LANGUAGE = "api_key=64451f9d22567bb754ca3ffd2fcb18b5&language=es&include_adult=false&page=1"
export let currentUrl = {url:`${BASE_DISCOVER_URL}`}
const favourites = false

// Componente que va a seleccionar si mostrar el contenedor de cartas o la informacion de la carta seleccionada (ShowCardInfo),
// el contenedor de cartas puede tener las cartas de home, de search o de favoritos
export const DisplayPage = ({page, setPage, setFavList, apiData, cardData, genres}) => {
  
  // Custom fetch recibe variable "currentUrl" para usar como url base de la api
  customFetch(currentUrl, API_KEY_LANGUAGE, apiData, page, setPage, searchInput)

  // switch que selecciona si renderizar el contenedor de todas las cartas o la pagina de la carta seleccionada
  const renderPage = (selectedPage) => {
    switch (selectedPage) {
      case "home":
        return <CardContainer page={page} setPage={setPage} setFavList={setFavList} apiData={apiData} cardData={cardData}/>;
      case "search":
        return searchInput.input != "" ? <CardContainer page={page} setPage={setPage} setFavList={setFavList} apiData={apiData} cardData={cardData}/> : <div><p>No haz escrito en la barra de busquedas!</p></div>;
      case "favourites":
        return favourites ? <CardContainer page={page} setPage={setPage} setFavList={setFavList} apiData={apiData} cardData={cardData}/> : <div><p>Aún no tienes peliculas favoritas!</p></div>;
      case "showCardInfo":
        return <ShowCardInfo setPage={setPage} cardData={cardData} genres={genres} setFavList={setFavList}/>;
    }
  }

  return (
    <section className='displayPage'>
      {renderPage(page)}
    </section>
  )
}
