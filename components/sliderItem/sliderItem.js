import Image from "next/image";

const SliderItem = ({ movie, className }) => {
  return (
    <div
      className={`${className} relative inline-block box-border whitespace-normal align-top w-6/12 h-[calc((100vw-8vw)/2*0.562)] md:w-4/12 md:h-[calc((100vw-8vw)/3*0.562)] lg:w-3/12 lg:h-[calc((100vw-8vw)/4*0.562)] xl:w-1/5 xl:h-[calc((100vw-8vw)/5*0.562)]`}
    >
      <Image
        alt="Mountains"
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
};

export default SliderItem;
