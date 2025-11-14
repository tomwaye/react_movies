import MovieCard from "../components/MovieCard";
import { useState } from "react";

import "../css/Home.css"

function Home() {

    const [searchQuery, setSearchQuery] = useState("")

    const movies = [
        { id: 1, title: "John Wick", date: "2009" },
        { id: 2, title: "The Punisher", date: "2013" },
        { id: 3, title: "Intersteller", date: "2011" },
        { id: 4, title: "Jarhead", date: "2019" },
        { id: 5, title: "John Wick 2", date: "2014" }
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return (
        <>
            <form onSubmit={handleSearch} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search movies" 
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                 />
                 <button type="submit" className="search-button">Search</button>
            </form>
            <div className="home">
                <div className="movie-grid">
                    {movies.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        </>

    );
}

export default Home