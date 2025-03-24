import { useState } from "react";
import Header from "../components/header";
import NavBar from "../components/navbar";
import "../styles/global.css";
import eyeOpen from "../assets/eye-open.svg";
import eyeClose from "../assets/eye-close.svg";
import { IoMenu } from "react-icons/io5";

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col text-white min-h-screen relative">
      <NavBar />
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/background.jpg')] bg-cover bg-center mask-fade-bottom -z-10"></div>
      <Header/>
      <div className="flex flex-col items-center text-start gap-5 box-border relative justify-center align-middle scale-90 mt-10">
        <h1 className="">Bienvenido</h1>
        <h1 className="text-5xl text-nowrap md:text-6xl">
          Inicia sesion<span className="text-blue-700 font-semibold">.</span>
        </h1>
        <form className="grid grid-cols-2 w-full md:w-[500px] gap-2 box-border">
          <span className="col-span-2 text-center text-blue-900 font-semibold p-1">
            Correo o contrasenha incorrecta.
          </span>
          <div className="bg-[#7eb0e9] border-[#48535f1e] border-2 rounded-xl p-2 outline-none focus:outline-blue-500 shadow-xl">
            <span className="text-blue-900 text-[12px] font-semibold text-center">
              Correo electronico
            </span>
            <input
              className="outline-none focus:outline-blue-500 w-full"
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="relative grid grid-cols-[2fr_2fr_1fr] grid-rows-2 bg-[#7eb0e9] border-[#48535f1e] border-2  rounded-xl p-2 outline-none focus:outline-blue-500 shadow-xl">
            <span className="text-blue-900 text-[12px] font-semibold col-span-2 row-start-1 self-center">
              Contrasenha
            </span>
            <input
              className="outline-none focus:outline-blue-500 w-[90%] col-span-2 row-start-2"
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
            className="bg-[#407cc2] border-[#48535f1e] border-2  rounded-xl p-2 col-span-2 transition-all duration-200 transform hover:bg-blue-400 cursor-pointer shadow-xl"
            type="submit"
          >
            Iniciar sesion
          </button>
        </form>
        <h1>
          No tienes una cuenta?{" "}
          <a className="font-semibold underline text-[#6aa3e4] hover:text-[#82bcff] transition" href="/register">
            Registrate
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Login;
