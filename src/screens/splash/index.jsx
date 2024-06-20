import "./main.scss";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

import logo from "../../assets/images/NOSSA.png";

export default function Splash() {
  const navigate = useNavigate();
  const rand = Math.floor(Math.random() * (3 + 1));

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  });

  return (
    <div className="_sp_wrapper">
      <motion.img
        className="_sp_logo-nossa teste"
        src={logo}
        alt=""
        animate={{
          scale: [1],
          rotate: [110, -80, 110],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          // times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          // repeatDelay: 1,
        }}
      />
    </div>
  );
}
