import { connect } from "react-redux";

import { setBrowseLink } from "../../redux/actions/moviesCommon.actions";

const NavbarLink = ({ link, children, currentLink, setBrowseLink }) => {
  return (
    <div
      onClick={() => setBrowseLink(link)}
      className={`${
        link === currentLink ? "text-white font-bold" : "text-gray-2"
      } lg:hover:text-gray-1 cursor-pointer lg:ml-4 text-sm lg:py-0 lg:px-0 py-3 px-4 hover:bg-gray-4 lg:hover:bg-inherit leading-7`}
    >
      {children}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentLink: state.movies.browseLink,
});

const mapDispatchToProps = (dispatch) => ({
  setBrowseLink: (link) => dispatch(setBrowseLink(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavbarLink);
