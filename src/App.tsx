import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Authlogin from "./components/Authlogin/Authlogin";
import AuthRegister from "./components/AuthRegister/AuthRegister";
import AuthReset from "./components/AuthReset/AuthReset";

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
  ]);

  return (
    <>
     <RouterProvider router={router}/>
    </>
  );
};

export default App;
