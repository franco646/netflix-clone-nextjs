import { useEffect } from "react";

import { useRouter } from "next/router";

import Modal from "../components/modal/modal";
import MoviesCarousel from "../components/moviesCarousel/moviesCarousel";
import BrowseNavbar from "../components/navbars/browseNavbar";
import LoadingSpinner from "../components/loadingSpinner/loadingSpinner";

import { connect } from "react-redux";

import {
  getBrowseMovies,
  getMovies,
  getTvSeries,
  getTopMovies,
} from "../redux/actions/moviesCommon.actions";
import Billboard from "../components/billboard/billboard";
import Footer from "../components/footer/footer";
import ProfileSelector from "../components/profileSelector/profileSelector";

const Browse = ({
  getBrowseMovies,
  getTvSeries,
  getMovies,
  getTopMovies,
  browseLink,
  user,
  moviesByGenre,
  isLoading,
}) => {
  const router = useRouter();

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

  if (!user.isLogged) {
    router.push({ pathname: "/login" });
  }

  return (
    <div className="bg-netflix-bg-gray min-h-screen">
      {!user?.selectedProfile ? (
        <ProfileSelector />
      ) : (
        <div>
          <BrowseNavbar />
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div>
              <Billboard />
              <div className="mt-[43vw]">
                {moviesByGenre?.map((genre, index) => (
                  <MoviesCarousel
                    myKey={index}
                    key={index}
                    movies={genre.movies}
                    title={genre.title}
                  />
                ))}
              </div>
              <Footer />
            </div>
          )}
          <Modal />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  browseLink: state.movies.browseLink,
  moviesByGenre: state.movies.movies,
  isLoading: state.movies.isLoading,
  error: state.movies.error,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getBrowseMovies: () => dispatch(getBrowseMovies()),
  getTvSeries: () => dispatch(getTvSeries()),
  getMovies: () => dispatch(getMovies()),
  getTopMovies: () => dispatch(getTopMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
