import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AgentInfo from "./AgentInfo";
import NGOInfo from "./NGOInfo";

const UserInfo = () => {
  const navigate = useNavigate();

  const [slide, setSlide] = useState<number>(1);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("newuser")!);
    if (savedUser.usermeta) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <AgentInfo slide={slide} setSlide={setSlide}/>
      <NGOInfo slide={slide} setSlide={setSlide}/>
    </>
  );
};

export default UserInfo;
