import Link from "next/link";

const NavbarLink = ({ href, children }) => {
  return (
    <Link href={href} passHref>
      <div className="text-gray-2 lg:hover:text-gray-1 cursor-pointer lg:ml-4 text-sm lg:py-0 lg:px-0 py-3 px-4 hover:bg-gray-4 lg:hover:bg-inherit leading-7">
        {children}
      </div>
    </Link>
  );
};

export default NavbarLink;
