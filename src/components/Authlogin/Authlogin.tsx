import { useState } from "react";
import AuthLogo from "../../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { login } from "../../controller/AuthController";

type Inputs = {
  email: string;
  password: string;
};

const Authlogin = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // getValues,
    // setValue,
    // reset
    // formState: { errors, isValid, isSubmitting },
    formState: { errors, isValid },
  } = useForm<Inputs>({ mode: "all" });

  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    login(formData, setLoading);
  };

  return (
    <div className="h-[100vh] w-full bg-[#0D141D] flex flex-col items-center justify-center">
      <div className="md:w-[500px] p-5 md:p-10 flex flex-col md:gap-6 bg-[#363944] rounded-3xl">
        <Link to={"/"}>
          <div className="w-[150px] md:w-[210px] mx-auto text-center">
            <img
              src={AuthLogo}
              alt="Betnaija Logo"
              className="object-contain w-full"
            />
            <div className="flex flex-col gap-3 mt-2 md:mt-7">
              <h2 className="text-white font-bold md:text-2xl tracking-wide">
                Welcome Back!
              </h2>
              <p className="text-[#6B7993] text-sm md:text-base">Login</p>
            </div>
          </div>
        </Link>

        <div className="my-3 md:my-6">
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
                className="border border-[#B6C6E3] focus:outline-none w-full p-2 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base rounded-md"
                {...register("email", { required: true })}
                name="email"
                id="email"
                placeholder="Enter your email address"
                type="text"
              />
              {errors.email && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-xs text-white rounded-md">
                  This field is required
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 relative">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-white text-sm md:text-base md:font-medium"
                >
                  Password
                </label>
                <Link to={"auth-reset"}>
                  <p className="text-xs text-[#14B151]">Forgot Password?</p>
                </Link>
              </div>
              <input
                className="border border-[#B6C6E3] focus:outline-none w-full p-2 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base  rounded-md"
                {...register("password", { required: true })}
                name="password"
                id="password"
                placeholder="Enter your password address"
                type="password"
              />
              {errors.password && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-xs text-white rounded-md">
                  This field is required
                </p>
              )}
            </div>

            <button
              disabled={loading || !isValid}
              className="bg-[#14B151] text-sm py-2 font-medium md:text-base md:font-semibold md:py-3 text-white rounded-md"
              type="submit"
            >
              {loading ? "loading..." : "Sign in"}
            </button>
          </form>
        </div>

        <div className="text-[#B6C6E3] text-center">
          <p className="text-xs md:text-sm">
            You don't have an account?{" "}
            <Link to={"auth-register"}>
              <span className="text-[#14B151]">Register</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Authlogin;
