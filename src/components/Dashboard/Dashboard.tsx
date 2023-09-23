import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="border border-green-400 flex-1 h-max">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

// const logoutHandler = () => {
//   localStorage.clear();
//   navigate("/");
//   console.log('llog')
// };
