import Header from "../components/header"
import Footer from "../components/footer"
import NavBar from "../components/navbar"
import "../styles/global.css"
import message from "../assets/message.svg"

function Landing() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <NavBar />
      <div className="fixed w-full h-full bg-[url('/background.jpg')] bg-cover bg-center mask-fade-bottom -z-10 grayscale"></div>
      <Header />
      <div className="flex flex-col items-center md:flex-row gap-10 md:gap-[70px] text-gray-200 p-10 mt-[35px] md:w-full">
        <span className="text-6xl break-words w-full md:w-[60%] order-2 md:order-1 text-center">
          Un chat para divertirte en grupo<span className="text-[#00c8ff]">.</span>
        </span>
        <img
          alt="message-logo"
          className="w-50 order-1 md:order-2"
          src={message || "/placeholder.svg"}
        ></img>
      </div>
      <Footer />
    </div>
  )
}

export default Landing

