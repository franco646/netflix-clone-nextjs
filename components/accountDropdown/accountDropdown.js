import { AiFillCaretDown } from "react-icons/ai";

import { connect } from "react-redux";

import {
  userLogout,
  userSelectProfile,
} from "../../redux/actions/user.actions";

import ProfilePicture from "../profilePicture/profilePicture";

const AccountDropdown = ({ user, logout, selectProfile }) => {
  return (
    <div className="group">
      <div className="flex">
        <ProfilePicture src={user?.selectedProfile?.picture} />
        <AiFillCaretDown className="relative ml-1 text-white h-8 group-hover:rotate-180 duration-150" />
      </div>
      <div className="invisible group-hover:visible absolute right-%5 lg:right-14 md:right-11 py-2.5 leading-8 border-gray-3 delay-100  text-sm border-[1px] min-w-[180px] bg-login-card top-[52px]">
        {user?.profiles
          .filter((profile) => profile.id !== user.selectedProfile.id)
          .map((profile, i) => (
            <div
              className="flex p-1.5 cursor-pointer"
              key={i}
              onClick={() => selectProfile(profile)}
            >
              <ProfilePicture src={profile.picture} />
              <div className="text-white ml-2.5 hover:underline">
                {profile.name}
              </div>
            </div>
          ))}
        <hr className="my-2" />
        <div
          className="text-white hover:underline cursor-pointer leading-3 text-center"
          onClick={logout}
        >
          Cerrar sesión en Netflix
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(userLogout()),
  selectProfile: (profile) => dispatch(userSelectProfile(profile)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AccountDropdown);
