import React, { useState } from "react";
import * as H from "./style";
import Logo from "../../assets/LOGO.png";
import Btn from "../Buttons/Btn";
import { Container } from "../../pages/Home/style";
import { BiGridAlt } from "react-icons/bi";
import { TfiClose  } from "react-icons/tfi";

export default function index() {
  const [toggleMenu, setToggleMenu] = useState(false)

  window.addEventListener("keyup", (e) => {
    if(!toggleMenu == false){
      if(e.key === "Escape" || e.key === "Esc") {
        setToggleMenu(false)
        console.log("teste")
      }
    }
  })

  return (
    <>
      <H.HeaderContainer>
        <Container>
          <H.HeaderNav>
            <div className="header-logo">
              <img src={Logo} />
            </div>
            <div className="header-items">
              <button className="header-btn" onClick={() => setToggleMenu(true)}>
                <BiGridAlt />
              </button>
            </div>
          </H.HeaderNav>
        </Container>
        <H.MenuFull active={toggleMenu}>
          <button onClick={() => setToggleMenu(false)}><TfiClose/></button>
          <ul>
            <li>
              <a href="#">
                <span>01</span> Home
              </a>
            </li>
            <li>
              <a href="#">
                <span>02</span> Sobre
              </a>
            </li>
            <li>
              <a href="">
                <span>03</span> Portfólio
              </a>
            </li>
            <li>
              <a href="">
                <span>04</span> Contato
              </a>
            </li>
          </ul>
        </H.MenuFull>
      </H.HeaderContainer>
    </>
  );
}
