import React, { useState, useLayoutEffect, useEffect } from "react";
import Slider from "../slider/slider";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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

const MoviesCarousel = ({ movies, title, myKey }) => {
  const [sliderItems, setSliderItems] = useState([...movies]);
  const [wasSlide, setWasSlide] = useState(false);
  const [isMoving, setIsMoving] = useState(false);
  const [translation, setTranslation] = useState(0);
  const [isAnimated, setIsAnimated] = useState(false);

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
    if (!isMoving) {
      setIsMoving(true);
      const sliderItemsCopy = [...sliderItems];
      if (direction === "left") {
        const lastItems = sliderItemsCopy.splice(
          sliderItems.length - moviesPerSlice,
          sliderItems.length
        );
        sliderItemsCopy.unshift.apply(sliderItemsCopy, lastItems);
        setTranslation(-100 / moviesPerSlice);
      } else {
        if (!wasSlide) {
          const lastItem = sliderItemsCopy.pop();
          sliderItemsCopy.unshift(lastItem);
          setTranslation(-100);
        } else {
          const firstElements = sliderItemsCopy.splice(0, moviesPerSlice); // remove first items and saved
          sliderItemsCopy.push.apply(sliderItemsCopy, firstElements); // push first items at the end
          setTranslation(-200 - 100 / moviesPerSlice);
        }
      }
      setTimeout(() => {
        setWasSlide(true);
        setIsAnimated(false);
        setTranslation(-100 - 100 / moviesPerSlice);
        setSliderItems(sliderItemsCopy); // set the updated slider items array
      }, 750);
      setTimeout(() => {
        setIsMoving(false);
        setIsAnimated(true);
      }, 800);
    }
  };

  useEffect(() => {
    if (wasSlide) {
      setTranslation(-100 - 100 / moviesPerSlice);
    }
  }, [moviesPerSlice, wasSlide]);

  return (
    <div className="overflow-hidden my-[3vw]" key={myKey}>
      <h2 className="text-white font-bold leading-[1.4vw] relative text-xs lg:text-[1.4vw] mx-[4%] mb-2 mt-0 lg:mt-1">
        {title}
      </h2>
      <div className="relative group">
        {wasSlide ? (
          <button
            className="absolute rounded-r-sm text-white hover: bg-carousel-button hover:bg-carousel-button-hover left-0  top-0 bottom-0 w-[calc(4%-2px)] z-10"
            onClick={() => handleClick("left")}
          >
            <BsChevronLeft className="hidden group-hover:block hover:scale-125 h-full w-full" />
          </button>
        ) : null}
        <div
          className={`${
            isMoving ? "pointer-events-none" : "pointer-events-auto"
          }`}
        >
          <Slider
            translation={translation}
            isAnimated={isAnimated}
            movies={sliderItems}
            wasSlide={wasSlide}
            moviesPerSlice={moviesPerSlice}
          />
        </div>
        <button
          className="absolute rounded-l-sm text-white bg-carousel-button hover:bg-carousel-button-hover right-0  top-0 bottom-0 w-[calc(4%-2px)] z-10"
          onClick={() => handleClick("right")}
        >
          <BsChevronRight className="hidden group-hover:block hover:scale-125 h-full w-full" />
        </button>
      </div>
    </div>
  );
};

export default MoviesCarousel;
