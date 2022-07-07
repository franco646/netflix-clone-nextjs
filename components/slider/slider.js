import SliderItem from "../sliderItem/sliderItem";

const Slider = ({ movies, moviesPerSlice, wasSlide, myRef }) => {
  return (
    <div className="px-[4%] relative touch-pan-y z-0">
      <div className="overflow-x-visible ease-in duration-[.54s]" ref={myRef}>
        <div className="whitespace-nowrap">
          {movies?.slice(0, moviesPerSlice * 3 + 2).map((movie, i) => {
            return (
              <SliderItem
                movie={movie}
                key={i}
                corner={
                  wasSlide && i === moviesPerSlice + 1
                    ? "left"
                    : !wasSlide && i === 0
                    ? "left"
                    : wasSlide && i === moviesPerSlice * 2
                    ? "right"
                    : !wasSlide && i === moviesPerSlice - 1
                    ? "right"
                    : ""
                }
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
