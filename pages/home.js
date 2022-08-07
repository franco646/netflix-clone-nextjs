import HomeNavbar from "../components/navbars/homeNavbar";
import Background from "../components/background/background";
import EmailForm from "../components/forms/emailForm";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen py-12 px-[5%]">
      <Background />
      <HomeNavbar />
      <div className="relative max-w-4xl text-center w-full">
        <h1 className="sm:text-3xl text-5xl font-bold text-white">
          Películas y series ilimitadas y mucho más.
        </h1>
        <h2 className="sm:text-xl text-3xl my-4 text-white">
          Disfruta donde quieras. Cancela cuando quieras.
        </h2>
        <div className="mx-[5%] md:mx-auto w-auto md:w-[680px] h-12 md:h-14">
          <EmailForm className="md:flex" />
        </div>
      </div>
    </div>
  );
};

export default Home;
