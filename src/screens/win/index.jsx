import { useNavigate } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

import logo from "../../assets/images/NOSSA.png";
import champion from "../../assets/animations/champions.json";

import "./main.scss";

function Win() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  return (
    <div className="_wn_wrapper">
      <Confetti width={width} height={height} />
      <div className="_wn_container">
        <img className="_wn_nossa_logo" src={logo} alt="" width="300" />
        <span className="_wn_title">Você Ganhou!</span>

        <div>
          <Player src={champion} className="player" loop autoplay />
        </div>

        <div className="_wn_btn_containers">
          <button className="_wn_restart" onClick={() => navigate("/")}>
            Jogar de Novo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Win;
