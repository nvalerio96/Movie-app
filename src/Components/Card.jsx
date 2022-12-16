import '../styles/card.css'
import { genres } from '../App'
import { beforeCard } from '../App'
import { pageCache } from '../App'

// En onclick de <article> guardo la info de la carta en una variable para mostrarla en seleccion de carta,
// tambien fetcheo los generos para compararlos con los genre_id de la api
export const Card = ({setPage, setFavList, title, genre_ids, overview, release_date, vote_average, original_language, backdrop_path, poster_path, cardData}) => {
    return (
        <div className='divtest'>
        <article className='card' onClick={() => {beforeCard.push(pageCache.cache)
                                                  cardData.title = title
                                                  cardData.genre_ids = genre_ids
                                                  cardData.overview = overview
                                                  cardData.release_date = release_date
                                                  cardData.vote_average = vote_average
                                                  cardData.original_language = original_language
                                                  cardData.backdrop_path = backdrop_path
                                                  cardData.poster_path = poster_path
                                                  if(genres.list.toString() == [].toString()) {
                                                    fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=64451f9d22567bb754ca3ffd2fcb18b5&language=es")
                                                        .then(data => data.json())
                                                        .then(data => {genres.list = data.genres
                                                                      setPage("showCardInfo")})
                                                    }else{
                                                        setPage("showCardInfo")
                                                    }
                                                  }}>
            
            <img src={`http://image.tmdb.org/t/p/w300${poster_path}`} alt="Imagen de fondo" />
            <div className='rating'>
                <p>{vote_average}</p>
            </div>
            <div className='cardGradient'>
                <h2 className='cardTitle'>{title}</h2>
                <div>
                    <div className='cardDescription'>
                        <p>{overview}</p>
                    </div>
                    <button className='cardAddFav' onClick={(e) => {
                        e.stopPropagation()
                        setFavList(current => {
                        let newCurrent = [...current]
                        newCurrent.push("asdasd")
                        return newCurrent
                    })}}>+</button>
                </div>  
            </div>
        </article>
        </div>
    )
}