import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authlogin from "./components/Authlogin/Authlogin";
import AuthRegister from "./components/AuthRegister/AuthRegister";
import AuthReset from "./components/AuthReset/AuthReset";
import AuthOtp from "./components/AuthOtp/AuthOtp";
import UserInfo from "./components/UserInfo/UserInfo";
import ChangePassword from "./components/AuthReset/ChangePassword";
import Dashboard from "./components/Dashboard/Dashboard";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "auth-login",
      element: <Authlogin />,
    },

    {
      path: "auth-register",
      element: <AuthRegister />,
    },

    {
      path: "auth-reset",
      element: <AuthReset />,
    },

    {
      path: "auth-otp",
      element: <AuthOtp />,
    },

    {
      path: "user-info",
      element: <UserInfo />,
    },

    {
      path: "auth-change-password",
      element: <ChangePassword />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
