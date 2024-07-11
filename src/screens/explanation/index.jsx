import "./main.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/images/NOSSA.png";

function Explanation() {
  const navigate = useNavigate();

  function handleClick() {
    setTimeout(() => {
      navigate("/quiz");
    }, 500)
  }

  return (
    <div className="_ex_wrapper">
      <div className="_ex_container">
        <img className="nossa_logo" src={logo} alt="" />
        <p>
        <span className="_ex_title">Lorem Ipsum Dolor</span>
        <span className="_ex_title">Lorem Ipsum Dolor</span>
        <span className="_ex_title">Lorem Ipsum Dolor</span>
        </p>

        <div className="_ex_btn_containers">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="_ex_start_game"
            onClick={() => handleClick()}
          >
            Continuar
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Explanation;
