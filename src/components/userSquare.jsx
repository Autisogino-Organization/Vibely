function UserSquare({ pfp, author, width, height }) {
    return (
      <div className=" grid grid-cols-[25px_1fr] grid-rows-[20px_1fr] relative text-white overflow-visible items-center cursor-pointer hover:bg-[#090909] rounded transition-all">
        <div
          className="rounded-full bg-blue-300 row-span-2 col-start-1 col-end-1 self-start bg-cover bg-center"
          style={{
            backgroundImage: `url("${pfp}")`,
            width: width,
            height: height,
          }}
        />
  
        <span className="text-[12px] row-span-2 col-start-2 col-end-2">
          {author}
        </span>
      </div>
    );
  }

  export default UserSquare;
  