import "../styles/global.css";

function Header() {
  return (
    <>
      <header className="w-screen flex flex-col items-center text-center justify-start pl-15 pt-10 pr-15 text-white md:flex-row gap-5 md:items-center">
        <div className="flex items-center justify-center md:mr-20">
          <h1 className="text-2xl text-star-white font-medium text-center">
            Noctis
          </h1>
        </div>

        <a
          href="/"
          className="md:mr-5 text-star-white font-medium cursor-pointer p-2 rounded transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        >
          Home
        </a>
        <a
          href="/about"
          className="md:mr-auto text-star-white font-medium cursor-pointer p-2 rounded transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        >
          About
        </a>

        <a
          href="/register"
          className="text-star-white font-medium bg-[] p-2 rounded-xl w-25 text-center cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-blue-400 hover:shadow-lg"
        >
          Sign up
        </a>
        <a
          href="/login"
          className="text-star-white font-medium bg-blue-600 p-2 rounded-xl w-25 text-center cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-blue-500 hover:shadow-lg"
        >
          Sign in
        </a>
      </header>
    </>
  );
}

export default Header;
