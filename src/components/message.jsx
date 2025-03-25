function Message({ pfp, author, message }) {
    return (
      <div className="grid grid-cols-[auto_1fr] grid-rows-auto relative w-[90%] h-fit place-items-start items-center text-white overflow-visible">
        <div
          className="w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px] rounded-full bg-blue-300 col-start-1 col-end-1 row-span-2 self-start bg-cover bg-center mr-2"
          style={{
            backgroundImage: `url("${pfp}")`
          }}
        />
  
        <span className="font-bold col-start-2 col-end-2 row-start-1 row-end-1 text-[15px] 2xl:text-[20px]">
          {author} <span className="text-[10px] font-light text-[#a7a7a7] pl-1">hace 1 min</span>
        </span>
        <span className="col-start-2 col-end-2 row-start-2 row-end-2 h-fit w-full text-[12px] 2xl:text-[15px]">
          {message}
        </span>
      </div>
    );
  }
  
  export default Message;
  