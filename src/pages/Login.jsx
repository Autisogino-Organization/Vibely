"use client"

import { useState } from "react"
import Header from "../components/header"
import NavBar from "../components/navbar"
import "../styles/global.css"
import eyeOpen from "../assets/eye-open.svg"
import eyeClose from "../assets/eye-close.svg"

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible)
  }

  return (
    <div className="flex flex-col text-gray-200 min-h-screen relative">
      <NavBar />
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/background.jpg')] bg-cover bg-center mask-fade-bottom -z-10 grayscale"></div>
      <Header />
      <div className="flex flex-col items-center text-start gap-5 box-border relative justify-center align-middle scale-90 mt-10">
        <h1 className="">Bienvenido</h1>
        <h1 className="text-5xl text-nowrap md:text-6xl">
          Inicia sesion<span className="text-[#00c8ff] font-semibold">.</span>
        </h1>
        <form className="grid grid-cols-2 w-full md:w-[500px] gap-2 box-border">
          <span className="col-span-2 text-center text-[#00c8ff] font-semibold p-1">
            Correo o contrasenha incorrecta.
          </span>
          <div className="bg-[#1a1a1a] border-[#121212] border-2 rounded-xl p-2 outline-none focus-within:border-[#00c8ff] shadow-xl">
            <span className="text-[#00c8ff] text-[12px] font-semibold text-center">Correo electronico</span>
            <input
              className="bg-transparent outline-none focus:outline-[#00c8ff] w-full text-gray-200"
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="relative grid grid-cols-[2fr_2fr_1fr] grid-rows-2 bg-[#1a1a1a] border-[#121212] border-2 rounded-xl p-2 outline-none focus-within:border-[#00c8ff] shadow-xl">
            <span className="text-[#00c8ff] text-[12px] font-semibold col-span-2 row-start-1 self-center">
              Contrasenha
            </span>
            <input
              className="bg-transparent outline-none focus:outline-[#00c8ff] w-[90%] col-span-2 row-start-2 text-gray-200"
              type={passwordVisible ? "text" : "password"}
              placeholder="!example123"
            />
            <img
              alt="eye"
              className="w-7 cursor-pointer col-start-3 col-span-2 row-span-2 self-center place-self-end hover:scale-110 transition"
              onClick={togglePasswordVisibility}
              src={passwordVisible ? eyeOpen : eyeClose}
            ></img>
          </div>

          <button
            className="bg-[#0a0a0a] border-[#121212] border-2 rounded-xl p-2 col-span-2 transition-all duration-200 transform hover:bg-[#121212] hover:border-[#00c8ff] cursor-pointer shadow-xl"
            type="submit"
          >
            Iniciar sesion
          </button>
        </form>
        <h1>
          No tienes una cuenta?{" "}
          <a className="font-semibold underline text-[#00c8ff] hover:text-[#33d6ff] transition" href="/register">
            Registrate
          </a>
        </h1>
      </div>
    </div>
  )
}

export default Login

