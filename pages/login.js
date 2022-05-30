import Background from "../components/background/background";
import LoginNavbar from "../components/navbars/loginNavbar";
import Input from "../components/input/input";
import LoginButton from "../components/buttons/loginButton";
import Link from "next/link";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen py-12 px-[5%] bg-black">
      <Background className="hidden md:block" isZoomed />
      <LoginNavbar />
      <div className="relative w-full md:w-[460px] md:px-16 pt-14 pb-10 rounded bg-login-card">
        <h1 className="text-3xl font-bold mb-7 text-white">Inicia sesión</h1>
        <div className="overflow-hidden rounded mb-4 h-14">
          <Input type="text" id="email-input" label="Email" />
        </div>
        <div className="overflow-hidden rounded mb-4 h-14">
          <Input type="password" id="password-input" label="Contraseña" />
        </div>
        <Link href="/browse" passHref>
          <LoginButton className="mt-6 mb-1.5 h-12 w-full rounded font-bold">
            Iniciar sesion
          </LoginButton>
        </Link>
        <div className="flex justify-between items-center">
          <div>
            <input
              type="checkbox"
              id="rememberme-checkbox"
              className="mr-2.5"
            />
            <label
              htmlFor="rememberme-checkbox"
              className="text-gray-1 text-xs"
            >
              Recuérdame
            </label>
          </div>
          <a className="text-gray-1 text-xs">¿Necesitas ayuda?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
