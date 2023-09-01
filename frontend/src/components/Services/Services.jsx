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
            O que nós <span>Fazemos</span>
          </S.Title>
          <div className="services-grid">
            <div className="services-box ">
              <h4>Desenvolvimento de Produto</h4>
              <hr></hr>
              <ul>
                <li>
                  <a href="">Estrategia de Produto</a>
                </li>
                <li>
                  <a href="">Desenvolvimento Front-end</a>
                </li>
                <li>
                  <a href="">Desenvolvimento Back-end</a>
                </li>
                <li>
                  <a href="">Quality Assurance</a>
                </li>
                <li>
                  <a href="">Suporte</a>
                </li>
              </ul>
            </div>
            <div className="services-box ">
              <h4>Design de Produto</h4>
              <hr></hr>
              <ul>
                <li>
                  <a href="">Estrategia</a>
                </li>
                <li>
                  <a href="">Graphc Design</a>
                </li>
                <li>
                  <a href="">Estrategia de Produto</a>
                </li>
                <li>
                  <a href="">Estrategia de Produto</a>
                </li>
                <li>
                  <a href="">Estrategia de Produto</a>
                </li>
              </ul>
            </div>
            <div className="services-box ">
              <h4>Desenvolvimento de Produto</h4>
              <hr></hr>
              <ul>
                <li>
                  <a href="">Estrategia de Produto</a>
                </li>
                <li>
                  <a href="">Estrategia de Produto</a>
                </li>
                <li>
                  <a href="">Estrategia de Produto</a>
                </li>
                <li>
                  <a href="">Estrategia de Produto</a>
                </li>
                <li>
                  <a href="">Estrategia de Produto</a>
                </li>
              </ul>
            </div>
          </div>
        </S.ServiceArea>
      </Container>
    </S.ServiceContainer>
  );
}