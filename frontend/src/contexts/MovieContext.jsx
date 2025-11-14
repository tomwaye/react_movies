import { createContext, useState, useContext, useEffect } from "react";

/**
 * Shape of the context value for safe defaults and IDE hints.
 * addToFavourites/removeFromFavourites are no-ops by default.
 */
const MovieContext = createContext({
  favourites: [],
  addToFavourites: () => {},
  removeFromFavourites: () => {},
});

/**
 * Hook to consume the MovieContext.
 * Usage: const { favourites, addToFavourites } = useMovieContext();
 */
export const useMovieContext = () => useContext(MovieContext);

/**
 * MovieProvider
 * Wrap the app (or part of it) with <MovieProvider> to provide:
 * - favourites: array of saved movie objects
 * - addToFavourites(movie)
 * - removeFromFavourites(movieId)
 *
 * Persistence:
 * - Loads favourites from localStorage on first render.
 * - Persists favourites to localStorage whenever they change.
 */
export const MovieProvider = ({ children }) => {
  // Lazy initialize favourites from localStorage
  const [favourites, setFavourites] = useState(() => {
    try {
      const savedFavourites = localStorage.getItem("favourites");
      return savedFavourites ? JSON.parse(savedFavourites) : [];
    } catch (err) {
      // If parsing fails, return empty array and log the error
      console.error("Failed to read favourites from localStorage", err);
      return [];
    }
  });

  // Persist to localStorage when favourites change
  useEffect(() => {
    try {
      localStorage.setItem("favourites", JSON.stringify(favourites));
    } catch (err) {
      console.error("Failed to save favourites to localStorage", err);
    }
  }, [favourites]);

  /**
   * Add a movie to favourites if it doesn't already exist.
   * Uses functional state update to avoid stale closures.
   * @param {Object} movie - movie object, should include an `id` property
   */
  const addToFavourites = (movie) => {
    if (!movie || typeof movie.id === "undefined") return;
    setFavourites((prevFavourites) => {
      if (!prevFavourites.find((fav) => fav.id === movie.id)) {
        return [...prevFavourites, movie];
      }
      return prevFavourites;
    });
  };

  /**
   * Remove a movie from favourites by id.
   * @param {number|string} movieId
   */
  const removeFromFavourites = (movieId) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((movie) => movie.id !== movieId)
    );
  };

  const isFavourite = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  }

  return (
    <MovieContext.Provider
      value={{ favourites, addToFavourites, removeFromFavourites, isFavourite }}
    >
      {children}
    </MovieContext.Provider>
  );
}