import { BrowserRouter, Route, Routes } from "react-router-dom";

import Splash from "../screens/splash/index";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
  </BrowserRouter>
  )
};

export default Router;
