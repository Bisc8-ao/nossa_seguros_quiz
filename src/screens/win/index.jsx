import "./main.scss";

import { useNavigate } from "react-router-dom";
import { useWindowSize } from "@react-hook/window-size";
import Confetti from "react-confetti";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"
import MainButton from "../../components/buttons/mainButton/mainButton"

import winLogo from "../../assets/svg/win.svg";

function Win() {
  const navigate = useNavigate();
  const { width, height } = useWindowSize();

  function handleClick() {
      navigate('/')
  }

  return (
    <div className="_wn_wrapper">
      <Confetti width={width} height={height} />
      <Header />
      <div className="_wn_container">
        <img className="_wn_nossa_logo" src={winLogo} alt="" />

        <div className="_wn_btn_containers">
          <MainButton text="Jogar Novamente" handleClick={handleClick} transitionDelay={500}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Win;
