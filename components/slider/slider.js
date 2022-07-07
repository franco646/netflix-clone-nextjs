import SliderItem from "../sliderItem/sliderItem";

const Slider = ({ movies, moviesPerSlice, myRef, firstItems }) => {
  return (
    <div className="px-[4%] relative touch-pan-y z-0">
      <div className="overflow-x-visible ease-in duration-[.54s]" ref={myRef}>
        <div className="whitespace-nowrap">
          {firstItems?.map((movie, i) => {
            return <SliderItem movie={movie} key={i} />;
          })}
          {movies?.map((movie, i) => {
            return (
              <SliderItem
                movie={movie}
                key={i}
                corner={
                  i === 0 ? "left" : i === moviesPerSlice - 1 ? "right" : ""
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
