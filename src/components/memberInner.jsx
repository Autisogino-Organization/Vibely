function MembersGroup({ pfp, author }) {
    return (
      <div className="grid grid-cols-[40px_1fr] grid-rows-[20px_1fr] relative w-[90%] text-white overflow-visible items-center cursor-pointer hover:bg-[#090909] p-2 rounded transition-all">
        <div
          className="rounded-full bg-blue-300 col-start-1 col-end-1 self-start bg-cover bg-center"
          style={{
            backgroundImage: `url("${pfp}")`,
            width: "35px",
            height: "35px",
          }}
        />
  
        <span className="text-[12px] row-start-1 row-end-1 col-start-2 col-end-2">
          {author}
        </span>
        <span className="text-[10px] row-start-2 row-end-2 col-start-2 col-end-2 text-[#a7a7a7]">
          Jugando a algo
        </span>
      </div>
    );
  }

  export default MembersGroup;
  