import axios from "./baseAxios";

const API_KEY = "9b91ed4496735d11d8b7b6da24043385";

const fetchMoviesGenres = async () => {
  const response = await axios.get(
    `genre/movie/list?api_key=${API_KEY}&language=es-MX`
  );
  return response.data.genres;
};

const fetchMoviesByGenre = async (genres) => {
  const moviesByGenres = [];
  genres.forEach((genre) => {
    moviesByGenres.push(
      axios
        .get(
          `discover/movie?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}&with_watch_monetization_types=flatrate`
        )
        .then((response) => ({
          title: genre.name,
          genre: genre,
          movies: [...response.data.results],
        }))
    );
  });

  return await Promise.all(moviesByGenres);
};

export { fetchMoviesGenres, fetchMoviesByGenre };
