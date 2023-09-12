import { useState } from "react";
import AuthLogo from "../../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { login } from "../../controller/AuthController";

type Inputs = {
  email: string;
  password: string;
  number: number;
  cpassword: string;
};

const AuthForm = () => {
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
    <div className="bg-[#0D141D] py-10 flex flex-col  justify-center">
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
                htmlFor="number"
                className="text-white text-sm md:text-base md:font-medium"
              >
                Phone Number
              </label>
              <input
                className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base rounded-md"
                {...register("number", { required: true })}
                name="number"
                id="number"
                placeholder="Phone Number"
                type="tel"
              />
              {errors.number && (
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
              <input
                className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base rounded-md"
                {...register("password", { required: true })}
                name="password"
                id="password"
                placeholder="Enter Your Password"
                type="password"
              />
              {errors.password && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-xs text-white rounded-md">
                  This field is required
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1 relative">
              <label
                htmlFor="cpassword"
                className="text-white text-sm md:text-base md:font-medium"
              >
                Confirm Password
              </label>
              <input
                className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base rounded-md"
                {...register("cpassword", { required: true })}
                name="cpassword"
                id="cpassword"
                placeholder="Confirm Password"
                type="password"
              />
              {errors.cpassword && (
                <p className="absolute right-0 bg-[#ED756B] p-1 text-xs text-white rounded-md">
                  This field is required
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
