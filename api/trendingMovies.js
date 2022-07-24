import axios from "./baseAxios";

const API_KEY = "9b91ed4496735d11d8b7b6da24043385";

const fetchMoviesByTrending = async (
  apiCallType = "all", // all, tv or movies
  title = "Tendencias"
) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/${apiCallType}/day?api_key=${API_KEY}`
  );
  return [{ title, movies: response.data.results }];
};

export default fetchMoviesByTrending;
