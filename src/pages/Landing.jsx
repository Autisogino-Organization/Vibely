import Header from "../components/header";
import "../styles/global.css";

function Landing() {
  return (
    <>
      <div className="flex absolute w-full h-full bg-[url('/background.jpg')] bg-cover bg-center mask-fade-bottom"></div>
      <Header />
      <div className="flex absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Landing</div>
    </>
  );
}

export default Landing;
