import { useState } from "react";
import { Link } from "react-router-dom";
import EnglishFlag from "../AuthFooter/images/english.png";
import EspañolFlag from "../AuthFooter/images/spain.png";
import FrançaisFlag from "../AuthFooter/images/french.png";
import TürkçeFlag from "../AuthFooter/images/turkey.png";

const AuthFooter = () => {
  const [selectedOption, setSelectedOption] = useState<string>("English");
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  const setSelect = (value: string): void => {
    setSelectedOption(value);
    setOpenSelect(false);
  };

  return (
    <div className="bg-[#101924] border border-[#80948F] md:h-14 mt-7 md:mt-auto flex flex-col justify-center items-center lg:flex-row lg:items-center lg:justify-around px-3 gap-3 mb-2 md:mb-0">
      <p className="text-[#80948F] text-center text-xs lg:text-base">
        &copy; 2023 Bet9ja Foundation. All Rights Reserved.
      </p>

      <nav className="text-[#5b29bf] text-center">
        <ul className="flex flex-col md:flex-row text-sm items-center gap-1 md:gap-10">
          <Link to={""}>
            <li>Terms & Conditions</li>
          </Link>
          <Link to={""}>
            <li>Privacy Policy</li>
          </Link>
          <Link to={""}>
            <li>Help</li>
          </Link>
          <ul className="relative">
            <li
              className="px-10 flex items-center gap-4 cursor-pointer"
              onClick={() => setOpenSelect(!openSelect)}
            >
              <p>{selectedOption}</p>
              <span>^</span>
            </li>

            {openSelect && (
              <div className="absolute -top-[230px]  rounded-md border border-[#80948F]">
                <li
                  className="w-full border-b border-[#80948F] flex items-center justify-center text-white gap-4 py-4 px-8 bg-[#141C26] rounded-t-md cursor-pointer hover:bg-[#11171F] transition-all duration-300"
                  onClick={() => setSelect("English")}
                >
                  <img
                    className="object-contain w-[30px]"
                    src={EnglishFlag}
                    alt="english"
                  />
                  <span className="text-sm">English</span>
                </li>

                <li
                  className="w-full border-b border-[#80948F] flex items-center justify-center text-white gap-4 py-4 px-8 cursor-pointer hover:bg-[#11171F] transition-all duration-300"
                  onClick={() => setSelect("Español")}
                >
                  <img
                    className="object-contain w-[30px]"
                    src={EspañolFlag}
                    alt="spain"
                  />
                  <span className="text-sm">Español</span>
                </li>

                <li
                  className="w-full border-b border-[#80948F] flex items-center justify-center text-white gap-4 py-4 px-8 cursor-pointer hover:bg-[#11171F] transition-all duration-300"
                  onClick={() => setSelect("Français")}
                >
                  <img
                    className="object-contain w-[30px]"
                    src={FrançaisFlag}
                    alt="french"
                  />
                  <span className="text-sm">Français</span>
                </li>

                <li
                  className="w-full flex items-center justify-center text-white gap-4 py-4 px-8  cursor-pointer hover:bg-[#11171F] transition-all duration-300"
                  onClick={() => setSelect("Türkçe")}
                >
                  <img
                    className="object-contain w-[30px]"
                    src={TürkçeFlag}
                    alt="turkey"
                  />
                  <span className="text-sm">Türkçe</span>
                </li>
              </div>
            )}
          </ul>
        </ul>
      </nav>
    </div>
  );
};

export default AuthFooter;
