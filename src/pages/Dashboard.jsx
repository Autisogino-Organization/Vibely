"use client";

import { useState, useEffect } from "react";
import Message from "../components/message";
import MembersGroup from "../components/membersGroup";
import MembersInner from "../components/memberInner";
import ServerCircle from "../components/server-circle";
import UserSquare from "../components/userSquare";
import { FaHeadphones, FaMicrophone, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { FaThumbtack, FaFaceSmile } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoVideocam, IoAddCircle, IoAddOutline, IoSend } from "react-icons/io5";
import { MdGifBox, MdPeople } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const gacc =
  "https://images-ext-1.discordapp.net/external/ZZVZlX8hJvqmvT-FxUWQzxjK0HRwJeDdocyY1nFGfUI/%3Fsize%3D512/https/cdn.discordapp.com/avatars/838793520554442752/eda3b21d9bef5e6f78f6198bac4ac9cf.png?format=webp&quality=lossless&width=172&height=172";
const safe =
  "https://images-ext-1.discordapp.net/external/8E859V6oMI1MYX_9Hi4uDt1vAhrU_xfXb4QHI3Qxofs/%3Fsize%3D512/https/cdn.discordapp.com/avatars/778788944024043540/6c1457c13793d3fe3d2cc650e27b04ba.png?format=webp&quality=lossless&width=172&height=172";
const keven =
  "https://images-ext-1.discordapp.net/external/hcm5ZAl_ouNLQ2inH8JvHv0WB7PFCC1YDxO4BsuuOmQ/%3Fsize%3D512/https/cdn.discordapp.com/avatars/1287258677706883183/74fb24296c29ea39a63899122c5e1811.png?format=webp&quality=lossless&width=343&height=343";

const serverpfp =
  "https://media.discordapp.net/attachments/1296138265879117886/1353968261921771530/545ccd4bd79ea589f3baaf94b8dbd8a0.png?ex=67e394b5&is=67e24335&hm=e05a69344e9eb4ae39eb245cc57a6bd9ceed563bcd95ae4c224a083805b68eab&=&format=webp&quality=lossless&width=268&height=268";

const members = [
  {
    pfp: safe,
    author: "Safe",
  },
  {
    pfp: gacc,
    author: "gacc_15",
  },
  {
    pfp: keven,
    author: "! IrregularDev",
  },
];

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [leftContainer, setLeftContainer] = useState(false);

  const handleLeftContainerOpen = () => {
    setLeftContainer(!leftContainer);
  };

  useEffect(() => {
    console.log("asd");
    const chatDiv = document.getElementById("chat");
    if (chatDiv) chatDiv.scrollTop = chatDiv.scrollHeight;
  }, [messages]);

  const handleSendMessage = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      setMessages([...messages, e.target.value]);
      e.target.value = "";
    }
  };

  const handleSendMessageBtn = (type) => {
    if (type === "desktop") {
      const msg_inp = document.getElementById("msg-input-desktop");

      if (msg_inp.value.trim() !== "") {
        setMessages([...messages, msg_inp.value]);
        msg_inp.value = "";
      }
    } else {
      const msg_inp = document.getElementById("msg-input-mobile");

      console.log(msg_inp)

      if (msg_inp.value.trim() !== "") {
        setMessages([...messages, msg_inp.value]);
        msg_inp.value = "";
      }
    }
  };

  return (
    <div className="min-h-screen h-screen relative overflow-hidden">
      {/* Main container with fixed positioning for desktop */}
      <div
        className={`md:grid md:grid-cols-[70px_2fr_8fr_5fr] lg:grid-cols-[70px_2fr_8fr_3fr] xl:grid-cols-[70px_2fr_8fr_2fr]
          2xl:grid-cols-[70px_2fr_8fr_1fr] md:grid-rows-[35px_8fr_2fr_0.5fr] 2xl:grid-rows-[35px_8fr_2fr_0.5fr] h-full`}
      >
        {/* Servers section - desktop only */}
        <div className="hidden md:flex bg-[#0a0a0a] md:row-start-1 md:row-end-5 flex-col items-center pt-2 gap-2" id="servers-desktop">
          <ServerCircle pfp={serverpfp} name="Autisofino" />
          <ServerCircle pfp={serverpfp} name="Autisofino" />
        </div>

        {/* Friends section - desktop only */}
        <div className="hidden md:block bg-[#121212] md:row-start-1 md:row-end-4" id="friends-desktop">
          <div className="bg-[#171717] w-full h-10 rounded gap-2 flex flex-row items-center self-center p-2">
            <input className="w-full h-6 rounded bg-[#0a0a0a] outline-none text-gray-200 text-[10px] p-2" placeholder="Buscar"></input>
          </div>
          <div className="flex flex-row gap-2 items-center pl-2 pr-2 text-gray-300 m-2 hover:bg-[#00c8ff] transition-all cursor-pointer rounded">
            <MdPeople className="text-[25px] text-[#00c8ff]"></MdPeople>
            <span className="text-[10px] font-semibold">AMIGOS</span>
          </div>
          <div className="flex flex-row items-center justify-between gap-2 pl-2 pr-2 m-2 text-gray-300">
            <span className="text-nowrap text-[10px] font-semibold">MENSAJES DIRECTOS</span>
            <IoAddOutline className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></IoAddOutline>
          </div>
          <div className="flex flex-col items-center">
            <MembersInner pfp={gacc} author="gacc_15" />
            <MembersInner pfp={safe} author="Safe" />
            <MembersInner pfp={keven} author="! IrregularDev" />
          </div>
        </div>

        {/* Mobile view - default container */}
        <div
          className={`md:hidden grid grid-cols-[1fr] grid-rows-[40px_minmax(0,1fr)_0.1fr] h-full w-full transition-transform duration-300 ease-in-out
            ${leftContainer ? "translate-x-[100%]" : "translate-x-0"}`}
        >
          {/* Chat info section - mobile */}
          <div
            className="flex bg-[#0f0f0f] flex-row relative justify-start h-full w-full items-center text-gray-300 gap-2 p-3 row-start-1 row-end-2
              col-start-1 col-end-1"
            id="chat-info"
          >
            <FaArrowLeft
              className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"
              onClick={handleLeftContainerOpen}
            />
            <div className="flex flex-row items-center pl-2 cursor-pointer">
              <UserSquare pfp="" author="Keven" width={20} height={20} />
            </div>

            <div className="flex flex-row items-center justify-center gap-3 ml-auto">
              <BiSolidPhoneCall className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></BiSolidPhoneCall>
              <IoVideocam className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></IoVideocam>
            </div>
          </div>

          {/* Chat section - mobile */}
          <div className="bg-[#0f0f0f] w-full flex flex-col justify-end row-start-2 row-end-3" style={{ height: "100%" }}>
            <div
              id="chat"
              className="grid h-full max-h-full min-h-0 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#121212]
                [&::-webkit-scrollbar-thumb]:bg-[#00c8ff]"
            >
              <div className="flex flex-col justify-end gap-2 pb-2 pt-3 pl-5 pr-5">
                {messages.map((msg, index) => (
                  <Message key={index} pfp="" author="Safe" message={msg} />
                ))}
              </div>
            </div>
          </div>

          {/* Message input section - mobile */}
          <div className="relative flex bg-[#0f0f0f] justify-center items-center row-start-3 row-end-4" id="msg">
            <div className="w-[90%] flex flex-row pl-3 pr-3 gap-2 items-center h-[50%] bg-[#1a1a1a] rounded-xl text-gray-300">
              <IoAddCircle className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></IoAddCircle>
              <input
                id="msg-input-mobile"
                className="w-[90%] h-fit outline-none text-[12px] bg-transparent"
                placeholder="Enviar mensaje a @Keven"
                onKeyDown={handleSendMessage}
              ></input>
              <IoSend className="text-[20px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer" onClick={() => handleSendMessageBtn("mobile")}></IoSend>
              <MdGifBox className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></MdGifBox>
              <FaFaceSmile className="text-[20px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></FaFaceSmile>
            </div>
          </div>
        </div>

        {/* Mobile view - left container (slides in from left) */}
        <div
          className={`md:hidden absolute top-0 left-0 h-full w-full grid grid-cols-[0.2fr_1fr] grid-rows-[auto_1fr_auto] transition-transform
            duration-300 ease-in-out ${leftContainer ? "translate-x-0" : "translate-x-[-100%]"}`}
        >
          {/* Servers section */}
          <div className="bg-[#0a0a0a] flex flex-col items-center pt-2 gap-2 col-start-1 col-end-2 row-start-1 row-end-3" id="servers">
            <ServerCircle pfp={serverpfp} name="Autisofino" />
            <ServerCircle pfp={serverpfp} name="Autisofino" />
          </div>

          {/* Friends section */}
          <div className="bg-[#121212] flex flex-col col-start-2 col-end-3 row-start-1 row-end-3" id="friends">
            <div className="bg-[#171717] w-full h-10 rounded gap-2 flex flex-row items-center self-center p-2">
              <input className="w-full h-6 rounded bg-[#0a0a0a] outline-none text-gray-200 text-[10px] p-2" placeholder="Buscar"></input>
              <FaArrowRight
                className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"
                onClick={handleLeftContainerOpen}
              />
            </div>
            <div className="flex flex-row gap-2 items-center pl-2 pr-2 text-gray-300 m-2 hover:bg-[#00c8ff] transition-all cursor-pointer rounded">
              <MdPeople className="text-[25px] text-[#00c8ff]"></MdPeople>
              <span className="text-[10px] font-semibold">AMIGOS</span>
            </div>
            <div className="flex flex-row items-center justify-between gap-2 pl-2 pr-2 m-2 text-gray-300">
              <span className="text-nowrap text-[10px] font-semibold">MENSAJES DIRECTOS</span>
              <IoAddOutline className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></IoAddOutline>
            </div>
            <div className="flex flex-col items-center">
              <MembersInner pfp={gacc} author="gacc_15" />
              <MembersInner pfp={safe} author="Safe" />
              <MembersInner pfp={keven} author="! IrregularDev" />
            </div>
          </div>

          {/* User profile section */}
          <div className="bg-[#0a0a0a] flex flex-col justify-center col-start-1 col-end-3 row-start-3 row-end-4" id="user-profile">
            <div className="flex flex-row items-center justify-between gap-2 pl-2 pr-2 m-2 text-gray-300">
              <MembersInner pfp={keven} author="! IrregularDev" />
              <FaMicrophone className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></FaMicrophone>
              <FaHeadphones className="text-[30px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></FaHeadphones>
              <IoMdSettings className="text-[30px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></IoMdSettings>
            </div>
          </div>
        </div>

        {/* Desktop view - chat and users sections */}
        <div className="hidden md:grid h-full w-full bg-[#0f0f0f] md:row-start-2 md:row-end-4 md:col-start-3 md:col-end-4">
          <div
            id="chat-desktop"
            className="grid max-h-full min-h-0 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#121212]
              [&::-webkit-scrollbar-thumb]:bg-[#00c8ff]"
          >
            <div className="flex flex-col justify-end gap-2 pb-2 pt-3 pl-5 pr-5">
              {messages.map((msg, index) => (
                <Message key={index} pfp="" author="Safe" message={msg} />
              ))}
            </div>
          </div>
        </div>

        {/* Chat info section - desktop */}
        <div
          className="hidden md:flex bg-[#0f0f0f] md:col-start-3 md:col-end-5 md:row-start-1 md:row-end-1 flex-row relative justify-start h-full w-full
            items-center text-gray-300 gap-2 p-3"
          id="chat-info-desktop"
        >
          <div className="flex flex-row items-center pl-2 cursor-pointer">
            <UserSquare pfp="" author="Keven" width={20} height={20} />
          </div>

          <div className="flex flex-row items-center justify-center gap-3 ml-auto">
            <BiSolidPhoneCall className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></BiSolidPhoneCall>
            <IoVideocam className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></IoVideocam>
            <FaThumbtack className="text-[22px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></FaThumbtack>
            <MdGroupAdd className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></MdGroupAdd>

            <div className="bg-[#0a0a0a] h-[60%] w-30 rounded">
              <input className="w-full h-full bg-transparent outline-none text-gray-200 px-2 text-[10px]" placeholder="Buscar"></input>
            </div>
          </div>
        </div>

        {/* Message input section - desktop */}
        <div
          className="hidden md:flex bg-[#0f0f0f] justify-center items-center md:row-start-4 md:row-end-5 md:col-start-3 md:col-end-4"
          id="msg-desktop"
        >
          <div className="w-[90%] flex flex-row pl-3 pr-3 gap-2 items-center h-[50%] bg-[#1a1a1a] rounded-xl text-gray-300">
            <IoAddCircle className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></IoAddCircle>
            <input
              id="msg-input-desktop"
              className="w-[90%] h-fit outline-none text-[12px] bg-transparent"
              placeholder="Enviar mensaje a @Keven"
              onKeyDown={handleSendMessage}
            ></input>
            <IoSend className="text-[20px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer" onClick={() => handleSendMessageBtn("desktop")}></IoSend>
            <MdGifBox className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></MdGifBox>
            <FaFaceSmile className="text-[20px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></FaFaceSmile>
          </div>
        </div>

        {/* Users section - desktop */}
        <div className="hidden md:flex bg-[#0f0f0f] flex-col justify-start w-full md:row-start-2 md:row-end-5 md:col-start-4 md:col-end-5" id="users">
          <div
            className="flex-1 overflow-y-auto w-full [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#121212]
              [&::-webkit-scrollbar-thumb]:bg-[#00c8ff] pb-5"
          >
            <MembersGroup group="EN LINEA - 3" members={members} />
            <MembersGroup group="EN LINEA - 3" members={members} />
            <MembersGroup group="EN LINEA - 3" members={members} />
            <MembersGroup group="EN LINEA - 3" members={members} />
          </div>
        </div>

        {/* User profile section - desktop */}
        <div
          className="hidden md:flex bg-[#0a0a0a] flex-col justify-center md:row-start-4 md:row-end-4 md:col-start-2 md:col-end-3"
          id="user-profile-desktop"
        >
          <div className="flex flex-row items-center justify-between gap-2 pl-2 pr-2 m-2 text-gray-300">
            <MembersInner pfp={keven} author="! IrregularDev" />
            <FaMicrophone className="text-[25px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></FaMicrophone>
            <FaHeadphones className="text-[30px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></FaHeadphones>
            <IoMdSettings className="text-[30px] text-[#00c8ff] hover:scale-110 hover:text-[#00c8ff] transition-all cursor-pointer"></IoMdSettings>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
