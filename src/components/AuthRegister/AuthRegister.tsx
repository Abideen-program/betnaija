import { useState } from "react";
import AuthLogo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";

const AuthRegister = () => {
  const {
    // register,
    // handleSubmit,
    // watch,
    // getValues,
    // setValue,
    // reset
    // formState: { errors, isValid, isSubmitting },
    // formState: { errors, isValid },
  } = useForm({ mode: "all" });

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

  const setType = (usertype: string) => {
    setUser({ ...user, usertype });
  };

  return (
    <div className="border border-red-300 h-[100vh] w-full bg-[#0D141D] flex flex-col items-center justify-center">
      <div className="md:w-[600px] p-5 md:p-8 flex flex-col md:gap-4 bg-[#363944] rounded-3xl">
        <Link to={"/"}>
          <div className="w-[150px] md:w-[210px] mx-auto text-center">
            <img
              src={AuthLogo}
              alt="Betnaija Logo"
              className="object-contain w-full"
            />
          </div>
        </Link>

        <h3 className="text-center text-white font-semibold text-xl">
          Please select how you'd like to register.
        </h3>

        <div className="my-3 flex flex-col gap-3">
          <div className=" flex justify-between">
            <div
              className={`bg-[#141C26] p-8 flex flex-col gap-3 w-[49%] rounded-md cursor-pointer ${
                user.usertype === "agent" ? "border border-[#1EE0AC]" : ""
              }`}
              onClick={() => setType("agent")}
            >
              <AiOutlineUser
                className={`${
                  user.usertype === "agent" ? "text-[#1EE0AC]" : "text-white"
                } text-3xl font-bold`}
              />
              <h5 className="text-white text-lg">I am a Bet9ja agent</h5>

              <p className="text-[#B6C6E3] text-sm">
                Applicant must be a verifiable Super Agent with Bet9ja.
              </p>
            </div>

            <div
              className={`bg-[#141C26] p-8 flex flex-col gap-3 w-[49%] rounded-md cursor-pointer ${
                user.usertype === "ngo" ? "border border-[#1EE0AC]" : ""
              }`}
              onClick={() => setType("ngo")}
            >
              <FiUsers
                className={`${
                  user.usertype === "ngo" ? "text-[#1EE0AC]" : "text-white"
                } text-3xl font-bold`}
              />
              <h5 className="text-white text-lg">We are an NGO</h5>

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
            }  text-sm py-2 font-medium md:text-base md:font-semibold md:py-3 text-white rounded-md`}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthRegister;
