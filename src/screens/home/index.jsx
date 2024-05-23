import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import logo from "../../assets/images/NOSSA.png";

import "./main.scss";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="_hm_wrapper">
      <div className="_hm_container">
        <img src={logo} alt="" width="300" />
        <span>Vamos Jogar?</span>

        <div className="_hm_btn_containers">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="_hm_start_game"
            onClick={() => {
              setTimeout(() => {
                navigate("/quiz");
              }, 500);
            }}
          >
            Jogar
          </motion.button>
          <motion.button whileTap={{ scale: 0.85 }}
            className="_hm_cancel_game"
            onClick={() => {
              setTimeout(() => {
                navigate("/");
              }, 500);
            }}>
            Cancelar
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Home;
