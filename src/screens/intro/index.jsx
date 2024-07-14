import "./main.scss";

import { useNavigate } from "react-router-dom";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer"
import MainButton from "../../components/buttons/mainButton/mainButton"

import hole from "../../assets/svg/hole.svg";


function Intro() {
  const navigate = useNavigate();

  return (
    <div className="in_wrapper">
      <Header />
      <div className="in_container">
        <img className="_in_nossa_logo" src={hole} alt="" />

        <div className="in_btn_containers">
          <MainButton text="Continuar"/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Intro;
