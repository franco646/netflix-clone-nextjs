import axios from "./baseAxios";

const API_KEY = "9b91ed4496735d11d8b7b6da24043385";

const fetchTvSeriesGenres = async () => {
  const response = await axios.get(
    `genre/tv/list?api_key=${API_KEY}&language=es-MX`
  );
  return response.data.genres;
};

const fetchTvSeriesByGenre = async (genres) => {
  const tvSeriesByGenres = [];
  genres.forEach((genre) => {
    tvSeriesByGenres.push(
      axios
        .get(
          `discover/tv?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre.id}&with_watch_monetization_types=flatrate`
        )
        .then((response) => ({
          title: genre.name,
          genre: genre,
          movies: [...response.data.results],
        }))
    );
  });

  return await Promise.all(tvSeriesByGenres);
};

export { fetchTvSeriesGenres, fetchTvSeriesByGenre };
