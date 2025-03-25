import "../styles/global.css"
import { FaSquareXTwitter, FaSquareGithub, FaSquareInstagram, FaSquareFacebook } from "react-icons/fa6"

function Footer() {
  return (
    <>
      <footer className="relative flex flex-col items-center justify-center w-full pt-10 text-gray-200 min-h-[150px]">
        <div className="flex flex-row gap-1 text-4xl">
          <FaSquareXTwitter className="text-[#00c8ff] font-medium hover:scale-110 transition cursor-pointer" />
          <FaSquareGithub className="text-[#00c8ff] font-medium hover:scale-110 transition cursor-pointer" />
          <FaSquareInstagram className="text-[#00c8ff] font-medium hover:scale-110 transition cursor-pointer" />
          <FaSquareFacebook className="text-[#00c8ff] font-medium hover:scale-110 transition cursor-pointer" />
        </div>

        <span className="w-full text-center flex justify-center items-center">Todos los derechos reservados. 2025</span>

        <div className="bg-[#0a0a0a] absolute inset-0 -z-10 mask-fade-top"></div>
      </footer>
    </>
  )
}

export default Footer

