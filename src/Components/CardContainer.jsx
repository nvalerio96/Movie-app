import '../styles/cardContainer.css'
import { Card } from './Card'

//Contenedor de cartas que se va a mostrar en el componente "Display page" 
export const CardContainer = ({setPage, setFavList, apiData, cardData}) => {
  
  return (
    <section className='cardContainer'>
      {apiData.movies.map(({id, title, genre_ids, overview, release_date, vote_average, original_language, backdrop_path, poster_path}) => (
        <Card
          key={id} 
          setPage={setPage} 
          setFavList={setFavList}
          title={title}
          genre_ids={genre_ids}
          overview={overview}
          release_date={release_date}
          vote_average={vote_average}
          original_language={original_language}
          backdrop_path={backdrop_path}
          poster_path={poster_path}
          cardData={cardData}
          />
      ))}
    </section>
  )
}
