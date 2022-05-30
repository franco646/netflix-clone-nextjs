import Link from "next/link";

import LoginButton from "../buttons/loginButton";
import Input from "../input/input";

const EmailForm = ({ ...otherProps }) => {
  return (
    <form {...otherProps}>
      <div className="h-12 md:h-16 w-full">
        <Input type="text" id="email-input" label="Email" />
      </div>
      <Link href="/login" passHref>
        <LoginButton className="h-12 sm:h-16 w-1/4 min-w-min p-3 text-xs sm:text-2xl mt-3.5 md:mt-0">
          Comenzar {">"}
        </LoginButton>
      </Link>
    </form>
  );
};

export default EmailForm;
