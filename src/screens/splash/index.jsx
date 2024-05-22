import { useNavigate } from "react-router-dom";
import "./main.scss";

import logo from "../../assets/images/NOSSA.png";

export default function Splash() {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate("/home")
    }, 5000);

  return (
    <div className="_sp_wrapper">
      <img className="_sp_logo-nossa teste" src={logo} alt="" />
    </div>
  );
}
