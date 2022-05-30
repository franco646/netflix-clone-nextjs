import MoviesCarousel from "../components/moviesCarousel/moviesCarousel";
import BrowseNavbar from "../components/navbars/browseNavbar";

const movies = [
  { backdrop_path: "/AdyJH8kDm8xT8IKTlgpEC15ny4u.jpg" },
  { backdrop_path: "/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg" },
  { backdrop_path: "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg" },
  { backdrop_path: "/6mJrgL7Mi13XjJeGYJFlD6UEVQw.jpg" },
  { backdrop_path: "/AfRgDih0N952YNipEHKS1t7PkEi.jpg" },
  { backdrop_path: "/askg3SMvhqEl4OL52YuvdtY40Yb.jpg" },
  { backdrop_path: "/mJQf866IDnWw7ZkFEM2Oz7QfhW0.jpg" },
  { backdrop_path: "/nj1sc2adxEk7fseElV8RIuCaoZD.jpg" },
  { backdrop_path: "/ugukqzx4gSzBd1yzmbWEHLkpGaS.jpg" },
  { backdrop_path: "/qqthj8EUL4QKlDBoMcPqeWvi6Ya.jpg" },
  { backdrop_path: "/xikDpZZAQjzI2ZuaylyjNnOuhKF.jpg" },
  { backdrop_path: "/u1wHUA0R48FH4WV3sGqjwx3aNZm.jpg" },
  { backdrop_path: "/oXJq7bVXfKzx1qMI0J8qOM1Yr9A.jpg" },
  { backdrop_path: "/tUJTaWlDbdC5kTov5zFVCWfCzGO.jpg" },
  { backdrop_path: "/59CCw4EtiahW0E5cfTrvdbqPQTo.jpg" },
  { backdrop_path: "/ggBjAWW0ME4ZU9E8yJ0G50121Xu.jpg" },
  { backdrop_path: "/v85FlkbMYKa5du1glm0YfYNsL2n.jpg" },
  { backdrop_path: "/uMPJwWDojedB36iowSl3HTLmTjW.jpg" },
  { backdrop_path: "/yR0n4Mo7Pltcuy6JRtyt4kkMlIX.jpg" },
  { backdrop_path: "/cmZVWuXM1hpP2GKFABCUkoscKu4.jpg" },
  { backdrop_path: "/p0boFm5Z1HzO6LHMBuLYUM48iVV.jpg" },
  { backdrop_path: "/93xA62uLd5CwMOAs37eQ7vPc1iV.jpg" },
  { backdrop_path: "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg" },
  { backdrop_path: "/qK7Ssnrfvrt65F66A1thvehfQg2.jpg" },
  { backdrop_path: "/3G1Q5xF40HkUBJXxt2DQgQzKTp5.jpg" },
];

const Browse = () => {
  return (
    <div className="bg-black">
      <BrowseNavbar />
      <div>
        <MoviesCarousel movies={movies} title="peliculas" />
        <MoviesCarousel movies={movies} title="peliculas" />
        <MoviesCarousel movies={movies} title="peliculas" />
      </div>
    </div>
  );
};

export default Browse;
