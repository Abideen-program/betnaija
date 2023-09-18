import { useState, useEffect } from "react";
import AuthLogo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import AuthFooter from "../AuthFooter/AuthFooter";
import { validateOtp, resendOtp } from "../../controller/AuthController";

interface User {
  email: string;
}

const AuthOtp = () => {
  const navigate = useNavigate();

  const { handleSubmit } = useForm({ mode: "all" });

  const [loading, setLoading] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  const [user, setUser] = useState<User>();
  const [timeLeft, setTimeLeft] = useState<number>(0);

  const onSubmit = () => {
    const otpData = {
      email: user?.email,
      otp,
    };

    validateOtp(otpData, setLoading, navigate);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("newuser") as string);

    if (user) {
      setUser(user);
    }
    setTimeLeft(179);
  }, []);

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [timeLeft]);

  const handledResend = () => {
    resendOtp({ email: user?.email });
    setTimeLeft(179);
  };

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("newuser")!);

    if (savedUser.usermeta) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <div className="h-[calc(100vh_-_70px)] w-full bg-[#0D141D] flex flex-col items-center justify-center">
        <div className="w-[300px] md:w-[550px] p-5 md:p-10 flex flex-col gap-6 bg-[#363944] rounded-2xl border border-[#B6C6E3]">
          <div className="mx-auto text-center">
            <Link to={"/"}>
              <img
                src={AuthLogo}
                alt="Betnaija Logo"
                className="object-contain w-[150px] mx-auto"
              />
            </Link>
            <div className="flex flex-col gap-3 mt-2 md:mt-7">
              <h2 className="text-white font-bold md:text-2xl tracking-wide">
                Confirm OTP
              </h2>
              <p className="text-[#6B7993] text-sm">
                Please provide the OTP sent to the email you provided earlier.
              </p>
            </div>
          </div>

          <div className="my-3">
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <OTPInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderInput={(props) => <input {...props} />}
                renderSeparator={<span>&nbsp;&nbsp;</span>}
                inputStyle={{ width: 40, height: 40, borderRadius: 5 }}
                containerStyle={"mx-auto"}
                shouldAutoFocus={true}
              />

              <button
                disabled={loading || otp.length < 4}
                className={`${
                  otp.length < 4 ? "bg-[#25754B]" : "bg-[#14B151]"
                }  text-sm py-2 font-medium md:text-base md:font-semibold md:py-3 text-white rounded-md mt-3`}
                type="submit"
              >
                {loading ? "verifying..." : "Continue"}
              </button>

              <div className="text-center">
                {timeLeft > 0 && (
                  <p className="text-[#6B7993] font-medium text-sm md:text-base">
                    Time Remaining{" "}
                    <span className="text-red-600">
                      {String("0" + Math.floor(timeLeft / 60))} :{" "}
                      {String("0" + Math.floor(timeLeft % 60)).slice(-2)}
                    </span>
                  </p>
                )}

                {timeLeft === 0 && (
                  <p className="text-[#6B7993] font-medium text-sm md:text-base">
                    Didn’t get any OTP?&nbsp;
                    <span
                      className="text-red-600 cursor-pointer"
                      onClick={handledResend}
                    >
                      Resend
                    </span>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default AuthOtp;
