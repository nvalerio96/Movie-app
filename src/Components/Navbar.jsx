import '../styles/navbar.css'
import Logo from '../assets/img/Logo-TDT.png'
import SearchLogo from '../assets/img/Search.png'
import { beforeCard } from '../App'
import { searchInput } from '../App'
import { BASE_DISCOVER_URL } from './DisplayPage'
import { BASE_SEARCH_URL } from './DisplayPage'

// Current url va a administrar que base_url se dirige a la funciion customFetch, se asigna segun el boton que toque
import { currentUrl } from './DisplayPage'
// Page cache se activa antes de fetchear para saber a que pagina me dirijo y sirve de condicional
// para seleccionar el tipo de fetch, se guarda en el estado "page" de App y luego es reemplazada por
// la verdadera pagina  
import { pageCache } from '../App'

// Cuando toco home o search o favoritos guardo en el pageCache para enviar al fetch
export const Navbar = ({setPage}) => {
  
  return (
    <nav className='navBar'>
      <img src={Logo} alt="Logo" id='logoTDT' onClick={() => {currentUrl.url = BASE_DISCOVER_URL
                                                              pageCache.cache = "h1"
                                                              setPage(pageCache.cache)
                                                              beforeCard.pop()}}/>
      <div id='searchDiv'>
        <input type="text" placeholder="Buscar..." id='searchBar'/>
        <img src={SearchLogo} id='searchButton' onClick={() => {searchInput.input = document.getElementById("searchBar").value.split(" ").join("%20").toLowerCase()
                                                                currentUrl.url = BASE_SEARCH_URL
                                                                beforeCard.pop()
                                                                pageCache.cache = "s1"
                                                                setPage(pageCache.cache)
                                                                }}/>
      </div>
      <button id='favourites' onClick={() => {currentUrl.url = BASE_DISCOVER_URL
                                              pageCache.cache = "f1"
                                              setPage(pageCache.cache)
                                              beforeCard.pop()}}>Ver favoritos 0</button>
    </nav>
  )
}
