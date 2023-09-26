import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "../Context/SidebarContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  //check if there is a saved user, if not go back to the login page
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("newuser")!);

    if (!savedUser) {
      navigate("/auth-login");
    }
  }, []);

  return (
    <>
      <SidebarProvider>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header />
            <Main />
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </>
  );
};

export default Dashboard;
