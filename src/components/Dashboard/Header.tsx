import { useContext } from "react";
import AuthLogo from "../../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { SidebarContext } from "../Context/SidebarContext";

const Header = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);
  return (
    <div className="bg-[#101924] h-[70px] text-white flex items-center justify-between px-5 md:px-10 border-b border border-[#182536] fixed w-full">
      <div className="flex items-center justify-between">
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-[#070A0F] cursor-pointer"
        >
          <FaBars className="text-[#6B7993] text-2xl" />
        </div>
        <img src={AuthLogo} alt="logo" className="w-[100px]" />
      </div>

      <div className="flex items-center gap-3 cursor-pointer">
        <div className="bg-[#9D72FF] h-[35px] w-[35px] flex items-center justify-center rounded-full">
          <AiOutlineUser />
        </div>
        <div className="hidden md:flex flex-col">
          <p className="text-xs text-[#136648]">AGENT</p>
          <p className="text-sm flex items-center gap-2">
            Abiola Adebiyi <MdArrowDropDown />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
