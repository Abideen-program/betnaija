import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AgentInfo from "./AgentInfo";

const UserInfo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("newuser")!);
    if (savedUser.usermeta) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <AgentInfo />
    </>
  );
};

export default UserInfo;
