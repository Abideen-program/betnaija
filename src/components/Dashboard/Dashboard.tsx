import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="border border-green-400 flex-1 h-max">
          <p>Dashboard</p>
          <p>Dashboard</p>
          <p>Dashboard</p>
          <p>Dashboard</p>
          <p>Dashboard</p>
          <p>Dashboard</p>
          <p>Dashboard</p>
          <p>Dashboard</p>
          <p>Dashboard</p>
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
