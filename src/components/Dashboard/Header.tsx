import { AiOutlineUser } from "react-icons/ai";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-[#101924] h-[60px] text-white flex items-center justify-end pr-10 border-b border border-[#182536]">
      <div className="flex items-center gap-3 cursor-pointer">
        <div className="bg-[#9D72FF] h-[35px] w-[35px] flex items-center justify-center rounded-full">
          <AiOutlineUser />
        </div>
        <div>
          <p className="text-xs">AGENT</p>
          <p className="text-sm flex items-center gap-2">
            Abiola Adebiyi <MdArrowDropDown />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
