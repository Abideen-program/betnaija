import { useState } from "react";
import AuthLogo from "../../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { authRegister } from "../../controller/AuthController";
import { RegisterInputs, AuthFormProps } from "../../utils/Types";

const AuthForm = ({ user, setUser }: AuthFormProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    // getValues,
    // setValue,
    // reset
    // formState: { errors, isValid, isSubmitting },
    formState: { errors, isValid },
  } = useForm<RegisterInputs>({ mode: "all" });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<RegisterInputs> = (formData) => {
    setUser({
      ...user,
      email: formData.email,
      phone: formData.phone,
      password: formData.password,
    });
    const newFormData = {
      email: formData.email,
      password: formData.password,
      phone: formData.phone,
      password_confirmation: formData.password_confirmation,
      usertype: user.usertype,
    };
    authRegister(newFormData, setLoading, navigate);
  };

  return (
    <div className="md:h-[100vh] bg-[#0D141D] py-10 flex flex-col  justify-center">
      <div className="min-w-[300px] md:w-[500px] p-5 flex flex-col bg-[#363944] rounded-2xl m-auto border border-[#B6C6E3]">
        <div className="w-[150px] md:w-[400px] mx-auto text-center">
          <Link to={"/"}>
            <img
              src={AuthLogo}
              alt="Betnaija Logo"
              className="object-contain w-[150px] mx-auto"
            />
          </Link>
          <div className="flex flex-col gap-2 mt-2 md:mt-3">
            <h2 className="text-white font-bold md:text-2xl tracking-wide">
              Hi there, you're welcome.
            </h2>
            <p className="text-[#6B7993] text-sm md:text-base">
              Let's get started.
            </p>
          </div>
        </div>

        <div className="my-3 md:my-6">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="email"
                className="text-white text-sm md:text-base md:font-medium"
              >
                Email Address
              </label>
              <input
                className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base rounded-md"
                {...register("email", { required: true })}
                name="email"
                id="email"
                placeholder="Enter Address"
                type="text"
              />
              {errors.email && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-xs text-white rounded-md">
                  This field is required
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="phone"
                className="text-white text-sm md:text-base md:font-medium"
              >
                Phone phone
              </label>
              <input
                className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base rounded-md"
                {...register("phone", { required: true })}
                name="phone"
                id="phone"
                placeholder="Phone Number"
                type="tel"
              />
              {errors.phone && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-xs text-white rounded-md">
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
                  className="text-xs absolute text-[#B6C6E3] cursor-pointer right-4 my-auto"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>
              {errors.password && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-xs text-white rounded-md">
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
                    required: true,
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
                  className="text-xs absolute text-[#B6C6E3] cursor-pointer right-4 my-auto"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
              </div>

              {errors.password_confirmation && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-xs text-white rounded-md">
                  {errors.password_confirmation.message}
                </p>
              )}
            </div>

            <button
              disabled={loading || !isValid}
              className={`${
                !isValid ? "bg-[#25754B]" : "bg-[#14B151]"
              }  text-sm py-2 font-medium md:text-base md:font-semibold md:py-3 text-white rounded-md mt-3`}
              type="submit"
            >
              {loading ? "loading..." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
