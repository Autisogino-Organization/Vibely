import { useState } from "react";
import Header from "../components/header";
import "../styles/global.css";
import { IoMenu } from "react-icons/io5";

function Login() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbarVisibility = () => {
    setNavbarVisible(!navbarVisible);
    console.log(navbarVisible);
  };

  return (
    <div className="flex md:hidden">
      <div className="flex flex-col gap-20 text-white relative m-5 z-15">
        <IoMenu
          className="text-4xl text-white"
          onClick={toggleNavbarVisibility}
        />
      </div>

      <div className={`absolute flex flex-col justify-start items-start pt-15 gap-3 pl-5 text-white bg-[#476281] h-screen w-30 z-10 transition-all duration-200 ${navbarVisible ? "left-0" : "-left-full"}`}>
        <div className="flex items-start justify-center md:mr-20">
          <h1 className="text-2xl text-star-white font-medium text-center">
            Noctis
          </h1>
        </div>

        <a
          href="/"
          className="md:mr-5 text-star-white font-medium cursor-pointer rounded transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        >
          Home
        </a>
        <a
          href="/about"
          className="md:mr-auto text-star-white font-medium cursor-pointer rounded transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        >
          About
        </a>

        <a
          href="/register"
          className="text-star-white font-medium rounded-xl w-25 cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        >
          Sign up
        </a>
        <a
          href="/login"
          className="text-star-white font-medium bg-blue-600 w-fit p-2 rounded-xl w-25 text-center cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
        >
          Sign in
        </a>
      </div>
    </div>
  );
}

export default Login;
