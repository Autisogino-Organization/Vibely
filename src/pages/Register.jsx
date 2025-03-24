import { useState } from "react";
import Header from "../components/header";
import NavBar from "../components/navbar";
import "../styles/global.css";
import eyeOpen from "../assets/eye-open.svg";
import eyeClose from "../assets/eye-close.svg";

function Register() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col gap-0 text-white min-h-screen relative">
      <NavBar />
      <div className="fixed top-0 left-0 w-full h-full bg-[url('/background.jpg')] bg-cover bg-center mask-fade-bottom -z-10"></div>
      <Header />
      <div className="flex flex-col items-center text-start gap-5 relative justify-center align-middle scale-90">
        <h1 className="text-5xl text-nowrap md:text-6xl">
          Registrate<span className="text-blue-700 font-semibold">.</span>
        </h1>
        <form className="grid grid-cols-2 w-full md:w-[500px] gap-2 box-border">
          <span className="col-span-2 text-center text-blue-900 font-semibold p-1">
            Correo o contrasenha incorrecta.
          </span>
          <div className="bg-[#7eb0e9] border-[#48535f1e] border-2  rounded-xl p-2 outline-none focus:outline-blue-500 col-span-2 shadow-xl">
            <span className="text-blue-900 text-[12px] font-semibold text-center">
              Usuario *
            </span>
            <input
              className="outline-none focus:outline-blue-500 w-full"
              type="text"
              placeholder="example"
            />
          </div>
          <div className="bg-[#7eb0e9] border-[#48535f1e] border-2 rounded-xl p-2 outline-none focus:outline-blue-500 shadow-xl">
            <span className="text-blue-900 text-[12px] font-semibold text-center">
              Correo electronico *
            </span>
            <input
              className="outline-none focus:outline-blue-500 w-full"
              type="email"
              placeholder="example@example.com"
            />
          </div>
          <div className="relative grid grid-cols-[2fr_2fr_1fr] grid-rows-2 bg-[#7eb0e9] border-[#48535f1e] border-2  rounded-xl p-2 outline-none focus:outline-blue-500 shadow-xl">
            <span className="text-blue-900 text-[12px] font-semibold col-span-2 row-start-1 self-center">
              Contrasenha *
            </span>
            <input
              className="outline-none focus:outline-blue-500 w-[90%] col-span-2 row-start-2"
              type={passwordVisible ? "text" : "password"}
              placeholder="!example123"
            />
            <img
              alt="eye"
              className="w-7 cursor-pointer col-start-3 col-span-2 row-span-2 self-center place-self-end"
              onClick={togglePasswordVisibility}
              src={passwordVisible ? eyeOpen : eyeClose}
            ></img>
          </div>
          <div className="grid grid-cols-3 gap-2 grid-rows-[15px] place-items-center place-content-center col-span-2 bg-[#7eb0e9] border-[#48535f1e] border-2  rounded-xl p-2 shadow-xl">
            <span className="text-blue-900 text-[12px] font-semibold text-start col-span-3 place-self-start">
              Fecha de nacimiento *
            </span>

            <div className="flex flex-row bg-[#407cc2] border-[#48535f1e] border-2  p-2 box-border gap-2 w-full justify-center align-middle rounded">
              <span>Dia</span>
              <input
                className="outline-none focus:outline-blue-500 w-5"
                type="email"
                placeholder="00"
              />
            </div>
            <div className="flex flex-row bg-[#407cc2] border-[#48535f1e] border-2  p-2 box-border gap-2 w-full justify-center align-middle rounded">
              <span>Mes</span>
              <input
                className="outline-none focus:outline-blue-500 w-5"
                type="email"
                placeholder="00"
              />
            </div>
            <div className="flex flex-row bg-[#407cc2] border-[#48535f1e] border-2  p-2 box-border gap-2 w-full justify-center align-middle rounded">
              <span>Anho</span>
              <input
                className="outline-none focus:outline-blue-500 w-10"
                type="email"
                placeholder="00"
              />
            </div>
          </div>

          <button
            className="bg-[#407cc2] border-[#48535f1e] border-2 rounded-xl p-2 col-span-2 transition-all duration-200 transform hover:bg-blue-400 shadow-xl cursor-pointer"
            type="submit"
          >
            Registrarse
          </button>
        </form>
        <h1 className="text-[10px] -mt-3">
          Al registrarse acepta los{" "}
          <a className="text-blue-800 underline" href="/">
            terminos y condiciones
          </a>{" "}
          de Noctis
        </h1>
        <h1 className="-mt-3">
          Ya tienes una cuenta?{" "}
          <a className="font-semibold underline text-blue-700" href="/register">
            Inicia sesion
          </a>
        </h1>
      </div>
    </div>
  );
}

export default Register;
