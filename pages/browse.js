import { useEffect } from "react";
import Modal from "../components/modal/modal";
import MoviesCarousel from "../components/moviesCarousel/moviesCarousel";
import BrowseNavbar from "../components/navbars/browseNavbar";

import { connect } from "react-redux";

import {
  getBrowseMovies,
  getMovies,
  getTvSeries,
  getTopMovies,
} from "../redux/actions/moviesCommon.actions";

const Browse = ({
  getBrowseMovies,
  getTvSeries,
  getMovies,
  getTopMovies,
  browseLink,
  moviesByGenre,
}) => {
  useEffect(() => {
    if (browseLink === "/") {
      getBrowseMovies();
    }
    if (browseLink === "/series") {
      getTvSeries();
    }
    if (browseLink === "/movies") {
      getMovies();
    }
    if (browseLink === "/top") {
      getTopMovies();
    }
  }, [getBrowseMovies, browseLink, getTvSeries, getMovies, getTopMovies]);

  return (
    <div className="bg-netflix-bg-gray min-h-screen">
      <BrowseNavbar />
      <div>
        {moviesByGenre?.map((genre, index) => (
            <MoviesCarousel
              myKey={index}
              key={index}
              movies={genre.movies}
              title={genre.title}
            />
          ))}
      </div>
      <Modal />
    </div>
  );
};

const mapStateToProps = (state) => ({
  browseLink: state.movies.browseLink,
  moviesByGenre: state.movies.movies,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
});

const mapDispatchToProps = (dispatch) => ({
  getBrowseMovies: () => dispatch(getBrowseMovies()),
  getTvSeries: () => dispatch(getTvSeries()),
  getMovies: () => dispatch(getMovies()),
  getTopMovies: () => dispatch(getTopMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
