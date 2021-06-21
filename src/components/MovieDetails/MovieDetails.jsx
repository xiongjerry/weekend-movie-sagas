import {useSelector} from 'react-redux'

function MovieDetails () {

    const selectedMovie = useSelector(store => store.featuredMovie)

    return (
        <>
            <h1>Movies Details</h1>
            {selectedMovie[0]} && (
            <p>{selectedMovie[0]?.title}</p>
            <p>{selectedMovie[0]?.description}</p>
            <img src={selectedMovie[0]?.poster} alt={selectedMovie[0]?.title}/>
            )
        </>
    )
}

export default MovieDetails;