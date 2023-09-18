import { Link, useNavigate } from "react-router-dom";
import AuthLogo from "../../assets/logo.png";
import { BiSolidCheckCircle } from "react-icons/bi";

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen md:min-h-[calc(100vh_-_60px)] p-5 md:p-0 w-full bg-[#0D141D] flex flex-col items-center justify-center">
      <div className="w-[300px] md:w-[500px] p-7 flex flex-col md:gap-6 bg-[#363944] rounded-2xl border border-[#B6C6E3]">
        <div className="mx-auto text-center">
          <Link to={"/"}>
            <img
              src={AuthLogo}
              alt="Betnaija Logo"
              className="object-contain w-[150px] mx-auto"
            />
          </Link>

          <div className="flex flex-col items-center gap-4 mt-5">
            <BiSolidCheckCircle className="text-[#14B151] text-7xl" />
            <h2 className="text-white font-bold md:text-xl tracking-wide">
              Congratulations!
            </h2>
            <p className="text-[#6B7993] text-xs md:text-sm">
              You have successfully completed your registration, you can now
              proceed to apply for a grant.
            </p>
          </div>
        </div>

        <button
          className="bg-[#14B151] text-sm py-2 font-medium md:text-base md:font-semibold md:py-3 text-white rounded-md mt-3"
          type="submit"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            navigate('/dashboard')
          }}
        >
          Proceed to Dashboard
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
