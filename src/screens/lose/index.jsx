import { useNavigate } from "react-router-dom";

import logo from '../../assets/images/NOSSA.png'

import "./main.scss";

function Lose() {
  const navigate = useNavigate();

  return (
    <div className="_lo_wrapper">
      <div className="_lo_container">
        <img src={logo} alt="" width="300"/>
        <span>Você Perdeu!</span>

        <div className="_lo_btn_containers">
          <button className="_lo_cancel_game" onClick={() => navigate("/")}>
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lose;
