import Image from "next/image";

import { connect } from "react-redux";

import { userSelectProfile } from "../../redux/actions/user.actions";

const Profile = ({ profile, selectProfile }) => {
  const handleSelectProfile = () => {
    console.log("perfil selecionado");
    selectProfile(profile);
  };

  return (
    <div
      className="flex flex-col text-center text-[#808080] hover:text-[#e5e5e5] hover:cursor-pointer"
      onClick={handleSelectProfile}
    >
      <div className="relative max-w-[200px] min-w-[84px] min-h-[84px] w-[10vw] h-[10vw] rounded overflow-hidden outline-[#e5e5e5] hover:outline hover:outline-[.3em]">
        <Image
          src={profile.picture}
          layout="fill"
          objectfit="contain"
          alt="profile picture"
        />
      </div>
      <span className="my-[.6em]">{profile.name}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  selectProfile: (profile) => dispatch(userSelectProfile(profile)),
});

export default connect(null, mapDispatchToProps)(Profile);
