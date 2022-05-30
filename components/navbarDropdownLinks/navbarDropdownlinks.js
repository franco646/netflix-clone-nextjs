import Link from "next/link";

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
        <div className="hidden group-hover:block group-hover:absolute group-hover:-translate-x-1/2 group-hover:left-1/2 lg:group-hover:flex lg:group-hover:relative lg:flex text-center lg:border-none border-gray-3 border-[1px] bg-login-card lg:bg-transparent min-w-[260px] lg:min-w-fit">
          <NavbarLink href="/browse">Inicio</NavbarLink>
          <NavbarLink href="/browse/series">Series</NavbarLink>
          <NavbarLink href="/browse/movies">Peliculas</NavbarLink>
          <NavbarLink href="/browse/top">Novedades Populares</NavbarLink>
        </div>
      </div>
    </div>
  );
};

export default NavbarDropdownLinks;
