import Image from "next/image";

const Background = ({ className, isZoomed }) => {
  return (
    <div className={`z-0 absolute inset-0 overflow-hidden ${className}`}>
      <Image
        src="/background.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className={isZoomed ? "scale-125" : ""}
      />
      <div className="relative h-full w-full bg-background-gradient" />
    </div>
  );
};

export default Background;
