import { useContext } from "react"
import "./main.scss";
import { useNavigate } from "react-router-dom";
import { SoundContext } from "../../context/soundContext";

import logo from '../../assets/images/NOSSA.png'


function Lose() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/")
  }

  return (
    <div className="_lo_wrapper">
      <div className="_lo_container">
        <img src={logo} alt=""/>
        <span>Você Perdeu!</span>

        <div className="_lo_btn_containers">
          <button className="_lo_cancel_game" onClick={() => handleClick()}>
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lose;
