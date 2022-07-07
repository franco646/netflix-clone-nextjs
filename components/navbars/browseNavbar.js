//import { netflixLogo } from "../../assets/index";
import Link from "next/link";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";

// import Button from "../button/button";
// import AccountDropdown from "../accountDropdown/accountDropdown";
// import SearchBar from "../searchBar/searchBar";

import LoginButton from "../buttons/loginButton";
import NavbarDropdownLinks from "../navbarDropdownLinks/navbarDropdownlinks";
import AccountDropdown from "../accountDropdown/accountDropdown";

const BrowseNavbar = (props) => {
  const { navigation, loginButton, loginNavbar, browseNavbar } = props;

  let navItems;
  if (navigation) {
    navItems = (
      <div className={NavbarStyles.navbar__items}>
        <div className={NavbarStyles.navbar__links__container}>
          <div className={NavbarStyles.navbar__links__dropdown}>
            Explorar AiFillCaretDown
          </div>
          <div className={NavbarStyles.navbar__links__items}>
            <Link href="/browse">Inicio</Link>
            <Link href="/browse/series">Series</Link>
            <Link href="/browse/movies" activeClassName="selected">
              Películas
            </Link>
            <Link href="/browse/top">Novedades populares</Link>
          </div>
        </div>
        <div className={NavbarStyles.navbar__options_container}>
          SearchBar AccountDropdown
        </div>
      </div>
    );
  }

  /**
   *   let inputClass = classNames({
        navbar: true,
        login__navbar: loginNavbar,
        browse__navbar: browseNavbar,
      });
   */

  return (
    <nav className="px-%5 lg:px-14 md:px-11 h-11 md:h-16  z-10 absolute inset-x-0 top-0">
      <div className="flex flex-nowrap justify-between items-center h-full">
        <div className="relative h-full w-20 cursor-pointer">
          <Link href="/" passHref>
            <a>
              <Image
                layout="fill"
                objectFit="contain"
                src="/netflix-logo.png"
                alt="Netflix Logo"
              />
            </a>
          </Link>
        </div>
        <NavbarDropdownLinks />
        <AccountDropdown />
      </div>
    </nav>
  );
};

export default BrowseNavbar;
