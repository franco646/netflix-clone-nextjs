/* eslint-disable @next/next/no-img-element */

import { connect } from "react-redux";

const Billboard = ({ billboardMovie }) => {
  return (
    <div className="absolute top-0 z-0 overflow-hidden">
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
        <div>
          <button>Repodrucir</button>
          <button>Mas informacion</button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  billboardMovie: state.movies.billboardMovie,
});

export default connect(mapStateToProps)(Billboard);
