import React from "react";
import * as H from "./style";
import { Container } from "../../pages/Home/style";
import Mar from "../../assets/mar.png";

export default function Hero() {
  return (
    <H.HeroContainer>
      <div className="hero-content">
        <h1>Desperte seu negócio pro digital</h1>
      </div>
      <div className="hero-bottom">
        <h3>vibre na mesma frequência do seu cliente</h3>
        <img src={Mar} alt="icon-mar" />
      </div>
    </H.HeroContainer>
  );
}
