import { connect } from "react-redux";
import NavbarLink from "../navbarLink/navbarLink";

const NavbarDropdownLinks = () => {
  return (
    <div className="w-auto flex-grow flex">
      <div className="group ml-4 relative">
        <div className="lg:hidden inline-flex">
          <div className="text-gray-2 hover:text-gray-1 cursor-pointer text-sm">
            Explorar
          </div>
        </div>
        <div className="invisible top-[52px] lg:top-0 delay-100 lg:visible group-hover:visible absolute -translate-x-1/2 lg:translate-x-0 left-1/2 lg:left-0 lg:relative lg:flex text-center lg:border-none border-gray-3 border-[1px] bg-login-card lg:bg-transparent min-w-[260px] lg:min-w-fit">
          <NavbarLink link="/">Inicio</NavbarLink>
          <NavbarLink link="/series">Series</NavbarLink>
          <NavbarLink link="/movies">Peliculas</NavbarLink>
          <NavbarLink link="/top">Novedades Populares</NavbarLink>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdownLinks;
