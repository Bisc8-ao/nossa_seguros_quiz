import "./main.scss";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";


import logo from "../../assets/images/NOSSA.png";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="_hm_wrapper">
      <div className="_hm_container">
        <img className="nossa_logo" src={logo} alt="" />
        <span className="_hm_title">Vamos Jogar?</span>

        <div className="_hm_btn_containers">
          <motion.button
            whileTap={{ scale: 0.85 }}
            className="_hm_start_game"
            onClick={() => navigate("/explanation")}
          >
            Jogar
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default Home;
