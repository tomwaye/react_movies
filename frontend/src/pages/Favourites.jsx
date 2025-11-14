import "../css/Favorites.css"
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

function Favourite(){
    const { favourites } = useMovieContext();

    if (!favourites || favourites.length === 0) {
        return (
            <div className="favorites-empty">
                <h2>No Favourites</h2>
                <p>Start favouriting movies, they'll be right here</p>
            </div>
        )
    }

    return (
        <div className="movies-grid">
            {favourites.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
    )
}

export default Favourite