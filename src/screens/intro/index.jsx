import "./main.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


import logo from "../../assets/images/NOSSA.png";


function Intro() {
  const navigate = useNavigate();

  return (
    <div className="in_wrapper">
      <div className="in_container">
        <img className="nossa_logo" src={logo} alt="" />
        <span className="in_title">Lorem Ipsum dolor</span>
        <span className="in_title">Lorem Ipsum dolor</span>

        <div className="in_btn_containers">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="in_start_game"
            onClick={() => {
              setTimeout(() => {
                navigate("/quiz");
              }, 500);
            }}
          >
            Continuar
          </motion.button>
          
        </div>
      </div>
    </div>
  );
}

export default Intro;
