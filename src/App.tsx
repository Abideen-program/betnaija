import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authlogin from "./components/Authlogin/Authlogin";
import AuthRegister from "./components/AuthRegister/AuthRegister";
import AuthReset from "./components/AuthReset/AuthReset";
import AuthOtp from "./components/AuthOtp/AuthOtp";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
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
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
