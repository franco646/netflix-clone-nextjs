import React, { useState, useRef, useLayoutEffect } from "react";
import Slider from "../slider/slider";

function useWindowSize() {
  const [size, setSize] = useState([0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const MoviesCarousel = ({ movies, title }) => {
  const sliderRef = useRef(null);
  const [sliderItems, setSliderItems] = useState([...movies]);
  const [wasSlide, setWasSlide] = useState(false);

  let moviesPerSlice = 5;
  const [width] = useWindowSize();

  if (width < 980) {
    moviesPerSlice = 4;
  }
  if (width < 800) {
    moviesPerSlice = 3;
  }
  if (width < 500) {
    moviesPerSlice = 2;
  }

  const handleClick = (direction) => {
    sliderRef.current.style.transform = wasSlide
      ? `translate(-200%)`
      : `translate(-100%)`;

    if (direction === "left") {
      const lastElement = moviesCopy.slice(-moviesPerSlice);
      sliderItems.unshift(lastElement);
    } else {
      if (wasSlide) {
        const sliderItemsCopy = [...sliderItems];
        const firstElements = sliderItemsCopy.splice(0, moviesPerSlice);
        sliderItemsCopy.push.apply(sliderItemsCopy, firstElements);
        setTimeout(() => {
          sliderRef.current.style.transition = "none";
          setSliderItems(sliderItemsCopy);
          sliderRef.current.style.transform = `translate(-100%)`;
          setTimeout(() => {
            sliderRef.current.style.transition =
              "transform .54s cubic-bezier(0.4, 0, 1, 1) 0s";
          }, 60);
        }, 540);
      }
      setWasSlide(true);
    }
  };

  return (
    <div className="overflow-hidden">
      <h1 className="text-white my-4">{title}</h1>
      <button className="text-white" onClick={() => handleClick("right")}>
        mover
      </button>
      <div className="">
        <Slider movies={sliderItems} myRef={sliderRef} />
      </div>
    </div>
  );
};

/**
 * <div className='overflow-x-visible scrollbar-hide' ref={sliderRef}>
        <div className="w-[500%] flex shrink-0" >
          
        <div className="basis-[250%] md:basis-[calc(500%/3)] lg:basis-[calc(500%/4)] xl:basis-[calc(500%/5)] flex shrink-0 transition duration-200 ease-out">
          {movies?.map((movie, i) => {
            return <SliderItem movie={movie} key={i} />;
          })}
        </div>
        </div>
        </div>
 */

export default MoviesCarousel;
