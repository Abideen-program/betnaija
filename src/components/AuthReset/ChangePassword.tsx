import { useState, useEffect } from "react";
import AuthLogo from "../../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { ChangePasswordData } from "../../utils/Types";
import { resetPassword } from "../../controller/AuthController";

const ChangePassword = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm<ChangePasswordData>({ mode: "all" });

  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const onSubmit: SubmitHandler<ChangePasswordData> = (formData) => {
    const newData = {
      otp: formData.otp,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
      email,
    };
    resetPassword(newData, setLoading, navigate);
  };

  useEffect(() => {
    let forgetPassWordEmail = JSON.parse(localStorage.getItem("email")!);
    setEmail(forgetPassWordEmail.email);
  }, []);

  console.log(email);

  return (
    <div className="h-[100vh] w-full bg-[#0D141D] flex flex-col items-center justify-center">
      <div className="min-w-[300px] md:w-[500px] py-5 px-7 flex flex-col md:gap-3 bg-[#363944] rounded-2xl border border-[#B6C6E3]">
        <div className="w-[150px] md:w-[210px] mx-auto text-center">
          <Link to={"/"}>
            <img
              src={AuthLogo}
              alt="Betnaija Logo"
              className="object-contain w-[150px] mx-auto"
            />
          </Link>
          <div className="flex flex-col mt-2 md:mt-7">
            <h2 className="text-white font-bold md:text-2xl tracking-wide">
              Welcome Back!
            </h2>
            <p className="text-[#6B7993] text-sm md:text-base">Login</p>
          </div>
        </div>

        <div className="my-3 md:my-6">
          <form
            className="flex flex-col gap-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="otp"
                className="text-white text-sm md:text-base md:font-medium"
              >
                OTP
              </label>
              <input
                className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base rounded-md"
                {...register("otp", { required: true })}
                name="otp"
                id="otp"
                placeholder="Enter Address"
                type="text"
              />
              {errors.otp && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-[10px] italic text-white rounded-md">
                  This field is required
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="password"
                className="text-white text-sm md:text-base md:font-medium"
              >
                Password
              </label>
              <div className="relative flex flex-col items-center justify-center">
                <input
                  className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base  rounded-md"
                  {...register("password", { required: true })}
                  name="password"
                  id="password"
                  placeholder="Enter your password address"
                  type={showPassword ? "text" : "password"}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs absolute text-[#B6C6E3] cursor-pointer right-2 my-auto"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
              {errors.password && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-[10px] italic text-white rounded-md">
                  This field is required
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="password_confirmation"
                className="text-white text-sm md:text-base md:font-medium"
              >
                Confirm Password
              </label>
              <div className="relative flex flex-col items-center justify-center">
                <input
                  className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base  rounded-md"
                  {...register("password_confirmation", {
                    required: "This field is required",
                    validate: (val) => {
                      if (watch("password") != val) {
                        return "Your passwords do no match";
                      }
                    },
                  })}
                  name="password_confirmation"
                  id="password_confirmation"
                  placeholder="Confirm Password"
                  type={showPassword ? "text" : "password"}
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs absolute text-[#B6C6E3] cursor-pointer right-2 my-auto"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              {errors.password_confirmation && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-[10px] italic text-white rounded-md">
                  {errors.password_confirmation.message}
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
              {loading ? "reseting..." : "Reset Password"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
