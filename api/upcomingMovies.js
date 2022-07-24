import axios from "./baseAxios";

const API_KEY = "9b91ed4496735d11d8b7b6da24043385";

const fetchUpcomingMovies = async (title = "Próximos estrenos") => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=es-MX&page=1`
  );
  return [{ title, movies: response.data.results }];
};

export default fetchUpcomingMovies;
