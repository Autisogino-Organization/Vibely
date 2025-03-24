import { useState } from "react";
import Header from "../components/header";
import "../styles/global.css";
import { BiMenu, BiMenuAltLeft } from "react-icons/bi";
import { IoIosLogIn } from "react-icons/io";
import { FaHome } from "react-icons/fa";

function Login() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  const toggleNavbarVisibility = () => {
    setNavbarVisible(!navbarVisible);
    console.log(navbarVisible);
  };

  return (
    <div className="flex md:hidden">
      <div className="flex flex-col gap-20 text-white relative m-5 z-15">
        {navbarVisible ? (
          <BiMenuAltLeft
            className="text-4xl text-white cursor-pointer"
            onClick={toggleNavbarVisibility}
          />
        ) : (
          <BiMenu
            className="text-4xl text-white cursor-pointer"
            onClick={toggleNavbarVisibility}
          />
        )}
      </div>

      <div
        className={`absolute flex flex-col justify-start items-center pt-20 gap-3 text-white bg-[#569bfe] h-screen w-40 z-10 transition-all duration-200 ${
          navbarVisible ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex items-start justify-center md:mr-20">
          <h1 className="text-2xl text-star-white font-medium text-center">
            Noctis
          </h1>
        </div>

        <a
          href="/"
          className="flex flex-row gap-2 md:mr-5 text-star-white font-medium bg-blue-500 w-[85%] p-2 cursor-pointer rounded-xl transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        > <FaHome className="text-2xl text-white" />
          Home
        </a>

        <a
          href="/register"
          className="flex flex-row gap-2 text-star-white font-medium bg-blue-500 w-[85%] p-2 rounded-xl w-25 cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        > <IoIosLogIn className="text-2xl text-white" />
          Sign up
        </a>
        <a
          href="/login"
          className="flex flex-row gap-2 text-star-white font-medium bg-blue-600 w-[85%] p-2 rounded-xl w-25 text-start cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
        > <IoIosLogIn className="text-2xl text-white" />
          Sign in
        </a>
      </div>
    </div>
  );
}

export default Login;
