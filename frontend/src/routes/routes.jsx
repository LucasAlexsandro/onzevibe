import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from "../pages/Home/Home";
import Bio from "../pages/Bio/Bio";

const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/bio" exact element={<Bio />} />
      </Routes>
    </Router>
  );
}

export default RoutesConfig;