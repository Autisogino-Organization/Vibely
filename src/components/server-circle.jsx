import { useState } from "react";

function ServerCircle({ pfp, name }) {
  const [hovered, setHovered] = useState(false);

  function handleHover() {
    setHovered(!hovered);
  }

  return (
    <div className="flex flex-row relative justify-center items-center">
      <div
        className="w-[50px] h-[50px] bg-cover bg-center server-circle "
        onPointerEnter={handleHover}
        onPointerLeave={handleHover}
        style={{
          backgroundImage: `url("${pfp}")`,
        }}
      >
        <span className={`bg-[#093e77] text-white text-[13px] text-center absolute left-[55px] top-1/2 -translate-y-1/2 p-2 rounded ${
          hovered ? "block" : "hidden"}`}>
          {name}
        </span>

        <span className={`bg-[#ffffff] text-white w-[2px] h-[20px] text-center absolute left-[-10px] top-1/2 -translate-y-1/2 rounded ${
          hovered ? "block" : "hidden"}`}>
        </span>
        <style jsx>{`
          .server-circle {
            border-radius: 50%;
            transition: border-radius 0.2s ease-in-out;
          }
          .server-circle:hover {
            border-radius: 0.75rem;
          }
        `}</style>
      </div>
    </div>
  );
}

export default ServerCircle;
