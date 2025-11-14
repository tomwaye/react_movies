import "../css/MovieCard.css"

function MovieCard({movie}){

    function onFavourite(){
        alert("Clicked")
    }

    return(
        <>
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={movie.url} alt={movie.title}></img>
                    <div className="movie-overlay">
                        <button className="favourite-btn" onClick={onFavourite}>
                            ♥︎
                        </button>
                    </div>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.date}</p>
            </div>
        </>
    );
}

export default MovieCard