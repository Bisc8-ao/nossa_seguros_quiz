import { BrowserRouter, Route, Routes } from "react-router-dom";

import Splash from "../screens/splash/index";
import Home from "../screens/home";
import Levels from "../screens/Levels";
import Quiz from "../screens/quiz";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/levels" element={<Levels />} />
      <Route path="/quiz" element={<Quiz />} />
    </Routes>
  </BrowserRouter>
  )
};

export default Router;
