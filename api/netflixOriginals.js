import axios from "./baseAxios";

const API_KEY = "9b91ed4496735d11d8b7b6da24043385";

const fetchNetflixOriginalSeries = async (title = "Solo en Netflix") => {
  const response = await axios.get(
    `discover/tv?api_key=${API_KEY}&language=es-MX&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false&with_watch_monetization_types=flatrate`
  );
  const series = response.data.results;
  return [{ title, movies: series }];
};

export default fetchNetflixOriginalSeries;
