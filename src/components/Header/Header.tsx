import { useContext, useState, useEffect, useRef } from "react";
import AuthLogo from "../../assets/logo.png";
import { AiOutlineUser } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { SidebarContext } from "../Context/SidebarContext";
import Dropdown from "./Dropdown";

const Header = () => {
  const { showSidebar, setShowSidebar, showDropdown, setShowDropdown } =
    useContext(SidebarContext);

  const dropRef = useRef(null);
  const svgRef = useRef(null);
  const divRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  useEffect(() => {
    const closeDropdown = (e: MouseEvent) => {
      if (
        e.target !== dropRef.current &&
        e.target !== svgRef.current &&
        e.target !== p1Ref.current &&
        e.target !== p2Ref.current
      ) {
        setShowDropdown(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="relative">
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

        <div
          ref={dropRef}
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <div
            ref={svgRef}
            className="bg-[#9D72FF] h-[35px] w-[35px] flex items-center justify-center rounded-full"
          >
            <AiOutlineUser />
          </div>

          <div ref={divRef} className="hidden md:flex flex-col">
            <p ref={p1Ref} className="text-[#136648]">
              AGENT
            </p>
            <p ref={p2Ref} className="flex items-center gap-2">
              Abiola Adebiyi <MdArrowDropDown />
            </p>
          </div>
        </div>
      </div>
      {showDropdown && <Dropdown />}
    </div>
  );
};

export default Header;
