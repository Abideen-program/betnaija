import { useState } from "react";
import AuthLogo from "../../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AgentName } from "../../utils/Types";
import AuthFooter from "../AuthFooter/AuthFooter";

const AgentInfo = () => {
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
  } = useForm<AgentName>({ mode: "all" });

  const onSubmit: SubmitHandler<AgentName> = () => {};

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
                  htmlFor="firstName"
                  className="text-white text-xs md:text-sm md:font-medium"
                >
                  Agent First Name
                </label>
                <input
                  className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base rounded-md"
                  {...register("firstName", { required: true })}
                  name="firstName"
                  id="firstName"
                  placeholder="Agent First Name"
                  type="text"
                />
                {errors.firstName && (
                  <p className="absolute right-0 bg-[#ED756B] p-1 text-[10px] italic text-white rounded-md">
                    This field is required
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-1 relative">
                <label
                  htmlFor="lastName"
                  className="text-white text-xs md:text-sm md:font-medium"
                >
                  Agent Last Name
                </label>
                <input
                  className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] text-white text-sm md:text-base rounded-md"
                  {...register("lastName", { required: true })}
                  name="lastName"
                  id="lastName"
                  placeholder="Agent Last Name"
                  type="text"
                />
                {errors.lastName && (
                  <p className="absolute right-0 bg-[#ED756B] p-1 text-[10px] italic text-white rounded-md">
                    This field is required
                  </p>
                )}
              </div>

              <button
                disabled={!isValid}
                className={`${
                  !isValid ? "bg-[#25754B]" : "bg-[#14B151]"
                }  text-sm py-2 font-medium md:text-base md:font-semibold md:py-3 text-white rounded-md mt-3`}
                type="submit"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
      <AuthFooter />
    </>
  );
};

export default AgentInfo;
