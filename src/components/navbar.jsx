"use client"

import { useState } from "react"
import "../styles/global.css"
import { BiMenu, BiMenuAltLeft } from "react-icons/bi"
import { IoIosLogIn } from "react-icons/io"
import { FaHome } from "react-icons/fa"

function NavBar() {
  const [navbarVisible, setNavbarVisible] = useState(false)

  const toggleNavbarVisibility = () => {
    setNavbarVisible(!navbarVisible)
    console.log(navbarVisible)
  }

  return (
    <div className="flex md:hidden">
      <div className="flex flex-col gap-20 text-gray-200 relative m-5 z-15">
        {navbarVisible ? (
          <BiMenuAltLeft className="text-4xl text-gray-200 cursor-pointer" onClick={toggleNavbarVisibility} />
        ) : (
          <BiMenu className="text-4xl text-gray-200 cursor-pointer" onClick={toggleNavbarVisibility} />
        )}
      </div>

      <div
        className={`absolute flex flex-col justify-start items-center pt-20 gap-3 text-gray-200 bg-[#0f0f0f] h-screen w-40 z-10 transition-all duration-200 ${
          navbarVisible ? "left-0" : "-left-full"
        }`}
      >
        <div className="flex items-start justify-center md:mr-20">
          <h1 className="text-2xl text-[#00c8ff] font-medium text-center">Noctis</h1>
        </div>

        <a
          href="/"
          className="flex flex-row gap-2 md:mr-5 text-gray-200 font-medium bg-[#1a1a1a] w-[85%] p-2 cursor-pointer rounded-xl transition-all duration-200 transform hover:scale-110 hover:bg-[#121212] hover:shadow-lg"
        >
          {" "}
          <FaHome className="text-2xl text-[#00c8ff]" />
          Home
        </a>

        <a
          href="/register"
          className="flex flex-row gap-2 text-gray-200 font-medium bg-[#1a1a1a] w-[85%] p-2 rounded-xl w-25 cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-[#121212] hover:shadow-lg"
        >
          {" "}
          <IoIosLogIn className="text-2xl text-[#00c8ff]" />
          Sign up
        </a>
        <a
          href="/login"
          className="flex flex-row gap-2 text-gray-200 font-medium bg-[#0a0a0a] w-[85%] p-2 rounded-xl w-25 text-start cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-[#121212] hover:shadow-lg"
        >
          {" "}
          <IoIosLogIn className="text-2xl text-[#00c8ff]" />
          Sign in
        </a>
      </div>
    </div>
  )
}

export default NavBar

