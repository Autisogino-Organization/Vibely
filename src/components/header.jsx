import "../styles/global.css"
import { IoIosLogIn } from "react-icons/io"
import { FaHome } from "react-icons/fa"

function Header() {
  return (
    <>
      <header className="hidden w-screen md:flex flex-col items-center text-center justify-start pl-10 pt-5 pr-10 text-gray-200 md:flex-row gap-5 md:items-center">
        <div className="flex items-center justify-center md:mr-20">
          <h1 className="text-2xl text-[#00c8ff] font-medium text-center">Noctis</h1>
        </div>

        <a
          href="/"
          className="flex flex-row gap-2 md:mr-5 text-gray-200 font-medium cursor-pointer p-2 rounded transition-all duration-200 transform hover:scale-110 hover:bg-[#1a1a1a] hover:shadow-lg"
        >
          {" "}
          <FaHome className="text-2xl text-[#00c8ff]" />
          Home
        </a>

        <div className="flex flex-row gap-5 ml-auto">
          <a
            href="/register"
            className="flex flex-row gap-2 text-gray-200 font-medium p-2 rounded-xl w-fit text-center cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-[#1a1a1a] hover:shadow-lg"
          >
            {" "}
            <IoIosLogIn className="text-2xl text-[#00c8ff]" />
            Sign up
          </a>
          <a
            href="/login"
            className="flex flex-row gap-2 text-gray-200 font-medium bg-[#0a0a0a] p-2 rounded-xl w-fit text-center cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-[#121212] hover:shadow-lg"
          >
            {" "}
            <IoIosLogIn className="text-2xl text-[#00c8ff]" />
            Sign in
          </a>
        </div>
      </header>
    </>
  )
}

export default Header

