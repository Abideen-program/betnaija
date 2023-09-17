import { useState } from "react";
import AuthLogo from "../../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { EmailInputs } from "../../utils/Types";
import { forgetPassword } from "../../controller/AuthController";
import AuthFooter from "../AuthFooter/AuthFooter";

const AuthReset = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    // watch,
    // getValues,
    // setValue,
    // reset
    // formState: { errors, isValid, isSubmitting },
    formState: { errors, isValid },
  } = useForm<EmailInputs>({ mode: "all" });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<EmailInputs> = (formData) => {
    const data = { email: formData.email };
    localStorage.setItem("email", JSON.stringify(data));
    forgetPassword(data, setLoading, navigate);
  };

  return (
    <>
      <div className="h-[calc(100vh_-_60px)] w-full bg-[#0D141D] flex flex-col items-center justify-center">
        <div className="w-[300px] md:w-[500px] p-5 md:p-10 flex flex-col md:gap-6 bg-[#363944] rounded-2xl border border-[#B6C6E3]">
          <div className="mx-auto text-center">
            <Link to={"/"}>
              <img
                src={AuthLogo}
                alt="Betnaija Logo"
                className="object-contain w-[150px] mx-auto"
              />
            </Link>
            <div className="flex flex-col gap-3 mt-2 md:mt-7">
              <h2 className="text-white font-bold md:text-xl tracking-wide">
                Reset password
              </h2>
              <p className="text-[#6B7993] text-xs md:text-sm">
                If you forgot your password, do not worry, we'll email you an
                OTP to reset your password.
              </p>
            </div>
          </div>

          <div className="my-3 ">
            <form
              className="flex flex-col gap-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="email"
                  className="text-white text-sm md:text-base md:font-medium"
                >
                  Email
                </label>
                <input
                  className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] placeholder:text-xs text-white text-sm md:text-base rounded-md"
                  {...register("email", {
                    required: "This field is required",
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid email address",
                    },
                  })}
                  name="email"
                  id="email"
                  placeholder="Enter your email address"
                  type="email"
                />
                {errors.email && (
                  <p className="absolute right-0 bg-[#ED756B] p-1 text-[10px] italic text-white rounded-md">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button
                disabled={loading || !isValid}
                className={`${
                  loading || !isValid ? "bg-[#25754B]" : "bg-[#14B151]"
                }  text-sm py-2 font-medium md:text-base md:font-semibold md:py-3 text-white rounded-md mt-3`}
                type="submit"
              >
                {loading ? "requesting..." : "Get OTP"}
              </button>
            </form>
          </div>

          <div className="text-[#B6C6E3] text-center">
            <Link to={"/"}>
              <p className="text-xs md:text-sm text-[#14B151]">
                Return to login
              </p>
            </Link>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default AuthReset;
