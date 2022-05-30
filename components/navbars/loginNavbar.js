import Link from "next/link";
import Image from "next/image";

const LoginNavbar = () => {
  return (
    <nav className="px-%5 lg:px-14 md:px-11 h-11 sm:h-24 z-10 absolute inset-x-0 top-0">
      <div className="flex flex-nowrap justify-between items-center h-full">
        <div className="relative h-full w-20 sm:w-44 cursor-pointer">
          <Link href="/" passHref>
            <Image
              layout="fill"
              objectFit="contain"
              src="/netflix-logo.png"
              alt="Netflix Logo"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default LoginNavbar;
