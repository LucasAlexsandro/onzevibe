import React from "react";
import * as S from "./style";
import { Container } from "../../pages/Home/style";
import Dev from "../../assets/setting-dynamic-color.png";
import Design from "../../assets/paint-kit-dynamic-color.png";

export default function Services() {
  return (
    <S.ServiceContainer>
      <Container>
        <S.ServiceArea>
          <S.Title>
            Nossos <span>Serviços</span>
          </S.Title>
          <div className="services-grid">
            <div className="services-box s-f">
              <div className="service-icon">
                <img src={Dev} />
              </div>
              <div className="service-text">
                <h3>Desenvolvimento</h3>
              </div>
            </div>
            <div className="services-box s-f">
              <div className="service-icon">
                <img src={Design} />
              </div>
              <div className="service-text">
                <h3>Desing</h3>
              </div>
            </div>
            <div className="services-box s-f">
              <div className="service-icon">
                <img src={Dev} />
              </div>
              <div className="service-text">
                <h3>Desenvolvimento</h3>
              </div>
            </div>
          </div>
        </S.ServiceArea>
      </Container>
    </S.ServiceContainer>
  );
}
