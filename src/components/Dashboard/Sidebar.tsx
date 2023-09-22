import AuthLogo from "../../assets/logo.png";
import { FaBars, FaSave, FaHistory } from "react-icons/fa";
import { MdSpaceDashboard, MdSettingsSuggest } from "react-icons/md";
import { BiSolidGroup, BiSolidReport } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";

const Sidebar = () => {
  return (
    <div className="w-[20vw] p-5 bg-[#101924] h-[100vh]">
      <div className="flex items-center justify-between">
        <img src={AuthLogo} alt="logo" className="w-[100px]" />
        <div className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-[#070A0F] cursor-pointer">
          <FaBars className="text-[#6B7993] text-2xl" />
        </div>
      </div>

      <ul className="mt-5 py-2 flex flex-col gap-2">
        <li className="text-[#6B7993] flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853]">
          <MdSpaceDashboard className="text-2xl" />
          <p className="text-sm font-medium">Dashboard</p>
        </li>

        <li className="text-[#6B7993] flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853]">
          <BiSolidGroup className="text-2xl" />
          <p className="text-sm font-medium">Grants</p>
        </li>

        <li className="text-[#6B7993] flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853]">
          <FaSave className="text-2xl" />
          <p className="text-sm font-medium">Draft Applications</p>
        </li>

        <li className="text-[#6B7993] flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853]">
          <BiSolidReport className="text-2xl" />
          <p className="text-sm font-medium">Project Report</p>
        </li>

        <li className="text-[#6B7993] flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853]">
          <FaHistory className="text-2xl" />
          <p className="text-sm font-medium">Grant History</p>
        </li>

        <li className="text-[#6B7993] flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853]">
          <MdSettingsSuggest className="text-2xl" />
          <p className="text-sm font-medium">Profile Settings</p>
        </li>

        <li className="text-[#6B7993] flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853]">
          <GoSignOut className="text-2xl" />
          <p className="text-sm font-medium">Sign Out</p>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
