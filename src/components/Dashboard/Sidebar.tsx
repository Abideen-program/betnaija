import { useContext } from "react";
import AuthLogo from "../../assets/logo.png";
import { FaBars, FaSave, FaHistory } from "react-icons/fa";
import { MdSpaceDashboard, MdSettingsSuggest } from "react-icons/md";
import { BiSolidGroup, BiSolidReport } from "react-icons/bi";
import { GoSignOut } from "react-icons/go";
import { SidebarContext } from "../Context/SidebarContext";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(SidebarContext);

  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    navigate("auth-login");
    window.location.reload();
  };

  return (
    <>
      <div
        className={`lg:w-[20vw] p-5 bg-[#101924] h-[100vh] border border-[#182536] fixed ${
          showSidebar ? "translate-x-0" : "-translate-x-[100vw]"
        } transition-all duration-150 ease-in z-10`}
      >
        <div className="flex items-center justify-between">
          <img src={AuthLogo} alt="logo" className="w-[100px]" />
          <div
            onClick={() => setShowSidebar(!showSidebar)}
            className="h-[40px] w-[40px] flex items-center justify-center rounded-full hover:bg-[#070A0F] cursor-pointer"
          >
            <FaBars className="text-[#6B7993] text-2xl" />
          </div>
        </div>

        <ul className="mt-5 py-2 flex flex-col gap-2">
          <NavLink
            to="/"
            end
            className={(isActive) =>
              `text-[#6B7993] cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853] ${
                isActive ? "bg-[#182536] text-[#229853]" : ""
              }`
            }
          >
            <li className="flex items-center gap-2">
              <MdSpaceDashboard className="text-2xl" />
              <p className="text-sm font-medium">Dashboard</p>
            </li>
          </NavLink>

          <NavLink
            to="/grant"
            end
            className={(isActive) =>
              `text-[#6B7993] cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853] ${
                isActive ? "bg-[#182536] text-[#229853]" : ""
              }`
            }
          >
            <li className="flex items-center gap-2">
              <BiSolidGroup className="text-2xl" />
              <p className="text-sm font-medium">Grants</p>
            </li>
          </NavLink>

          <NavLink
            to="/draft-applications"
            end
            className={(isActive) =>
              `text-[#6B7993] cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853] ${
                isActive ? "bg-[#182536] text-[#229853]" : ""
              }`
            }
          >
            <li className="flex items-center gap-2">
              <FaSave className="text-2xl" />
              <p className="text-sm font-medium">Draft Applications</p>
            </li>
          </NavLink>

          <NavLink
            to="/project-report"
            end
            className={(isActive) =>
              `text-[#6B7993] cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853] ${
                isActive ? "bg-[#182536] text-[#229853]" : ""
              }`
            }
          >
            <li className="flex items-center gap-2">
              <BiSolidReport className="text-2xl" />
              <p className="text-sm font-medium">Project Report</p>
            </li>
          </NavLink>

          <NavLink
            to="/grant-history"
            end
            className={(isActive) =>
              `text-[#6B7993] cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853] ${
                isActive ? "bg-[#182536] text-[#229853]" : ""
              }`
            }
          >
            <li className="flex items-center gap-2">
              <FaHistory className="text-2xl" />
              <p className="text-sm font-medium">Grant History</p>
            </li>
          </NavLink>

          <NavLink
            to="/profile"
            end
            className={(isActive) =>
              `text-[#6B7993] cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853] ${
                isActive ? "bg-[#182536] text-[#229853]" : ""
              }`
            }
          >
            <li className="flex items-center gap-2">
              <MdSettingsSuggest className="text-2xl" />
              <p className="text-sm font-medium">Profile Settings</p>
            </li>
          </NavLink>

          <NavLink
            to=""
            className="text-[#6B7993] cursor-pointer p-2 rounded-md hover:bg-[#182536] transition-all duration-300 ease-in hover:text-[#229853]"
            onClick={logoutHandler}
          >
            <li className="flex items-center gap-2">
              <GoSignOut className="text-2xl" />
              <p className="text-sm font-medium">Sign Out</p>
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
