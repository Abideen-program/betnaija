import { useState, useEffect } from "react";
import AuthLogo from "../../assets/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { NgoDetails } from "../../utils/Types";
import AuthFooter from "../AuthFooter/AuthFooter";
import { stepper } from "../../utils/stepper";
import { states } from "../../utils/states";
import SuccessPage from "./SuccessPage";
import { createUserProfile } from "../../controller/AuthController";

const NGOInfo = () => {
  const {
    register,
    handleSubmit,
    // watch,
    // getValues,
    // setValue,
    // reset
    // formState: { errors, isValid, isSubmitting },
    formState: { errors, isValid },
  } = useForm<NgoDetails>({ mode: "all" });

  const [ngoDetails, setNgoDetails] = useState({
    user_type: "",
    ngo_name: "",
    office_address: "",
    phone: "",
    name: "",
    email: "",
    cac: "",
    date_of_registration: "",
    website_url: "",
    agent_code: "",
    document: "",
  });
  const [slide, setSlide] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit: SubmitHandler<NgoDetails> = (formData) => {
    setNgoDetails({
      ...ngoDetails,
      name: formData.name,
      ngo_name: formData.ngo_name,
    });

    setSlide(2);
  };

  console.log(ngoDetails);

  const onFinish: SubmitHandler<NgoDetails> = (formData) => {
    const newFormData = {
      name: ngoDetails.name,
      office_address: formData.office_address,
      agent_code: formData.agent_code,
      region: formData.region,
    };

    createUserProfile(newFormData, setLoading, setSlide);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("newuser")!);
    setNgoDetails({
      ...ngoDetails,
      ...user,
    });
  }, []);

  return (
    <>
      {slide === 1 && ngoDetails.user_type === "ngo" && (
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
              <div className="flex flex-col gap-3 mt-2">
                {stepper(0, setSlide)}
                <h2 className="text-white font-bold md:text-xl tracking-wide">
                  Welcome! First things first...
                </h2>
                <p className="text-[#6B7993] text-xs md:text-sm">
                  Let's get to know who you are.
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
                    htmlFor="ngo_name"
                    className="text-white text-xs md:text-sm md:font-medium"
                  >
                    Name of NGO
                  </label>
                  <input
                    className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] placeholder:text-xs text-white text-sm md:text-base rounded-md"
                    {...register("ngo_name", { required: true })}
                    name="ngo_name"
                    id="ngo_name"
                    placeholder="Name of NGO"
                    type="text"
                  />
                  {errors.ngo_name && (
                    <p className="absolute right-0 bg-[#ED756B] p-1 text-[10px] italic text-white rounded-md">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1 relative">
                  <label
                    htmlFor="name"
                    className="text-white text-xs md:text-sm md:font-medium"
                  >
                    Personal Name
                  </label>
                  <input
                    className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] placeholder:text-xs text-white text-sm md:text-base rounded-md"
                    {...register("name", { required: true })}
                    name="name"
                    id="name"
                    placeholder="Personal Name"
                    type="text"
                  />
                  {errors.name && (
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
      )}

      {slide === 2 && ngoDetails.user_type === "ngo" && (
        <div className="min-h-full p-5 md:p-0 md:min-h-screen w-full bg-[#0D141D] flex flex-col items-center justify-center">
          <div className="w-[300px] md:w-[500px] py-5 px-7 flex flex-col md:gap-6 bg-[#363944] rounded-2xl border border-[#B6C6E3]">
            <div className="mx-auto text-center">
              <Link to={"/"}>
                <img
                  src={AuthLogo}
                  alt="Betnaija Logo"
                  className="object-contain w-[150px] mx-auto"
                />
              </Link>
              <div className="flex flex-col gap-2">
                {stepper(1, setSlide)}
                <h2 className="text-white font-bold md:text-xl tracking-wide">
                  Well done! Just finish up
                </h2>
                <p className="text-[#6B7993] text-xs md:text-sm">
                  You are a agent, so let's have your CAC Number
                </p>
              </div>
            </div>

            <div className="my-3 ">
              <form
                className="flex flex-col gap-6"
                onSubmit={handleSubmit(onFinish)}
              >
                <div className="flex flex-col gap-1 relative">
                  <label
                    htmlFor="agent_code"
                    className="text-white text-xs md:text-sm md:font-medium"
                  >
                    CAC Registration No.
                  </label>
                  <input
                    className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] placeholder:text-xs text-white text-sm md:text-base rounded-md"
                    {...register("agent_code", { required: true })}
                    name="agent_code"
                    id="agent_code"
                    placeholder="CAC Registration No."
                    type="text"
                  />
                  {errors.agent_code && (
                    <p className="absolute right-0 bg-[#ED756B] p-1 text-[10px] italic text-white rounded-md">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1 relative">
                  <label
                    htmlFor="office_address"
                    className="text-white text-xs md:text-sm md:font-medium"
                  >
                    State
                  </label>

                  <select
                    {...register("office_address", { required: true })}
                    name="office_address"
                    id="office_address"
                    className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] placeholder:text-xs text-white text-sm md:text-base rounded-md"
                  >
                    <option value="" className="text-sm md:text-base">
                      Select State
                    </option>
                    {states.map((state) => {
                      return (
                        <option
                          className="text-sm md:text-base"
                          value={state}
                          key={state}
                        >
                          {state}
                        </option>
                      );
                    })}
                  </select>

                  {errors.office_address && (
                    <p className="absolute right-0 bg-[#ED756B] p-1 text-[10px] italic text-white rounded-md">
                      This field is required
                    </p>
                  )}
                </div>

                <div className="flex flex-col gap-1 relative">
                  <label
                    htmlFor="region"
                    className="text-white text-xs md:text-sm md:font-medium"
                  >
                    Location
                  </label>
                  <input
                    className="border border-[#B6C6E3] focus:outline-none w-full p-3 bg-[#141C26] placeholder:text-[#B6C6E3] placeholder:text-xs text-white text-sm md:text-base rounded-md"
                    {...register("region", { required: true })}
                    name="region"
                    id="region"
                    placeholder="Location"
                    type="text"
                  />
                  {errors.region && (
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
                  {loading ? "Creating..." : "Continue"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {slide === 6 && ngoDetails.user_type === "agent" && <SuccessPage />}
      <AuthFooter />
    </>
  );
};

export default NGOInfo;
