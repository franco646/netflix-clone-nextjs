/* eslint-disable @next/next/no-img-element */

import { connect } from "react-redux";

import { BsPlayFill, BsInfoCircle } from "react-icons/bs";

const Billboard = ({ billboardMovie }) => {
  return (
    <div className="absolute top-0 z-0 overflow-hidden bg-netflix-bg-gray w-full">
      <img
        className="w-full h-[56.25vw]"
        alt={`${billboardMovie?.title || billboardMovie?.name} backdrop`}
        src={`https://image.tmdb.org/t/p/original${billboardMovie?.backdrop_path}`}
        layout="fill"
        objectfit="cover"
      />
      <div className="absolute left-0 bottom-0 top-0 right-[26%] bg-billboard-gradient" />
      <div className="absolute h-[14.7vw] left-0 right-0 bottom-0 bg-billboar-bottom-gradient" />
      <div className=" flex flex-col justify-end absolute w-[36%] top-0 bottom-[25%] left-[4%] lg:bottom-[30%] z-10">
        <div className="text-[5vw] text-white font-extrabold whitespace-nowrap mb-[1.2vw]">
          {billboardMovie?.title || billboardMovie?.name}
        </div>
        <div className="text-white text-[1.2vw]">
          {billboardMovie?.overview}
        </div>
        {billboardMovie.title || billboardMovie.name ? (
          <div className="flex mt-[1.5vw] whitespace-nowrap leading-[88%] relative">
            <button className="px-5 md:px-[8] bg-white text-black mb-4 mr-4 rounded p-3 whitespace-nowrap flex font-bold text-[.7rem] md:text-[1rem]">
              <BsPlayFill className="md:scale-[2] scale-150 mr-2 md:mr-4 mt-0.5 md:mt-0" />
              Repodrucir
            </button>
            <button className="px-5 md:px-[8] bg-more-info-button text-white mb-4 mr-4 rounded p-3 whitespace-nowrap flex font-bold text-[.7rem] md:text-[1rem]">
              <BsInfoCircle className="scale-150 mr-2 md:mr-4 mt-0.5 md:mt-0" />
              Mas informacion
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  billboardMovie: state.movies.billboardMovie,
});

export default connect(mapStateToProps)(Billboard);
