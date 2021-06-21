import {useSelector} from 'react-redux'

function MovieDetails () {

    const selectedMovie = useSelector(store => store.featuredMovie)

    return (
        <>
            <h1>Movies Details</h1>
            <p>{selectedMovie.title}</p>
            <p>{selectedMovie.description}</p>
            <img src={selectedMovie.poster} />
        </>
    )
}

export default MovieDetails;