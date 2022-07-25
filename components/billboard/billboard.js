/* eslint-disable @next/next/no-img-element */

const Billboard = () => {
  return (
    <div className="absolute top-0 z-0">
      <img
        className="w-full h-[56.25vw]"
        alt="Mountains"
        src={`https://image.tmdb.org/t/p/original/wNQpfAZkySbinb93qVwWIWaot1x.jpg`}
        layout="fill"
        objectfit="cover"
      />
      <div className="absolute left-0 bottom-0 top-0 right-[26%] bg-billboard-gradient" />
      <div className="absolute h-[14.7vw] left-0 right-0 bottom-0 bg-billboar-bottom-gradient" />
    </div>
  );
};

export default Billboard;
