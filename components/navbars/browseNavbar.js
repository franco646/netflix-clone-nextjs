import Link from "next/link";
import Image from "next/image";
import NavbarDropdownLinks from "../navbarDropdownLinks/navbarDropdownlinks";
import AccountDropdown from "../accountDropdown/accountDropdown";
import { useState, useEffect } from "react";

const BrowseNavbar = () => {
  const [wasScrolled, setWasScrolled] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY > 0) {
      setWasScrolled(true);
    } else {
      setWasScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => window.removeEventListener("scroll", changeNavbarColor);
  });

  return (
    <nav
      className={`${
        wasScrolled ? "bg-navbar" : "bg-navbar-gradient"
      } px-%5 lg:px-14 md:px-11 h-11 md:h-16  z-10 fixed inset-x-0 top-0 duration-500`}
    >
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
