import "./main.scss";

import { useNavigate } from "react-router-dom";

import Header from "../../components/header/index";
import Footer from "../../components/footer/index"
import MainButton from "../../components/buttons/mainButton/index"

import hole from "../../assets/svg/hole.svg";

function Intro() {
  const navigate = useNavigate();

  function handleClick() {
      navigate('/quiz')
  }

  return (
    <div className="_in_wrapper">
      <Header />
      <div className="_in_container">
        <img className="_in_nossa_logo" src={hole} alt="" />

        <div className="_in_btn_containers">
          <MainButton text="Continuar" handleClick={handleClick} transitionDelay={500}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Intro;
