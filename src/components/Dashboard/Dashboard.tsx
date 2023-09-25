import { SidebarProvider } from "../Context/SidebarContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Dashboard = () => {
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

// const logoutHandler = () => {
//   localStorage.clear();
//   navigate("/");
//   console.log('llog')
// };
