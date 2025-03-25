import Message from "../components/message";
import MembersGroup from "../components/membersGroup";
import MembersInner from "../components/memberInner";
import ServerCircle from "../components/server-circle";
import { FaHashtag, FaHeadphones, FaMicrophone } from "react-icons/fa";
import { MdGroupAdd } from "react-icons/md";
import { FaThumbtack, FaFaceSmile } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoVideocam, IoAddCircle, IoAddOutline } from "react-icons/io5";
import { MdGifBox, MdPeople } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

const gacc =
  "https://images-ext-1.discordapp.net/external/ZZVZlX8hJvqmvT-FxUWQzxjK0HRwJeDdocyY1nFGfUI/%3Fsize%3D512/https/cdn.discordapp.com/avatars/838793520554442752/eda3b21d9bef5e6f78f6198bac4ac9cf.png?format=webp&quality=lossless&width=172&height=172";
const safe =
  "https://images-ext-1.discordapp.net/external/8E859V6oMI1MYX_9Hi4uDt1vAhrU_xfXb4QHI3Qxofs/%3Fsize%3D512/https/cdn.discordapp.com/avatars/778788944024043540/6c1457c13793d3fe3d2cc650e27b04ba.png?format=webp&quality=lossless&width=172&height=172";
const keven =
  "https://images-ext-1.discordapp.net/external/hcm5ZAl_ouNLQ2inH8JvHv0WB7PFCC1YDxO4BsuuOmQ/%3Fsize%3D512/https/cdn.discordapp.com/avatars/1287258677706883183/74fb24296c29ea39a63899122c5e1811.png?format=webp&quality=lossless&width=343&height=343";

const serverpfp = "https://media.discordapp.net/attachments/1296138265879117886/1353968261921771530/545ccd4bd79ea589f3baaf94b8dbd8a0.png?ex=67e394b5&is=67e24335&hm=e05a69344e9eb4ae39eb245cc57a6bd9ceed563bcd95ae4c224a083805b68eab&=&format=webp&quality=lossless&width=268&height=268";

const members = [
  { pfp: safe, author: "Safe" },
  { pfp: gacc, author: "gacc_15" },
  { pfp: keven, author: "! IrregularDev" },
];

function Dashboard() {
  return (
    <div className="min-h-screen h-screen grid grid-cols-[70px_2fr_8fr_2fr] grid-rows-[35px_8fr_2fr_1.5fr]">
      <div className="bg-[#21344a] row-start-1 row-end-5 flex flex-col items-center pt-2 gap-2" id="servers">
        <ServerCircle pfp={serverpfp} name="Autisofino" />
        <ServerCircle pfp={serverpfp} name="Autisofino" />
      </div>
      <div className="bg-[#4a77aa] row-start-1 row-end-4" id="friends">
        <div className="bg-[#21344a] w-[90%] h-6 rounded flex self-center justify-self-center mt-1">
          <input
            className="w-full h-full bg-transparent outline-none text-white px-2 text-[10px]"
            placeholder="Buscar"
          ></input>
        </div>
        <div className="flex flex-row gap-2 items-center pl-2 pr-2 text-white m-2 hover:bg-[#3f6593] transition-all cursor-pointer rounded">
          <MdPeople className="text-[25px] text-[#21344a]"></MdPeople>
          <span className="text-[10px] font-semibold">AMIGOS</span>
        </div>
        <div className="flex flex-row gap-2 items-center pl-2 pr-2 text-white m-2 justify-between">
          <span className="text-nowrap text-[10px] font-semibold">
            MENSAJES DIRECTOS
          </span>
          <IoAddOutline className="text-[25px] text-[#21344a] hover:scale-110 hover:text-[#3f6593] transition-all cursor-pointer"></IoAddOutline>
        </div>
        <div className="flex flex-col pl-2">
          <MembersInner pfp={gacc} author="gacc_15" />
          <MembersInner pfp={safe} author="Safe" />
          <MembersInner pfp={keven} author="! IrregularDev" />
        </div>
      </div>
      <div
        className="bg-[#6aa3e4] row-start-2 row-end-4 w-full flex flex-col overflow-hidden"
        id="chat"
        style={{ height: "100%" }}
      >
        <div
          className="flex-1 overflow-y-auto w-full [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-[#4f739d]
  [&::-webkit-scrollbar-thumb]:bg-blue-300"
        >
          <div className="flex flex-col gap-2 p-5">
            <Message
              pfp={gacc}
              message="Sep, entonces yo q podría hacer xD"
              author="gacc_15"
            />
            <Message
              pfp={safe}
              message="elige register o login"
              author="Safe"
            />
            <Message
              pfp={gacc}
              message="Iré por lo difícil Register"
              author="gacc_15"
            />
            <Message
              pfp={safe}
              message="vale pues haz esa parte y yo hago el login"
              author="Safe"
            />
            <Message
              pfp={keven}
              message="Se viene lo chido"
              author="! IrregularDev"
            />
            <Message
              pfp={gacc}
              message="Una pregunta, yo haría la db?"
              author="gacc_15"
            />
            <Message
              pfp={safe}
              message="Pues depende, yo tambien quiero aprender a hacerla, entonces supongo que podriamos dividirnos eso si, habria que tener muy buena organización"
              author="Safe"
            />
            <Message
              pfp={gacc}
              message="Dale Iré haciendo lo principal primero"
              author="gacc_15"
            />
            <Message
              pfp={gacc}
              message="Sep, entonces yo q podría hacer xD"
              author="gacc_15"
            />
            <Message
              pfp={safe}
              message="elige register o login"
              author="Safe"
            />
            <Message
              pfp={gacc}
              message="Iré por lo difícil Register"
              author="gacc_15"
            />
            <Message
              pfp={safe}
              message="vale pues haz esa parte y yo hago el login"
              author="Safe"
            />
            <Message
              pfp={keven}
              message="Se viene lo chido"
              author="! IrregularDev"
            />
            <Message
              pfp={gacc}
              message="Una pregunta, yo haría la db?"
              author="gacc_15"
            />
            <Message
              pfp={safe}
              message="Pues depende, yo tambien quiero aprender a hacerla, entonces supongo que podriamos dividirnos eso si, habria que tener muy buena organización"
              author="Safe"
            />
            <Message
              pfp={gacc}
              message="Dale Iré haciendo lo principal primero"
              author="gacc_15"
            />
          </div>
        </div>
      </div>
      <div
        className="bg-[#6aa3e4] col-start-3 col-end-5 row-start-1 row-end-1 flex flex-row relative justify-start h-full w-full items-center text-white gap-2 pl-2 pr-2"
        id="chat-info"
      >
        <div className="flex flex-row gap-2 items-center cursor-pointer">
          <FaHashtag className="text-[20px] text-[#21344a]"></FaHashtag>
          <span>general</span>
        </div>

        <div className="ml-auto flex flex-row gap-3 justify-center items-center">
          <BiSolidPhoneCall className="text-[25px] text-[#21344a] hover:scale-110 hover:text-[#3f6593] transition-all cursor-pointer"></BiSolidPhoneCall>
          <IoVideocam className="text-[25px] text-[#21344a] hover:scale-110 hover:text-[#3f6593] transition-all cursor-pointer"></IoVideocam>
          <FaThumbtack className="text-[22px] text-[#21344a] hover:scale-110 hover:text-[#3f6593] transition-all cursor-pointer"></FaThumbtack>
          <MdGroupAdd className="text-[25px] text-[#21344a] hover:scale-110 hover:text-[#3f6593] transition-all cursor-pointer"></MdGroupAdd>

          <div className="bg-[#21344a] h-[60%] w-30 rounded ">
            <input
              className="w-full h-full bg-transparent outline-none text-white px-2 text-[10px]"
              placeholder="Buscar"
            ></input>
          </div>
        </div>
      </div>
      <div
        className="bg-[#356fb1] row-start-4 row-end-4 flex flex-col justify-center"
        id="user-profile"
      >
        <div className="flex flex-row gap-2 items-center pl-2 pr-2 text-white m-2 justify-between">
          <MembersInner pfp={keven} author="! IrregularDev" />
          <FaMicrophone className="text-[25px] text-[#21344a] hover:scale-110 hover:text-[#3f6593] transition-all cursor-pointer"></FaMicrophone>
          <FaHeadphones className="text-[30px] text-[#21344a] hover:scale-110 hover:text-[#3f6593] transition-all cursor-pointer"></FaHeadphones>
          <IoMdSettings className="text-[30px] text-[#21344a] hover:scale-110 hover:text-[#3f6593] transition-all cursor-pointer"></IoMdSettings>
        </div>
      </div>
      <div
        className="relative flex bg-[#6aa3e4] justify-center items-center"
        id="msg"
      >
        <div className="w-[90%] flex flex-row pl-3 pr-3 gap-2 items-center h-[50%] bg-[#406590] rounded-xl text-white">
          <IoAddCircle className="text-[25px] text-[#21344a] hover:scale-110 hover:text-[#222a37] transition-all cursor-pointer"></IoAddCircle>
          <input
            className="w-[90%] h-fit outline-none text-[12px]"
            placeholder="Enviar mensaje a"
          ></input>
          <MdGifBox className="text-[25px] text-[#21344a] hover:scale-110 hover:text-[#222a37] transition-all cursor-pointer"></MdGifBox>
          <FaFaceSmile className="text-[25px] text-[#21344a] hover:scale-110 hover:text-[#222a37] transition-all cursor-pointer"></FaFaceSmile>
        </div>
      </div>
      <div
        className="bg-[#6aa3e4] row-start-2 row-end-5 flex flex-col justify-start w-full "
        id="users"
      >
        <div
          className="flex-1 overflow-y-auto w-full [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-[#4f739d]
  [&::-webkit-scrollbar-thumb]:bg-blue-300 pb-5"
        >
          <MembersGroup group="EN LINEA - 3" members={members} />
          <MembersGroup group="EN LINEA - 3" members={members} />
          <MembersGroup group="EN LINEA - 3" members={members} />
          <MembersGroup group="EN LINEA - 3" members={members} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
