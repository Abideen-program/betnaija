import { SidebarProvider } from "../Context/SidebarContext";
import Header from "./Header";
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
