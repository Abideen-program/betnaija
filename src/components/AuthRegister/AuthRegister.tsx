import { useState } from "react";
import AuthLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import AuthFooter from "../AuthFooter/AuthFooter";
import AuthForm from "./AuthForm";

const AuthRegister = () => {
  const [user, setUser] = useState({
    usertype: "",
    ngo_name: "",
    office_address: "",
    phone: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cac: "",
    date_of_registration: "",
    website_url: "",
    agent_code: "",
  });

  const [step, setStep] = useState<number>(0);

  const setType = (usertype: string) => {
    setUser({ ...user, usertype });
  };

  return (
    <>
      {step === 0 && (
        <div className="w-full md:h-[100vh] bg-[#0D141D] flex flex-col  justify-center p-5 md:p-0">
          <div className="min-w-[280px] md:w-[600px] p-5 md:p-8 flex flex-col md:gap-4 bg-[#363944] rounded-2xl m-auto border border-[#B6C6E3]">
            <Link to={"/auth-login"}>
              <div className="w-[150px] md:w-[210px] mx-auto text-center">
                <img
                  src={AuthLogo}
                  alt="Betnaija Logo"
                  className="object-contain mx-auto w-[150px]"
                />
              </div>
            </Link>

            <h3 className="text-center text-white font-semibold md:text-xl">
              Please select how you'd like to register.
            </h3>

            <div className="my-3 flex flex-col gap-2">
              <div className=" flex md:flex-row flex-col justify-between gap-2">
                <div
                  className={`bg-[#141C26] p-5 md:p-8 flex flex-col gap-3 md:w-[50%] rounded-md cursor-pointer ${
                    user.usertype === "agent" ? "border border-[#1EE0AC]" : ""
                  }`}
                  onClick={() => setType("agent")}
                >
                  <AiOutlineUser
                    className={`${
                      user.usertype === "agent"
                        ? "text-[#1EE0AC]"
                        : "text-white"
                    } text-2xl md:text-3xl font-bold`}
                  />
                  <h5 className="text-white md:text-lg">I am a Bet9ja agent</h5>

                  <p className="text-[#B6C6E3] text-sm">
                    Applicant must be a verifiable Super Agent with Bet9ja.
                  </p>
                </div>

                <div
                  className={`bg-[#141C26] p-5 md:p-8 flex flex-col gap-3 md:w-[50%] rounded-md cursor-pointer ${
                    user.usertype === "ngo" ? "border border-[#1EE0AC]" : ""
                  }`}
                  onClick={() => setType("ngo")}
                >
                  <FiUsers
                    className={`${
                      user.usertype === "ngo" ? "text-[#1EE0AC]" : "text-white"
                    } text-2xl md:text-3xl font-bold`}
                  />
                  <h5 className="text-white md:text-lg">We are an NGO</h5>

                  <p className="text-[#B6C6E3] text-sm">
                    Applicant must be a registered NGO/Social Enterprise with at
                    least 2 years of operations.
                  </p>
                </div>
              </div>
              <button
                disabled={user.usertype === ""}
                type="submit"
                className={`${
                  user.usertype === "" ? "bg-[#25754B]" : "bg-[#14B151]"
                }  text-sm py-2 font-medium md:text-base md:font-semibold md:py-3 text-white rounded-md mt-3`}
                onClick={() => setStep(1)}
              >
                Save & Continue
              </button>
            </div>
          </div>
        </div>
      )}
      {step === 1 && (
        <div>
          <AuthForm user={user} setUser={setUser}/>
        </div>
      )}
      <AuthFooter />
    </>
  );
};

export default AuthRegister;
