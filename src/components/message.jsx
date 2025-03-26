import { useState, useEffect } from "react";

const JSONAPIKEY = process.env.JSONAPI;

function Message({ pfp, author, message }) {
  const [linkPreviews, setLinkPreviews] = useState({});

  const fetchMetadata = async (url) => {
    if (linkPreviews[url]) return;
    try {
      const res = await fetch(`https://jsonlink.io/api/extract?url=${encodeURIComponent(url)}&api_key=${JSONAPIKEY}`);
      const json = await res.json();
      setLinkPreviews((prev) => ({ ...prev, [url]: json }));
    } catch (err) {
      console.error("Error cargando metadatos:", err);
    }
  };

  const formatMessage = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (urlRegex.test(part)) {
        fetchMetadata(part);

        if (part.includes("youtube.com/shorts")) {
          const videoId = part.match(/shorts\/([\w-]+)/)?.[1];
          return videoId ? (
            <iframe
              key={index}
              width="315"
              height="560"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Shorts player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg mt-2"
            ></iframe>
          ) : (
            <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-[#00c8ff] underline">
              {part}
            </a>
          );
        }

        if (part.includes("youtube.com/watch") || part.includes("youtu.be")) {
          const videoId = part.match(/(?:v=|youtu\.be\/)([\w-]+)/)?.[1];
          return videoId ? (
            <iframe
              key={index}
              width="300"
              height="180"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="rounded-lg mt-2"
            ></iframe>
          ) : (
            <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-[#00c8ff] underline">
              {part}
            </a>
          );
        }

        const data = linkPreviews[part];
        return data ? (
          <div key={index} className="border border-[#00c8ff] rounded-lg p-2 bg-[#121212] mt-2 w-[300px] text-gray-300">
            <a href={part} target="_blank" rel="noopener noreferrer" className="block font-semibold text-[#00c8ff] hover:text-[#00e1ff]">
              {data.title || part}
            </a>
            {data.description && <p className="text-sm">{data.description}</p>}
            {data.images?.length > 0 && <img src={data.images[0]} alt="preview" className="w-full mt-1 rounded" />}
          </div>
        ) : (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-[#00c8ff] underline">
            {part}
          </a>
        );
      }

      return part;
    });
  };

  return (
    <div
      className="grid grid-cols-[auto_1fr] grid-rows-auto relative w-full max-w-full h-fit place-items-start items-center text-white overflow-hidden
        break-words"
    >
      <div
        className="w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px] rounded-full bg-blue-300 col-start-1 col-end-1 row-span-2 self-start bg-cover bg-center
          mr-2"
        style={{
          backgroundImage: `url("${pfp}")`,
        }}
      />

      <span className="font-semibold col-start-2 col-end-2 row-start-1 row-end-1 text-[12px] 2xl:text-[20px]">
        {author} <span className="text-[10px] font-light text-[#a7a7a7] pl-1">hace 1 min</span>
      </span>
      <span className="col-start-2 col-end-2 row-start-2 row-end-2 h-fit w-full text-[10px] 2xl:text-[15px] overflow-hidden">
        {formatMessage(message)}
      </span>
    </div>
  );
}

export default Message;
