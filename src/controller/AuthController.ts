import axios from "../utils/Axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Inputs = {
  email: string;
  password: string;
};

type SetLoading = React.Dispatch<React.SetStateAction<boolean>>;

export const login = async (data: Inputs, setLoading: SetLoading) => {
  setLoading(true);
  await axios
    .post("auth/login", data)
    .then((response) => {
      if (response.data.status === true) {
        console.log(response);
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
            window.history.pushState(
              `${
                process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/auth-otp"
              }`,
              "auth-otp",
              `${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "/auth-otp"}`
            );
            window.location.reload();
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
