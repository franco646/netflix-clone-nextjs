import { connect } from "react-redux";

import LoginNavbar from "../navbars/loginNavbar";
import Profile from "../profile/profile";

const ProfileSelector = ({ user }) => {
  return (
    <div>
      <LoginNavbar />
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <h1 className="text-[30px] lg:text-[3.5vw] text-white my-[.67em]">
          ¿Quién está viendo ahora?
        </h1>
        <div className="my-[2em] flex">
          {user?.profiles?.map((profile, i) => (
            <div className="mr-[2vw]" key={i}>
              <Profile profile={profile} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(ProfileSelector);
