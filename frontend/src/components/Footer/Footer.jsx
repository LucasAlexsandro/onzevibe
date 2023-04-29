import React from "react";
import * as F from "./style";
import { Container } from "../../pages/Home/style";
import Logo from "../../assets/LOGO.png";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineBehance, AiFillFacebook, AiOutlineWhatsApp } from "react-icons/ai"

export default function Footer() {
  return (
    <>
      <F.FooterContainer>
        <Container>
          <F.FooterArea>
            <div class="footer-grid">
              <div class="footer-card">
                <img src={Logo} />
              </div>
              <div class="footer-card">
                <ul>
                  <h3>Links</h3>
                  <li>
                    <a href="#"># Home</a>
                  </li>
                  <li>
                    <a href="#"># Company Details</a>
                  </li>
                  <li>
                    <a href="#"># Our Newsfeed</a>
                  </li>
                  <li>
                    <a href="#"># Service Standard</a>
                  </li>
                  <li>
                    <a href="#"># Team Members</a>
                  </li>
                </ul>
              </div>
              <div class="footer-card">
                <ul>
                  <h3>Politicas</h3>
                  <li>
                    <a href="#"># Home</a>
                  </li>
                  <li>
                    <a href="#"># Company Details</a>
                  </li>
                  <li>
                    <a href="#"># Our Newsfeed</a>
                  </li>
                  <li>
                    <a href="#"># Service Standard</a>
                  </li>
                  <li>
                    <a href="#"># Team Members</a>
                  </li>
                </ul>
              </div>
              <div class="footer-card">
                <ul>
                  <h3>Links</h3>
                  <li>
                    <a href="#"># Home</a>
                  </li>
                  <li>
                    <a href="#"># Company Details</a>
                  </li>
                  <li>
                    <a href="#"># Our Newsfeed</a>
                  </li>
                  <li>
                    <a href="#"># Service Standard</a>
                  </li>
                  <li>
                    <a href="#"># Team Members</a>
                  </li>
                </ul>
              </div>
            </div>
          </F.FooterArea>
        </Container>
        <Container>
          <div className="copy-area">
            <div>
              <span>&copy; Todos os direitos reservados <a href="#">Onzevibe</a></span>
            </div>
            <div className="social-footer">
              <a href="" className="social-footer-link"><AiOutlineInstagram/></a>
              <a href="" className="social-footer-link"><AiOutlineTwitter/></a>
              <a href="" className="social-footer-link"><AiOutlineBehance/></a>
            </div>
          </div>
        </Container>
      </F.FooterContainer>
    </>
  );
}
