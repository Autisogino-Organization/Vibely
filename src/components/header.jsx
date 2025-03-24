import "../styles/global.css";
import { IoIosLogIn } from "react-icons/io";
import { FaHome } from "react-icons/fa";

function Header() {
  return (
    <>
      <header className="hidden w-screen md:flex flex-col items-center text-center justify-start pl-10 pt-5 pr-10 text-white md:flex-row gap-5 md:items-center">
        <div className="flex items-center justify-center md:mr-20">
          <h1 className="text-2xl text-star-white font-medium text-center">
            Noctis
          </h1>
        </div>

        <a
          href="/"
          className="flex flex-row gap-2 md:mr-5 text-star-white font-medium cursor-pointer p-2 rounded transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        > <FaHome className="text-2xl text-white" />
          Home
        </a>

        <div className="flex flex-row gap-5 ml-auto">
        <a
          href="/register"
          className="flex flex-row gap-2 text-star-white font-medium p-2 rounded-xl w-fit text-center cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        > <IoIosLogIn className="text-2xl text-white" />
          Sign up
        </a>
        <a
          href="/login"
          className="flex flex-row gap-2  text-star-white font-medium bg-blue-600 p-2 rounded-xl w-fit text-center cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
        > <IoIosLogIn className="text-2xl text-white" />
          Sign in
        </a>
        </div>
        
      </header>
    </>
  );
}

export default Header;
