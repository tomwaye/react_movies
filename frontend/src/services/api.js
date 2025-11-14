const API_KEY = "bb9e7e4947bad51b279da49aacceaf88"
const BASE_URL = "https://www.themoviedb.org/"

export const getPopular = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}
        &query=${encodeURIComponent(query)
        }`)
    const data = await response.json()
    return data.results
}


