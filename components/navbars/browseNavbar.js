import Link from "next/link";
import Image from "next/image";
import NavbarDropdownLinks from "../navbarDropdownLinks/navbarDropdownlinks";
import AccountDropdown from "../accountDropdown/accountDropdown";

const BrowseNavbar = () => {
  return (
    <nav className="bg-netflix-bg-gray px-%5 lg:px-14 md:px-11 h-11 md:h-16  z-10 absolute inset-x-0 top-0">
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
