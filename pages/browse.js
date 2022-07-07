import { useState, useEffect } from "react";
import Modal from "../components/modal/modal";
import MoviesCarousel from "../components/moviesCarousel/moviesCarousel";
import BrowseNavbar from "../components/navbars/browseNavbar";

import { connect } from "react-redux";

import { getBrowseMovies } from "../redux/actions/moviesCommon.actions";

const Browse = ({ getMovies, moviesByGenre, isLoading, error }) => {
  useEffect(() => {
    getMovies();
  }, [getMovies]);

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
  moviesByGenre: state.movies.movies,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
});

const mapDispatchToProps = (dispatch) => ({
  getMovies: () => dispatch(getBrowseMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
