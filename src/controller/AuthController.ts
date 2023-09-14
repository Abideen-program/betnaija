import axios from "../utils/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavigateFunction } from "react-router-dom";
import {
  LoginInputs,
  RegisterInputs,
  OtpData,
  ResendOtpData,
  EmailInputs,
  ChangePasswordData,
} from "../utils/Types";

type SetLoading = React.Dispatch<React.SetStateAction<boolean>>;
type Navigate = NavigateFunction;

export const login = async (
  data: LoginInputs,
  setLoading: SetLoading,
  navigate: Navigate
) => {
  setLoading(true);
  await axios
    .post("auth/login", data)
    .then((response) => {
      if (response.data.status === true) {
        let user = response.data;
        if (
          user.data.user == undefined ||
          (user.data.user.user_type != "agent" &&
            user.data.user.user_type != "ngo")
        ) {
          toast.error("Unknown User, Please login with another credentials", {
            theme: "colored",
          });
        } else {
          localStorage.setItem("user", JSON.stringify(user["data"]["user"]));
          localStorage.setItem("_token", user["data"]["access_token"]);

          //check if the user has not verifed his email
          if (user.data.user.email_verified_at == null) {
            navigate("/auth-otp");
          } //check if the user has completed his registration
          else if (
            user.data.user.email_verified_at != null &&
            (user.data.user.usermeta == null ||
              user.data.user.usermeta.name == undefined)
          ) {
            navigate('/user-info')
          } else {
            navigate('/')
          }
        }
      } else {
        toast.error(response.data.message, { theme: "colored" });
      }
    })
    .catch((err) => {
      toast.error(err.response.data, { theme: "colored" });
    });

  setLoading(false);
};

export const authRegister = async (
  data: RegisterInputs,
  setLoading: SetLoading,
  navigate: Navigate
) => {
  setLoading(true);
  await axios
    .post("auth/register", data)
    .then((response) => {
      if (response.data.status === true) {
        let user = response.data;
        if (user.data.user === undefined) {
          toast.error(
            "Unknown User, Please register with another credentials",
            {
              theme: "colored",
            }
          );
        } else {
          toast.success(response.data.message, { theme: "colored" });
          localStorage.setItem("newuser", JSON.stringify(user["data"]["user"]));
          localStorage.setItem("_newToken", user["data"]["access_token"]);

          navigate("/auth-otp");
        }
      } else {
        toast.error(response.data.message, { theme: "colored" });
      }
    })
    .catch((err) => {
      toast.error(err.response.data, { theme: "colored" });
      console.log(err);
    });
  setLoading(false);
};

export const validateOtp = async (
  data: OtpData,
  setLoading: SetLoading,
  navigate: Navigate
) => {
  setLoading(true);
  await axios
    .post("auth/otp/validate", data)
    .then((response) => {
      if (response.data.status === true) {
        console.log(response);
        navigate("/user-info");
      } else {
        toast.error(response.data.message, { theme: "colored" });
      }
    })
    .catch((err) => {
      toast.error(err.response.data, { theme: "colored" });
    });

  setLoading(false);
};

export const resendOtp = async (data: ResendOtpData) => {
  await axios
    .post("auth/otp/resend", data)
    .then((response) => {
      if (response.data.status === true) {
        toast.success(response.data.message, { theme: "colored" });
      } else {
        toast.error(response.data.message, { theme: "colored" });
      }
    })
    .catch((err) => {
      toast.error(err.response.data, { theme: "colored" });
    });
};

export const forgetPassword = async (
  data: EmailInputs,
  setLoading: SetLoading,
  navigate: Navigate
) => {
  setLoading(true);
  await axios
    .post("auth/password/requestPassword", data)
    .then((response) => {
      if (response.data.status === true) {
        // localStorage.setItem("password", JSON.stringify(response.data.data));
        navigate("/auth-change-password");
        toast.success(response.data.message, { theme: "colored" });
      } else {
        toast.error(response.data.message, { theme: "colored" });
      }
    })
    .catch((err) => {
      toast.error(err.response.data, { theme: "colored" });
    });
  setLoading(false);
};

export const resetPassword = async (
  data: ChangePasswordData,
  setLoading: SetLoading,
  naviagte: Navigate
) => {
  setLoading(true);
  await axios
    .post("auth/password/resetPassword", data)
    .then((response) => {
      if (response.data.status === true) {
        console.log(response);
        toast.success(response.data.message, { theme: "colored" });
        naviagte("/");
      } else {
        toast.error(response.data.message, { theme: "colored" });
      }
    })
    .catch((err) => {
      toast.error(err.response.data, { theme: "colored" });
    });
  setLoading(false);
};
