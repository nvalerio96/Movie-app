import '../styles/showCardInfo.css'
import Close from '../assets/img/Vector.png'
import { beforeCard } from '../App'

// ShowCardInfo es un omponente que despliega todos los detalles de la carta seleccionada  

// Cuando toco el botor "X" o "cerrar" establece el estado "page" de app segun la pagina en la que
// estaba situado antes de abrir la carta, para ello consume la variable "bedoreCard"

// Uso de map para comparar la lista genre_id de la carta con los id de los generos que 
// te envia otra api, estos ids estan en la variable "genres" 
export const ShowCardInfo = ({setPage, cardData, genres, setFavList}) => {
  return (
    <article className='cardInfoContainer'>
        <div className='cardInfoImg'>
            <img src={"http://image.tmdb.org/t/p/w500/" + cardData.poster_path} alt="Poster" />
        </div>
        <div className='cardInfoInfo'>
            <div className='tituloFavClose'>
              <div className='tituloFav'>
                <h1>{cardData.title}</h1>
                <button className='cardInfoAddFav' onClick={(e) => {
                            e.stopPropagation()
                            setFavList(current => {
                            let newCurrent = [...current]
                            newCurrent.push("asdasd")
                            return newCurrent
                        })}}>+</button>
              </div>
              <img className='close' src={Close} alt="X" onClick={() => {setPage(beforeCard[0])
                                                                        beforeCard.pop()}}/>
            </div>
            <div className='cardInfoGender'>
              {cardData.genre_ids.map( x => <span key={x}>{genres.list.find( v => v.id == x).name}</span>)}
            </div>
            <div className='cardInfoOverview'>
                <p>{cardData.overview}</p>
            </div>
            <div className='cardInfoData'>
              <div>
                <p>Presupuesto:</p>
                <span>200.000.000$</span>
              </div>
              <div>
                <p>Lanzamiento:</p>
                <span>{cardData.release_date}</span>
              </div>
              <div>
                <p>Duración:</p>
                <span>150 min</span>
              </div>
              <div>
                <p>Valoración:</p>
                <span>{cardData.vote_average}</span>
              </div>
            </div>
            <div className='cardInfoLang'>
              <span>{cardData.original_language}</span>
            </div>
        </div>
    </article>
  )
}
