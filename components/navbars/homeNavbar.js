import Link from "next/link";
import Image from "next/image";

import LoginButton from "../buttons/loginButton";

const HomeNavbar = () => {
  return (
    <nav className="px-%5 lg:px-14 md:px-11 h-24 z-10 absolute inset-x-0 top-0">
      <div className="relative flex flex-nowrap justify-between items-center h-full">
        <div className="relative h-full w-24 md:w-28 lg:w-32 cursor-pointer">
          <Link href="/" passHref>
            <Image
              layout="fill"
              objectFit="contain"
              src="/netflix-logo.png"
              alt="Netflix Logo"
            />
          </Link>
        </div>
        <Link href="/login" passHref>
          <LoginButton className="py-1 px-2 md:px-4 md:py-2 rounded">
            Iniciar sesion
          </LoginButton>
        </Link>
      </div>
    </nav>
  );
};

export default HomeNavbar;
