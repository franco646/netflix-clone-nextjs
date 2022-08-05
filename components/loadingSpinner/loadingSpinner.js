const LoadingSpinner = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] after:animate-spin after:bg-no-repeat after:bg-lading-spinner after:bg-contain after:absolute after:h-full after:w-full" />
  );
};

export default LoadingSpinner;
