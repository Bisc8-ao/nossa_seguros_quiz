import { useNavigate } from "react-router-dom";

import logo from '../../assets/images/NOSSA.png'

import "./main.scss";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="_hm_wrapper">
      <div className="_hm_container">
        <img src={logo} alt="" width="300"/>
        <span>Vamos Jogar?</span>

        <div className="_hm_btn_containers">
          <button className="_hm_start_game" onClick={() => navigate("/quiz")}>Jogar</button>
          <button className="_hm_cancel_game" onClick={() => navigate("/")}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
