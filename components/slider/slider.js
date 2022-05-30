import React, { useState, useLayoutEffect, useRef, useEffect } from "react";
import SliderItem from "../sliderItem/sliderItem";

// checkear si basis es necesario

const Slider = ({ movies, myRef, handleEndOfTransition }) => {
  return (
    <div className="px-[4%] relative touch-pan-y">
      <div
        className="overflow-x-visible ease-in duration-[.54s]"
        ref={myRef}
        onTransitionEnd={handleEndOfTransition}
      >
        <div className="whitespace-nowrap">
          {movies?.map((movie, i) => {
            return <SliderItem movie={movie} key={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
