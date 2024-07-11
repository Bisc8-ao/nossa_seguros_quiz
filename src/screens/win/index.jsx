import { useNavigate, useLocation } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

import logo from "../../assets/images/NOSSA.png";
import champion from "../../assets/animations/champions.json";

import "./main.scss";

function Win() {
  const navigate = useNavigate();
  const location = useLocation();
  const { width, height } = useWindowSize();
  const message = location.state?.message || "Você venceu o Jogo"; // Mensagem padrão caso não seja passada

  return (
    <div className="_wn_wrapper">
      <Confetti width={width} height={height} />
      <div className="_wn_container">
        <img className="_wn_nossa_logo" src={logo} alt="Logo" />
        <span className="_wn_title">{message}</span>
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
