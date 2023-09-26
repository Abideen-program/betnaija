import { AiOutlineUser } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { MdContrast } from "react-icons/md";

const Dropdown = () => {
  return (
    <div className="border border-[#182536] fixed right-10 top-[66px] rounded-md text-white w-[230px] md:w-[300px] z-[5] flex flex-col  before:w-full before:h-1 before:bg-[#136648] before:rounded-t-lg">
      <div className="hidden md:flex items-center gap-3 cursor-pointer bg-[#101924] p-5 border-b border-[#8092AB]">
        <div className="bg-[#9D72FF] h-[35px] w-[35px] flex items-center justify-center rounded-full">
          T
        </div>
        <div className="hidden md:flex flex-col">
          <p className="text-sm font-bold">TEST ACCOUNT</p>
          <p className="text-xs text-[#6B7993] flex items-center gap-2">
            abideen@gmail.com
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 p-5 bg-[#18212D] text-[#6B7993] hover:text-[#229853] cursor-pointer">
        <AiOutlineUser className="text-xl" />
        <span className="text-xs font-medium">View Profile</span>
      </div>
      <div className="flex items-center gap-3 p-5 bg-[#18212D] text-[#6B7993] hover:text-[#229853] cursor-pointer">
        <MdContrast className="text-xl" />
        <span className="text-xs font-medium">Light Mode</span>
      </div>
      <div className="flex items-center gap-3 p-5 bg-[#18212D] text-[#6B7993] hover:text-[#229853] cursor-pointer border-t border-[#8092AB]">
        <GoSignOut className="text-xl" />
        <span className="text-xs font-medium">Sign Out</span>
      </div>
    </div>
  );
};

export default Dropdown;
