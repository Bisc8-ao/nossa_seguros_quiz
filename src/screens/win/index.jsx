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
        <img src={logo} alt="" width="300" />
        <span>Você Ganhou!</span>

        <div>
          <Player
            src={champion}
            className="player"
            loop
            autoplay
            style={{ height: "450px", width: "450px" }}
          />
        </div>

        <div className="_wn_btn_containers">
          <button className="_wn_cancel_game" onClick={() => navigate("/")}>
            Jogar de Novo
          </button>
        </div>
      </div>
    </div>
  );
}

export default Win;
