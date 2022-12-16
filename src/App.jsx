import './App.css'
import { Navbar } from './Components/Navbar'
import { DisplayPage } from './Components/DisplayPage'
import { useState } from 'react'
let apiData = {movies: []}
// cardData almacena los datos de la carta seleccionada para mostrar en vista completa
let cardData = {}
// beforeCard se encarga de almacenar la pagina anterior a abrir una carta, luego es usada
// cuando se cierra la carta, si estabas en una busqueda volves a esa misma busqueda y no al home
export let beforeCard = [] 
export let pageCache = {cache:""}
export let genres = {list:[]}
export let searchInput = {input:""}

export const App = () => {
  const [page, setPage] = useState("");
  const [favList, setFavList] = useState([])

  // Condiciones que controlan los favoritos en local storage [funcionalidad de FAVORITOS sin terminar]
  if (!localStorage.getItem("favMovies")) {
    localStorage.setItem("favMovies", [])
  }
  if (localStorage.getItem("favMovies").toString() != [].toString() && favList.toString() == [].toString()) {
    setFavList(localStorage.getItem("favMovies").split(","))
  }
  if (localStorage.getItem("favMovies").toString() != favList.toString()) {
    localStorage.setItem("favMovies", favList)
  }

  return (
    <main className="App">
      <Navbar setPage={setPage}/>
      <DisplayPage page={page} setPage={setPage} setFavList={setFavList} apiData={apiData} cardData={cardData} genres={genres}/>
    </main>
  )
}
