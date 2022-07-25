import { AiFillCaretDown } from "react-icons/ai";

import ProfilePicture from "../profilePicture/profilePicture";

const AccountDropdown = ({}) => {
  return (
    <div className="group">
      <div className="flex">
        <ProfilePicture src="/profile-picture-1.png" />
        <AiFillCaretDown className="relative ml-1 text-white h-8 group-hover:rotate-180 duration-150" />
      </div>
      <div className="hidden group-hover:block group-hover:absolute right-%5 lg:right-14 md:right-11 py-2.5 leading-8 border-gray-3  text-sm border-[1px] min-w-[180px] bg-login-card">
        <div className="flex p-1.5 cursor-pointer">
          <ProfilePicture src="/profile-picture-1.png" />
          <div className="text-white ml-2.5 hover:underline">primer</div>
        </div>
        <div className="flex p-1.5 cursor-pointer">
          <ProfilePicture src="/profile-picture-2.png" />
          <div className="text-white ml-2.5 hover:underline">Franco</div>
        </div>
        <div className="flex p-1.5 cursor-pointer">
          <ProfilePicture src="/profile-picture-3.png" />
          <div className="text-white ml-2.5 hover:underline">segundo</div>
        </div>
        <hr className="my-2" />
        <div className="text-white hover:underline cursor-pointer leading-3 text-center">
          Cerrar sesión en Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
