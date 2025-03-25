function Message({ pfp, author, message }) {
    return (
      <div className="grid grid-cols-[40px_1fr] grid-rows-auto relative w-[90%] h-fit place-items-start items-center text-white overflow-visible">
        <div
          className="rounded-full bg-blue-300 col-start-1 col-end-1 row-span-2 self-start bg-cover bg-center"
          style={{
            backgroundImage: `url("${pfp}")`,
            width: "30px",
            height: "30px",
          }}
        />
  
        <span className="font-bold col-start-2 col-end-2 row-start-1 row-end-1 text-[12px]">
          {author} <span className="text-[10px] font-light text-gray-800 pl-1">hace 1 min</span>
        </span>
        <span className="col-start-2 col-end-2 row-start-2 row-end-2 h-fit w-full text-[10px]">
          {message}
        </span>
      </div>
    );
  }
  
  export default Message;
  