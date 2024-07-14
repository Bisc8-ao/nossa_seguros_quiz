import "./main.scss";

import { motion } from "framer-motion";

function MainButton({ text, handleClick }) {


  return (
    <motion.button
      whileTap={{ scale: 0.85 }}
      className="_mb_btn"
      onClick={() => handleClick()}
    >
      <span>{text}</span>
    </motion.button>
  );
}

export default MainButton;
